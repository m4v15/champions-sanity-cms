import type { ReactNode } from 'react';
import Link from 'next/link';

type SectionProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

const Section = (props: SectionProps) => (
  <div className='mx-auto max-w-screen-lg px-3'>
    {(props.title || props.description) && (
      <div className="mb-12 text-center">
        {props.title && (
          <h2 className="text-4xl font-bold text-gray-900">{props.title}</h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

type ButtonProps = {
  text: string;
};

const Button = (props: ButtonProps) => (
  <div className="inline-block text-center text-white bg-black text-base font-semibold py2 px-4">
    {props.text}
  </div>
);

type HeroImageProps = {
  title: ReactNode;
  description: string;
};

const HeroImage = (props: HeroImageProps) => (
  <div className="bg-hero bg-center bg-no-repeat bg-cover h-hero max-w-hero mx-auto" >
    <header className="text-left mx-auto max-w-screen-lg px-3 pt-8">
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


export default function Home() {
  return (
    <>
      <HeroImage
        title="Connect with and champion Gazan families trying to survive genocide"
        description="We are a collective of allies around the world who are connecting with families in Gaza as pen pals and champions for their fundraising campaigns to survive day-to-day life Gaza."
      />

      <div className="mx-auto max-w-screen-lg">
        <Section>
          <div className="mt-5 flex flex-col items-center text-gray-950">
            <div className="w-full text-left font-light">
              <div className="font-extrabold">About us</div>
              <br />
              This initiative is led by Anam Raheem and Matt Davis, two friends and
              former colleagues who worked at Gaza Sky Geeks, a community center and
              tech hub in Gaza City. Gaza Sky Geeks is an initiative of Mercy Corps,
              an international aid organization. <br />
              <br />
              At Gaza Sky Geeks, Matt and Anam gained a big, beautiful community of
              coworkers and friends who now need our support to survive genocide.
              <br />
              <br />
              <div className="font-extrabold">About the initiative</div>
              <br />
              Gaza Champions connects allies from around the world who are
              interested in being a volunteer champion for a Gazan family’s
              fundraiser. We assign an individual GoFundMe to the champion, and then
              they fundraise for the family using online and offline methods. We
              also connect them directly to the Gazan they are supporting as a pen
              pal. <br />
              <br />
              So far, we have nearly 150 active champions who are in a supportive
              WhatsApp group sharing creative fundraising ideas and keeping each
              other motivated to support their families. This initiative has gone
              above and beyond our dreams for it— in one week we saw the funds
              we&apos;ve been championing raise over $96,000 and many individuals
              have been able to evacuate as a result.
              <br />
              <br />
              We originally launched this initiative while the Rafah border was
              operational and Gazans (who were able to secure the funds to escape
              Gaza) were able to evacuate to Egypt. At the time, Gazans had launched
              GoFundMe fundraisers in order to pay the exorbitant fees at the rate
              of $5000/adult and $2500/child to Egyptian-state affiliated company
              Hala. Thankfully, many families were successfully able to escape Gaza
              with the help of a Gaza Champion who fundraised for them.
              <br />
              <br />
              However, the Rafah border has now been closed for months and it is
              unclear if and when it will open again. In the meantime, there is
              still a need for families in Gaza to raise money.{' '}
              <span className="font-semibold">
                Day-to-day life in Gaza has become incredibly expensive due to the
                scarcity of goods in the market and most Gazans have lost their
                livelihoods and homes in this ongoing catastrophe. There is still a
                dire need for the support of allies to make ends meet while they
                endure genocide.
              </span>
              <br />
              <br />
              Beyond directly supporting the safety of families in Gaza, this
              initiative offers other gifts. It gives us allies on the outside a
              chance to convert our passive support of Gaza into an active one by
              stretching our creativity and intellect and taking matters into our
              own hands. It roots us into our personal and collective power. If our
              government will not protect and uphold Palestinian life, then we will.
              It also gives us, some who are witnessing genocide and others who are
              enduring it, a chance to say, “I&apos;ve made a new friend.” This is
              true solidarity, true resistance, and true love. <br />
              <br />
              If you&apos;d like to join our small but mighty movement, register by
              clicking the button below.
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
    </>
  );
}
