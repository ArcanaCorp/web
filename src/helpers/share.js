import { workMode } from "./texts";

export const messageShareJob = (job) => {
const message = `
ARCANA está buscando talento
    
*Puesto*: ${job.title}
*Área*: ${job.team}
*Modalidad*: ${workMode[job.work_mode] || 'Remoto'}
*Ubicación*: ${job.location || 'Latam'}
    
Postula aquí 👇
https://arcanacorp.netlify.app/careers/?job=${job.slug}
`;
return message;
}