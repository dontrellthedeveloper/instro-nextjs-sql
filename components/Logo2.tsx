
"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo2 = () => {
    const router = useRouter();

    return (
        
        <Image
        onClick={() => router.push('/')}
        src="/images/instro-2.png"
        width={50}
        height={50}
        alt="Picture of the author"
        className="m-auto mb-2 cursor-pointer"
        />
    )
}

export default Logo2;