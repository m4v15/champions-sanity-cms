import { About, Hero } from '@/components';

export default function Home() {
  return (
    <>
      <Hero
        title="Connect with and champion Gazan families trying to survive genocide"
        description="We are a collective of allies around the world who are connecting with families in Gaza as pen pals and champions for their fundraising campaigns to survive day-to-day life Gaza."
      />

      <div className="mx-auto max-w-screen-lg">
        <About />
      </div>
    </>
  );
}
