
"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Logo2 = () => {
    const router = useRouter();

    return (
        <div className={`
        flex 
        flex-col 
        
        items-center 
        justify-center 
        gap-2
        p-5
    
        hover:text-slate-100
        transition
        cursor-pointer
        text-slate-100
        md:hidden
      `}>
        <Image
        onClick={() => router.push('/')}
        src="/images/instro-4.png"
        width={80}
        height={80}
        alt="Picture of the author"
        className="m-auto mb-2 cursor-pointer"
        />
        <div className="font-medium text-sm text-center">Instro</div>
        </div>

    )
}

export default Logo2;