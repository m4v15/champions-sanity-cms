import type { ReactNode } from 'react';
import Link from 'next/link';


type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => (
  <div
    className={`mx-auto max-w-screen-lg px-3 ${props.yPadding ? props.yPadding : 'py-16'
      }`}
  >
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

type IButtonProps = {
  text: string;
};

const Button = (props: IButtonProps) => {


  return (
    <div className="inline-block text-center text-white bg-black text-base font-semibold py2 px-4">
      {props.text}
    </div>
  );
};

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-left">
    <h1 className="whitespace-pre-line text-2xl font-bold leading-hero text-gray-100">
      {props.title}
    </h1>
    <div className="mb-16 mt-4 text-xl text-gray-100">{props.description}</div>

    {props.button}
  </header>
);


export default function Home() {
  return (
    <div
      className="mx-auto max-w-screen-lg bg-cover"
      style={{
        backgroundImage: `url('/background-image.webp')`,
        height: '800px',
        maxWidth: '1400px',
      }}
    >
      <Section yPadding="pt-10 pb-32">
        <HeroOneButton
          title={
            <>
              <span className="text-3xl text-gray-900">
                Connect with and champion Gazan families trying to survive
                genocide
              </span>
            </>
          }
          description="We are a collective of allies around the world who are connecting with families in Gaza as pen pals and champions for their fundraising campaigns to survive day-to-day life Gaza.  
"
          button={
            <Link href="/volunteer">
              <Button text="Volunteer With Us" />
            </Link>
          }
        />

        <br />
        <Link href="/funds">
          <Button text="See the funds we&apos;re supporting" />
        </Link>
      </Section>
    </div>);
}
