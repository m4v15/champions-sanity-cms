import Link from "next/link";

import { Button } from "@/components";
import { ReactNode } from "react";
import { AppConfig } from "@/utils/AppConfig";

type VolunteerSectionProps = {
  title: string;
  description: ReactNode;
  link: string;
  linkText: string;
  order: number;
};

const VolunteerSection = (props: VolunteerSectionProps) => {
  return (
    <div className={`sm:order-${props.order} flex flex-col items-center gap-6 h-full justify-between`}>
      <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
        {props.title}
      </h2>

      <div className="flex-col items-center">
        {props.description}
      </div>
      <Link href={props.link} rel="noopener noreferrer" target="_blank">
        <Button text={props.linkText} />
      </Link>
    </div>
  );
};

export default function Volunteer() {
  return (
    <div className="antialiased">
      <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-start">
          <VolunteerSection
            title="Become a Champion"
            description={
              <>
                <p className="ms-1 font-semibold sm:mb-1 sm:ms-2">
                  Championing a fund means you take on an existing GoFundMe for
                  a Gazan family and do your best to fundraise using online and
                  offline methods.
                </p>
                <br />
                <p className="ms-1 sm:mb-1 sm:ms-2">
                  This could include posting on your social media, hosting a
                  fundraiser dinner, raffling art or other goods, or other
                  creative ideas. We have a collection of crowdsourced ideas, so
                  you wouldn&apos;t be starting from scratch when it comes to
                  planning!
                  <br />
                  <br />
                  It is a big commitment, and can be a bit daunting, but it is
                  also extremely rewarding and meaningful - and you won&apos;t
                  be alone! You would be supported by a community of champions
                  around the world who are sharing ideas, information, and
                  support.
                </p>
              </>
            }
            link={AppConfig.sign_up_link}
            linkText="Become A Champion"
            order={1}
          />
          <VolunteerSection
            title="Connect your account"
            description={
              <>
                <p className="ms-1 font-semibold sm:mb-1 sm:ms-2">
                  Many Palestinians in Gaza are unable to set up a GoFundMe due
                  to restrictions on GoFundMe (and other fundraising platforms)
                  for connecting Palestinian bank accounts to the website.
                </p>
                <br />
                <p className="ms-1 sm:mb-1 sm:ms-2">
                  For this reason many Palestinians have set up an initial
                  fundraising page but need someone in the West to connect their
                  bank account, and then commit to transfering the money to the
                  desired recipient. Or they have been unable to set up a
                  GoFundMe at all and need support to do that
                </p>
              </>
            }
            link="https://docs.google.com/forms/d/15cm3Ujy3H7PMGfceLG3fpCi8jRd4Cip1wzjPgbGLKSU/viewform?ts=66269362&edit_requested=true"
            linkText="Set up or connect a GoFundMe"
            order={2}
          />
        </div>
      </div>
    </div>
  );
}
