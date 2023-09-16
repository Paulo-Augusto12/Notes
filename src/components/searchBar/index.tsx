'use client'

import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function SearchBar() {
  return (
    <div className="flex flex-row gap-3 items-center">
      <Input id="search_bar" placeholder="Search" className="outline-none" />
      <Button variant="outline">
        <Search />
      </Button>
    </div>
  );
}
