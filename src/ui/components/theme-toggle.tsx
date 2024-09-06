import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className={"inline-flex flex-row gap-2 rounded-2xl bg-secondary p-1"}>
      <SunIcon
        className={
          "cursor-pointer rounded-full p-1 text-secondary-foreground hover:bg-primary/20"
        }
        onClick={() => setTheme("light")}
        width={24}
        height={24}
      />
      <MoonIcon
        className={
          "cursor-pointer rounded-full p-1 text-secondary-foreground hover:bg-primary/20"
        }
        onClick={() => setTheme("dark")}
        width={24}
        height={24}
      />
    </div>
  );
}
