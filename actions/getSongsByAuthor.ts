import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

import { Song } from "@/types";

import getSongs from "./getSongs";

const getSongsByAuthor = async (author: string): Promise<Song[]> => {
  const supabase = createServerComponentClient({
    cookies: cookies
  });

  if (!author) {
    const allSongs = await getSongs();
    return allSongs;
  }

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .ilike('author', `%${author}%`)
    .order('created_at', { ascending: false })
    // .order('author', { ascending: true })

  if (error) {
    console.log(error.message);
  }

  return (data as any) || [];
};

export default getSongsByAuthor;