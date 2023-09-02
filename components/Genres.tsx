'use client'

import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiLovers,
  GiWindmill
} from 'react-icons/gi';
import {SiDiscogs} from 'react-icons/si'
import { FaSkiing } from 'react-icons/fa';
import { BsMegaphone, BsSnow, BsSpeaker } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla, MdSpeakerPhone } from 'react-icons/md';

import Container from "./Container";
import GenresBox from "./GenresBox";
import { usePathname, useSearchParams } from 'next/navigation';
import GenresOption from './GenresOption';

export const genres = [
    {
        label: 'R&B Vibe',
        icon: TbBeach,
      },
      {
        label: 'R&B Slow',
        icon: GiLovers,
      },
      {
        label: 'R&B Pop',
        icon: IoDiamond,
      },
      {
        label: 'Dance Pop',
        icon: SiDiscogs,
      },
    {
      label: 'Dance Island',
      icon: GiIsland,
    },
    {
      label: 'HipHop Hype',
      icon: BsMegaphone,
    },

    {
      label: 'HipHop Trap',
      icon: BsSpeaker,
    },

    {
      label: 'HipHop Misc',
      icon: MdSpeakerPhone,
    }

  ]

const Genres = () => {
    const params = useSearchParams();
    const genre = params?.get('genre');
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
      }

    return (
        <Container>
        <div
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            overflow-x-auto
          "
        >
          {genres.map((item) => (
            <GenresBox 
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={genre === item.label}
            />
          ))}
        </div>
        {/* <select name="cars" id="cars">
            <option value="All">All</option>
             {genres.map((item) => (
            <GenresOption 
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={genre === item.label}
            />
          ))}

        </select> */}
      </Container>
    );
};

export default Genres;