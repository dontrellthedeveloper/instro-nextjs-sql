"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();

    return (
        <Image
        onClick={() => router.push('/')}
        src="/images/instro-2.png"
        width={75}
        height={75}
        alt="Picture of the author"
        className="m-auto mb-2 cursor-pointer"
        />
    )
}

export default Logo;