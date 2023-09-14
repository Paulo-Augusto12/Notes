import { Button } from "../ui/button";

export function Sidebar() {
  return (
    <aside className="border-r-2  w-36 px-2 py-12 flex justify-center">
      <div className="flex flex-col">
        <Button className="rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
          +
        </Button>
      </div>
    </aside>
  );
}
