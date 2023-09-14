"use client";

import { Moon, Search, Sun } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { useTheme } from "next-themes";

export function Header() {
  const { setTheme, theme } = useTheme();
  return (
    <header className="py-8 px-4 border-b-2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4 items-center">
          <h1 className="text-xl font-semibold">Task management</h1>
          <div className="flex flex-row gap-3 items-center">
            <Input
              id="search_bar"
              placeholder="Search"
              className="outline-none"
            />
            <Button variant="outline">
              <Search />
            </Button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-5">
          <Button
            className="rounded-full h-12 w-12"
            variant={"outline"}
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "dark" ? <Moon /> : <Sun />}
          </Button>
          <h1 className="font-bold text-lg">Paulo</h1>
          <Avatar
            className="cursor-pointer h-12 w-12 hover:opacity-75"
          >
            <AvatarImage />
            <AvatarFallback className="bg-slate-500">
              {/* <Image alt="" src="https://cdn-icons-png.flaticon.com/512/666/666201.png" /> */}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
