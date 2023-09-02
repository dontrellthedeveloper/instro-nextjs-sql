'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

import Link from "next/link";
import { IconType } from 'react-icons';
import { twMerge } from "tailwind-merge";

interface LikeItemProps {
    icon: IconType;
//   image: string;
//   name: string;
  href: string;
  active?: boolean;
  label: string;
}

const LikeItem: React.FC<LikeItemProps> = ({
    icon: Icon,
//   image,
//   name,
  href,
  active,
  label,
}) => {
  const router = useRouter();
  const authModal = useAuthModal();
  const { user } = useUser();
  
  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    router.push(href);
  };

  return ( 

    <>
        {/* <button
      onClick={onClick}
      className="
        relative 
        group 
        flex 
        items-center 
        rounded-md 
        overflow-hidden 
        gap-x-4 
        bg-neutral-100/10 
        cursor-pointer 
        hover:bg-neutral-100/20 
        transition 
        pr-4
      "
    >
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image
          className="object-cover"
          src={image}
          fill
          alt="Image"
        />
      </div>
      <p className="font-medium truncate py-5">
        {name}
      </p>
      <div 
        className="
          absolute 
          transition 
          opacity-0 
          rounded-full 
          flex 
          items-center 
          justify-center 
          bg-green-500 
          p-4 
          drop-shadow-md 
          right-5
          group-hover:opacity-100 
          hover:scale-110
        "
      >
        <FaPlay className="text-black" />
      </div>
    </button> */}
        <Link
              onClick={onClick}
      href={href}
      className={twMerge(
        `
        flex 
        flex-row 
        h-auto 
        items-center 
        w-full 
        gap-x-4 
        text-md 
        font-medium
        cursor-pointer
        hover:text-white
        transition
        text-neutral-400
        py-1`,
        active && "text-neutral-400"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-100">{label}</p>
    </Link>
    </>
   );
}
 
export default LikeItem;