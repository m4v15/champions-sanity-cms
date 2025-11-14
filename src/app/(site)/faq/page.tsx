import Link from "next/link";
import { Button } from "@/components";
import { Faqs } from "@/scenes/Home/components";
import { AppConfig } from "@/utils/AppConfig";

export default function FaqsPage() {
  return (
    <div className="mx-auto py-8 px-3 lg:px-14 grid gap-10">
      <Faqs />
      <div className="mx-auto">
        <Link
          href={AppConfig.sign_up_link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button text="Become A Champion" />
        </Link>
      </div>
    </div>
  );
}
