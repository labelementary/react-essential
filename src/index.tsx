import { ThemeToggle } from "@/components/theme-toggle";
import { Label } from "@/primitives/label";
import { createFileRoute } from "@tanstack/react-router";
import { useHead } from "@unhead/react";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

function Home() {
  useHead({
    title: "React Essential | Elementary",
  });
  return (
    <div
      className={"relative flex h-screen flex-col items-center justify-center"}
    >
      <Label className={"text-5xl"}>React Essential</Label>
      <p className={"my-6 w-[38rem] text-center text-sm"}>
        An Essential Template to get started with React.js application with
        essential.
      </p>
      <ThemeToggle />
    </div>
  );
}
