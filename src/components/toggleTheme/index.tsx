'use client'

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="rounded-full h-12 w-12"
      variant={"outline"}
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
}
