import { Card } from "@/components";
import { getFunds } from "@/sanity/sanity.query";


export default async function Fundraisers() {

  const funds = await getFunds()

  return (
    <div className="text-gray-800 antialiased">
      <div className="mx-auto max-w-screen-xl p-3">
        <div className="w-full text-left">
          <div className=" text-2xl font-bold">Funds We&apos;re Supporting</div>
          <br />
          All of these funds come from people in Gaza we know personally, or
          else friends of people we know personally. Please support and donate
          to as many as you can. <br />
          <br />
          <p className="text-xs italic">
            Please note, the amount raised here may not update for a few hours
            after donations, although it will update on the GoFundMe page
            directly
          </p>
          <br />
        </div>
        <div className="margin auto flex flex-wrap">
          {funds.sort((a, b) => (a.raised || 0) > (b.raised || 0) ? 1 : -1).map(fund => <Card key={fund._id} {...fund} />)}
        </div>
      </div>
    </div>
  );
}
