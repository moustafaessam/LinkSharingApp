import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const anionKey = process.env.NEXT_PUBLIC_SUPABASE_ANION_KEY as string;

export const supabase = createClient(url, anionKey);
