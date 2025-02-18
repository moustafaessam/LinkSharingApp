import { supabase } from "./supabase";

export async function signInWithSupabase(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    throw error;
  }
  return data;
}

export async function createAccountWithSupabase(
  email: string,
  password: string
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    console.log("error is", error);
    throw error;
  }
  if (data.user?.identities?.length === 0) {
    return "User already registered. Go to the Login page";
  } else {
    return data;
  }
}
