// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';
import { REACT_APP_API, REACT_APP_API_KEY } from '../config';

export const supabase = createClient(
    REACT_APP_API, REACT_APP_API_KEY
);