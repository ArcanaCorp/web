import { useState } from "react"
import { institutions, techCareers, techSkills } from "../helpers/texts"
import { supabase } from "../libs/supabase";

export default function ModalApply ({ job }) {

    const [ form, setForm ] = useState({
        fullname: '',
        email: '',
        phone: '',
        institution: '',
        career: '',
        level: '',
        skills: [],
        file: '',
        website: ''
    })

    const [ loading, setLoading ] = useState(false)

    const handleToggleSkill = (skill) => {
        setForm(prev => {
            const exists = prev.skills.includes(skill);

            return {
            ...prev,
            skills: exists
                ? prev.skills.filter(s => s !== skill)
                : [...prev.skills, skill]
            };
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Validar tipo MIME
        if (file.type !== 'application/pdf') {
            alert('Solo se permite subir archivos PDF');
            e.target.value = null;
            return;
        }

        // (Opcional) Validar tamaño — recomendado
        const maxSizeMB = 5;
        if (file.size > maxSizeMB * 1024 * 1024) {
            alert('El archivo no debe superar los 5MB');
            e.target.value = null;
            return;
        }

        setForm(prev => ({
            ...prev,
            file
        }));
    };
    
    const handleSubmit = async () => {
        try {
            // 1️⃣ Validaciones básicas
            if (!form.fullname || !form.email || !form.career || !form.institution || !form.file) {
                alert('Por favor completa todos los campos obligatorios y carga tu CV.');
                return;
            }

            setLoading(true)

            // 2️⃣ Subir CV a Supabase Storage
            const fileExt = form.file.name.split('.').pop();
            const fileName = `${form.fullname.replaceAll(' ', '_')}_${Date.now()}.${fileExt}`;
            const filePath = `${job.slug}/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('cvs') // bucket creado en Supabase
                .upload(filePath, form.file, {
                    cacheControl: '3600',
                    upsert: false
                });

            if (uploadError) throw uploadError;

            // 3️⃣ Obtener URL pública del archivo
            const { data } = supabase.storage.from('cvs').getPublicUrl(filePath);

            // 4️⃣ Guardar postulación en la tabla
            const { error: insertError } = await supabase
                .from('team_applications')
                .insert([{
                    job_position_id: job.id,
                    fullname: form.fullname,
                    email: form.email,
                    phone: form.phone,
                    institution: form.institution,
                    career: form.career,
                    experience_level: form.level,
                    skills: form.skills, // json array
                    cv_url: data.publicUrl,
                    website: form.website,
                    status: 'new'
                }]);

            if (insertError) throw insertError;

            alert('Tu postulación se ha enviado correctamente 🚀');
            
            // 5️⃣ Limpiar formulario
            setForm({
                fullname: '',
                email: '',
                phone: '',
                institution: '',
                career: '',
                level: '',
                skills: [],
                file: '',
                website: ''
            });

        } catch (err) {
            console.error(err);
            alert('Ocurrió un error al enviar tu postulación: ' + err.message);
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className="flex flex-col gap-sm scroll-y scroll-y-hidden" style={{maxHeight: '400px'}}>
            <div className="w-full">
                <label htmlFor="fullname" className="inline-block text-sm text-gray-300 mb-sm">Ingresa tu nombre completo</label>
                <div>
                    <input type="text" className="w-full h-50 p-sm rounded-sm bg-muted text-white" name="fullname" id="fullname" value={form.fullname} placeholder="Ingresa tu nombre completo" onChange={(e) => setForm(prev => ({...prev, fullname: e.target.value}))} />
                </div>
            </div>
            <div className="w-full flex gap-sm">
                <div className="w-full">
                    <label htmlFor="email" className="inline-block text-sm text-gray-300 mb-sm">Ingresa tu correo electrónico</label>
                    <div>
                        <input type="email" className="w-full h-50 p-sm rounded-sm bg-muted text-white" name="email" id="email" value={form.email} placeholder="Ingresa tu correo electrónico" onChange={(e) => setForm(prev => ({...prev, email: e.target.value}))} />
                    </div>
                </div>
                <div className="w-full">
                    <label htmlFor="phone" className="inline-block text-sm text-gray-300 mb-sm">Ingresa tu número telefónico</label>
                    <div>
                        <input type="number" className="w-full h-50 p-sm rounded-sm bg-muted text-white" inputMode="numeric" name="phone" id="phone" value={form.phone} placeholder="Ingresa tu número telefónico" onChange={(e) => setForm(prev => ({...prev, phone: e.target.value}))} />
                    </div>
                </div>
            </div>
            <div className="w-full flex gap-sm">
                <div>
                    <label htmlFor="institution" className="inline-block text-sm text-gray-300 mb-sm">Selecciona tu institución educativa</label>
                    <div>
                        <select className="w-full h-50 p-sm rounded-sm bg-muted text-white" name="institution" id="institution" value={form.institution} onChange={(e) => setForm(prev => ({...prev, institution: e.target.value}))}>
                            <option value={''} hidden>Selecciona tu institución educativa</option>
                            {institutions.map((ie, index) => (
                                <option key={index} value={ie}>{ie}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <label htmlFor="careersedu" className="inline-block text-sm text-gray-300 mb-sm">Selecciona tu carrera</label>
                    <div>
                        <select className="w-full h-50 p-sm rounded-sm bg-muted text-white" name="careersedu" id="careersedu" value={form.career} onChange={(e) => setForm(prev => ({...prev, career: e.target.value}))}>
                            <option value={''} hidden>Selecciona tu carrera</option>
                            {techCareers.map((tc, index) => (
                                <option key={index} value={tc}>{tc}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div>
                <label className="inline-block text-sm text-gray-300 mb-sm">Selecciona el nivel de experiencia</label>
                <div className="flex gap-sm">
                    <button className={`text-sm pv-xs ph-md border rounded-md ${form.level === 'low' ? 'bg-white text-dark' : 'bg-none text-white'}`} onClick={() => setForm(prev => ({...prev, level: 'low'}))}>Bajo</button>
                    <button className={`text-sm pv-xs ph-md border rounded-md ${form.level === 'intern' ? 'bg-white text-dark' : 'bg-none text-white'}`} onClick={() => setForm(prev => ({...prev, level: 'intern'}))}>Intermedia</button>
                    <button className={`text-sm pv-xs ph-md border rounded-md ${form.level === 'high' ? 'bg-white text-dark' : 'bg-none text-white'}`} onClick={() => setForm(prev => ({...prev, level: 'high'}))}>Alto</button>
                </div>
            </div>
            <div>
                <label className="inline-block text-sm text-gray-300 mb-sm">Selecciona skills</label>
                <div className="flex flex-wrap gap-sm">
                    {techSkills.map((skill, index) => {
                        const active = form.skills.includes(skill);
                        return (
                            <span key={index} className={`text-xs pv-xs ph-sm border rounded-pill pointer ${active ? 'bg-white text-dark' : ''}`} onClick={() => handleToggleSkill(skill)}>{skill}</span>
                        )
                    })}
                </div>
            </div>
            <div>
                <label className="inline-block text-sm text-gray-300 mb-sm">{'Carga tu Curriculum Vitae'}</label>
                <label className="center bg-muted rounded-md w-full text-sm text-gray-300 pointer" style={{height: '150px', backgroundColor: `${form.file ? '#001f01f2' : ''}`}} htmlFor="cv">{form.file ? `El archivo ${form.file.name} cargó correctamente` : 'Cargar CV'}</label>
                <div>
                    <input type="file" className="w-full h-50 p-sm rounded-sm bg-muted text-white" name="cv" id="cv" accept="application/pdf" hidden onChange={handleFileChange}/>
                </div>
            </div>
            <div>
                <label className="inline-block text-sm text-gray-300 mb-sm" htmlFor="website">Ingresa aquí la url de tu website o LikendIn</label>
                <div>
                    <input type="url" className="w-full h-50 p-sm rounded-sm bg-muted text-white" name="website" id="website" value={form.website} placeholder="Ingresa aquí la url de tu website o LikendIn" onChange={(e) => setForm(prev => ({...prev, website: e.target.value}))}/>
                </div>
            </div>
            <div>
                <button className="w-full h-50 rounded-pill text-medium" onClick={handleSubmit}>{loading ? 'Aplicando...' : 'Aplicar'}</button>
            </div>
        </div>
    )
}