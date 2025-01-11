import Link from 'next/link';
import { getLinks } from '@/sanity/sanity.query';
import { SanityLinksType } from '@/types';

import { Button, Section, ExternalLink } from '@/components'
export default async function Links() {
    const links: SanityLinksType[] = await getLinks()

    const projects = links && links.filter(link => link.type?.includes('project'))
    const media = links && links.filter(link => link.type?.includes('media'))

    return <div className="text-gray-600 antialiased">
        <Section>
            <div className="mt-5 flex flex-col items-center text-gray-950">
                <div className="w-full text-left">
                    <div className="text-2xl font-bold">
                        Other Projects we are part of
                    </div>
                    {projects.map(project => {
                        return (
                            <>
                                <br />
                                <ExternalLink
                                    key={project._id}
                                    url={project.url}
                                    text={project.text}
                                />
                                <br />
                            </>)
                    })}
                    <br />
                    <div className="text-2xl font-bold">
                        Gaza Fundraising Coverage in the Media
                    </div>
                    {media.map(media => {
                        return (
                            <>
                                <br />
                                <ExternalLink
                                    key={media._id}
                                    url={media.url}
                                    text={media.text}
                                />
                                <br />
                            </>)
                    })}
                </div>
                <br />
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
    </div>
};

