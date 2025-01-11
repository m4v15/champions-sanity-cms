import { Section, Button } from '@/components'
import { getContent } from '@/sanity/sanity.query';
import { SiteContentType } from '@/types';
import Link from 'next/link';
import { PortableText, PortableTextComponents } from "@portabletext/react";


const portableTextComponents: PortableTextComponents = {
    marks: {
        strong: ({ children }) => <span className="font-semibold">{children}</span>
    },
}


const About = async () => {

    const content: SiteContentType[] = await getContent()

    return (
        <Section>
            <div className="mt-5 flex flex-col items-center text-gray-950">
                <div className="w-full text-left font-light">
                    {content && content[0] && (
                        <PortableText
                            value={content[0].aboutText}
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