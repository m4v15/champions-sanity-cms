import { Button } from '@/components'
import Link from 'next/link';

import type { ReactNode } from 'react';


type HeroProps = {
    title: ReactNode;
    description: string;
};

const Hero = (props: HeroProps) => (
    <div className="bg-hero bg-center bg-no-repeat bg-cover h-hero max-w-hero mx-auto" >
        <header className="text-left mx-auto max-w-screen-lg px-3 pt-8 w-100">
            <h1 className="whitespace-pre-line text-2xl font-bold leading-hero text-gray-100">
                <span className="text-3xl text-gray-900">
                    {props.title}
                </span>
            </h1>
            <div className="mb-16 mt-4 text-xl text-gray-100">{props.description}</div>

            <Link href="/volunteer">
                <Button text="Volunteer With Us" />
            </Link>

            <br /><br />
            <Link href="/funds">
                <Button text="See the funds we&apos;re supporting" />
            </Link>

        </header>
    </div>
);

export default Hero