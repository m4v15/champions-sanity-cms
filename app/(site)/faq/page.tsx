
import { Button } from "@/components";
import { Faqs } from "@/scenes/Home/components";



export default function Home() {
  return (
    <div className="mx-auto py-8 px-3 lg:px-14 grid gap-10">
      <Faqs />
      <div className="mx-auto">
        <Button text="Become A Champion" />
      </div>
    </div>
  );
}
