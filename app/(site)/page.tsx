'use'

import getSongs from "@/actions/getSongs";
import getSongsByGenre from "@/actions/getSongsByGenre";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

import PageContent from "./components/PageContent";
import Image from "next/image";
import Categories from "@/components/Genres";
import Logo from "@/components/Logo";

export const revalidate = 0;

interface SearchProps {
  searchParams: { genre: string }
};

export default async function Home({ searchParams}: SearchProps) {
  // const songs = await getSongs();
  const songs = await getSongsByGenre(searchParams.genre);

  return (
    <div
      className="
        bg-neutral-900 
        rounded-lg 
        h-full 
        w-full 
        overflow-hidden 
        overflow-y-auto
      "
    >
      <Header>
        <div className="">
          {/* <h4 
            className="
            text-white 
              text-2xl 
              font-semibold
              m-auto
              text-center
            ">

               Song Instrumentals
          </h4> */}
          <div 
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              xl:grid-cols-3 
              2xl:grid-cols-4 
              gap-3 
              mt-4
            "
          >
            {/* <ListItem 
              name="Liked Songs" 
              image="/images/liked.png" 
              href="liked" 
            /> */}
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-center items-center">
          {/* <h1 className="text-white text-2xl font-semibold ">
            Browse
          </h1> */}
          {/* <hr /> */}
      
        </div>
        <Categories/>
        <PageContent songs={songs} />
      </div>
    </div>
  )
}