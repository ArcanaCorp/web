import { supabase } from '../libs/supabase';
import francoperez from '../shared/img/francoperez.png'
import brayan from '../shared/img/brayan.avif'

export const devs = [
    {
        id: 1,
        photo: francoperez,
        name: 'Franco Pérez',
        username: 'FrancoPerezCaro',
        url: 'https://x.com/FrancoPerezCaro',
        position: 'CEO',
        location: 'Jauja'
    },
    {
        id: 2,
        photo: brayan,
        name: 'Brayan Omar',
        username: 'brayanomar',
        url: 'https://x.com/FrancoPerezCaro',
        position: 'CTO',
        location: 'Jauja'
    },
    {
        id: 3,
        photo: brayan,
        name: 'Sofia Mariana',
        username: 'sofiamariana',
        url: '',
        position: 'CDO',
        location: 'Jauja'
    }
]

export async function getEmployees() {
    const { data, error } = await supabase
        .from('employes')
        .select('id, fullname, position, location, photo_url, link_network')
        .order('id', { ascending: true });

    if (error) throw error;
    return data;
}

export async function getCareers() {
    const { data, error } = await supabase
        .from('job_positions')
        .select('*')
        .order('id', { ascending: true });
    if (error) throw error;
    return data;
}