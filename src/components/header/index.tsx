import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ToggleTheme } from "../toggleTheme";
import { SearchBar } from "../searchBar";
import Link from "next/link";

export function Header() {
  const user = "Paulo";
  return (
    <header className="py-8 px-4 border-b-2">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-4 items-center">
          <Link href={'/'}>
          <h1 className="text-xl font-semibold">Notes</h1>
          </Link>
          <SearchBar />
        </div>
        <div className="flex flex-row items-center gap-5">
          <h1 className="font-bold text-lg">Paulo</h1>
          <Avatar className="cursor-pointer h-12 w-12 hover:opacity-75">
            <AvatarImage />
            <AvatarFallback>{user[0]}</AvatarFallback>
          </Avatar>
          <ToggleTheme />
        </div>
        </div>
    </header>
  );
}
