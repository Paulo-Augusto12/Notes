import { Button } from "../ui/button";

export function Sidebar() {
  return (
    <aside className="border-r-2  w-48 px-4 py-12 flex justify-center">
      <div className="flex flex-col">
        <Button className="rounded-full bg-slate-100 h-12 w-12 flex items-center justify-center font-bold text-slate-950 text-xl">
          +
        </Button>
      </div>
    </aside>
  );
}
