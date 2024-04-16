import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 w-56 p-4 flex-wrap">
      <Button size={"lg"} variant={"default"}>Click Me</Button>
      <Button size={"lg"} variant={"primary"}>Click Me</Button>
      <Button size={"lg"} variant={"primaryOutline"}>Click Me</Button>
      <Button size={"lg"} variant={"secondary"}>Click Me</Button>
      <Button size={"lg"} variant={"secondaryOutline"}>Click Me</Button>
      <Button size={"lg"} variant={"danger"}>Click Me</Button>
      <Button size={"lg"} variant={"dangerOutline"}>Click Me</Button>
      <Button size={"lg"} variant={"super"}>Click Me</Button>
      <Button size={"lg"} variant={"superOutline"}>Click Me</Button>
      <Button size={"lg"} variant={"ghost"}>Click Me</Button>
      <Button size={"lg"} variant={"sidebar"}>Click Me</Button>
      <Button size={"lg"} variant={"sidebarOutline"}>Click Me</Button>
    </div>
  );
}
