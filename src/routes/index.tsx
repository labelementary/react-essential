import { ThemeToggle } from "@/ui/components/theme-toggle";
import { Label } from "@/ui/primitives/label";
import { createFileRoute } from "@tanstack/react-router";
import { useHead } from "unhead";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

function Home() {
  useHead({
    title: "Unified React Essential | Elementary",
  });
  return (
    <div
      className={"relative flex h-screen flex-col items-center justify-center"}
    >
      <Label className={"text-5xl"}>React Essential</Label>
      <p className={"my-6 w-[38rem] text-center text-sm"}>
        Unified React.js Essential - An Essential Template to get started with
        react.js application with all the essentials included...
      </p>
      <ThemeToggle />
    </div>
  );
}
