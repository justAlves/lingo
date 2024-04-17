import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";
import Link from "next/link";

type Props = {
  title: string;
  description: string
}

export const UnitBanner = ({title, description}: Props) => {
  return (
    <div className="w-full rounded-xl bg-white p-5 text-neutral-700 flex items-center justify-between border-2 border-b-8">
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-lg">{description}</p>
      </div>
      <Link href={"/lesson"}>
        <Button variant={"secondary"} size={"lg"} className="hidden lg:flex">
          <NotebookText className="mr-2"/>
          Continue
        </Button>
      </Link>
    </div>
  )
}
