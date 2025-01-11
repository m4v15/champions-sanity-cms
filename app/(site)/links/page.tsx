import Link from 'next/link';

import { Button, Section, ExternalLink } from '@/components'
export default function Links() {

    return <div className="text-gray-600 antialiased">
        <Section>
            <div className="mt-5 flex flex-col items-center text-gray-950">
                <div className="w-full text-left">
                    <div className="text-2xl font-bold">
                        Other Projects we are part of
                    </div>
                    <br />
                    <ExternalLink
                        url="https://opencollective.com/mutual-aid-gaza/projects/emergency-fund-gsg"
                        text="Gaza Mutual Aid fund - all money is sent directly to Palestinians in Gaza"
                    />
                    <br />
                    <br />
                    <ExternalLink
                        url="https://gaza.online"
                        text="Gaza Online - distributing e-sims to people in Gaza"
                    />
                    <br />
                    <br />
                    <ExternalLink
                        url="https://www.instagram.com/gazamemorymap/"
                        text="GazaMemoryMap roots Palestinian memory to land, affirming the inextinguishable truth that Gaza will always belong to the people of Palestine."
                    />
                    <br />
                    <br />
                    <div className="text-2xl font-bold">
                        Gaza Fundraising Coverage in the Media
                    </div>
                    <br />
                    <ExternalLink
                        url="https://hyperallergic.com/879012/raising-funds-to-help-samah-ramadan-family-of-10-exit-gaza/"
                        text="HYPERALLERGIC - Raising Funds to Help a Family of 10 Exit Gaza"
                    />
                    <br />
                    <br />
                    <ExternalLink
                        url="https://theintercept.com/2024/03/07/gaza-palestinians-border-crossing-egypt/"
                        text="The Intercept - Desperate to escape Gaza carnage, Palestinians are
                        forced to pay exorbitant fees to enter Egypt"
                    />
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
    </div>
};

