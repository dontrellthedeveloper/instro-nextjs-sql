"use client";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiLovers,
  GiWindmill,
} from "react-icons/gi";
import { SiDiscogs } from "react-icons/si";
import { FaSkiing } from "react-icons/fa";
import { BsMegaphone, BsSnow, BsSpeaker } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla, MdSpeakerPhone } from "react-icons/md";

import qs from "query-string";

import Container from "./Container";
import GenresBox from "./GenresBox";
import { usePathname, useSearchParams } from "next/navigation";
import GenresOption from "./GenresOption";
import { useEffect, useState } from "react";
import StickyHeader from "./StickyHeader";
import Logo from "./Logo";
import Logo2 from "./Logo2";

export const genres = [
  {
    label: "R&B Vibes",
    icon: TbBeach,
  },
  {
    label: "R&B Slow",
    icon: GiLovers,
  },
  {
    label: "R&B Pop",
    icon: IoDiamond,
  },
  {
    label: "Dance Pop",
    icon: SiDiscogs,
  },
  {
    label: "Dance Island",
    icon: GiIsland,
  },
  {
    label: "HipHop Hype",
    icon: BsMegaphone,
  },

  {
    label: "HipHop Trap",
    icon: BsSpeaker,
  },

  {
    label: "HipHop Misc",
    icon: MdSpeakerPhone,
  },
];

const Genres = () => {
  const params = useSearchParams();
  const genre = params?.get("genre");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

//   const [scroll, setScroll] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       setScroll(window.scrollY > 40);
//     });
//     return () => {
//       window.removeEventListener("scroll", () => {
//         setScroll(false);
//       });
//     };
//   }, []);

  if (!isMainPage) {
    return null;
  }

  let currentQuery = {};

  if (params) {
    currentQuery = qs.parse(params.toString());
  }

  let temp = JSON.stringify(currentQuery);

  let newTemp = temp.replace(/[{()}]/g, "").replace(/['"]+/g, "");

  const genreHeader = newTemp.split(":").pop();

  return (
    <>
      <div
        className="
            text-white 
              text-2xl 
              font-semibold
              m-auto
              text-center
              pb-4
            "
      >
        {genreHeader ? (
          <>
            <h1>{genreHeader}</h1>
          </>
        ) : (
          <>
            <h1>All Song Instrumentals</h1>
          </>
        )}
      </div>
      <StickyHeader>
      <Container>
        <div>
          <div
            className="
            flex 
            flex-row 
            items-center 
            justify-between
            overflow-x-auto
         

          "
          >
            
            <Logo2/>

            {genres.map((item) => (
              <GenresBox
                key={item.label}
                label={item.label}
                icon={item.icon}
                selected={genre === item.label}
              />
            ))}
          </div>
        </div>
      </Container>
      </StickyHeader>

    </>
  );
};

export default Genres;
