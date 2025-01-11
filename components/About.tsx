import { Section, Button } from '@/components'
import { getAbout } from '@/sanity/sanity.query';
import { AboutType } from '@/types';
import Link from 'next/link';
import { PortableText, PortableTextComponents } from "@portabletext/react";


const portableTextComponents: PortableTextComponents = {
    marks: {
        strong: ({ children }) => <span className="font-semibold">{children}</span>
    },
}


const About = async () => {

    const content: AboutType[] = await getAbout()

    return (
        <Section>
            <div className="mt-5 flex flex-col items-center text-gray-950">
                <div className="w-full text-left font-light">
                    {content && (
                        <PortableText value={content[0].aboutText}

                            components={portableTextComponents}

                        />
                    )}
                </div>
                <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdQBwxbU97VXa9Phi4ACSrQMfIJNp6ZFPfQvhAjJ2J1ekoMJg/viewform"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="pt-10"
                >
                    <Button text='Become A Champion' />
                </Link>
            </div>
        </Section>
    )
};

export default About