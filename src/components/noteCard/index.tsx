import { Pen } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function NoteCard() {
  const x = new Date();
  const date = `${x.getDate()}/0${x.getMonth() + 1}/${x.getFullYear()}`;
  return (
    <Card className="w-80 h-96 flex flex-col justify-between">
      <div className="max-h-[55%]">
        <CardHeader>
          <CardTitle>Tarefa nova</CardTitle>
        </CardHeader>
        <CardContent className="resize-none max-h-[100%] flex flex-nowrap overflow-y-scroll no-scrollbar">
          <h5 className="text-ellipsis ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            placerat non leo non volutpat. Vivamus pellentesque leo euismod
            sapien luctus, sit amet dictum urna vehicula. Integer commodo massa
            nec diam interdum aliquam. Integer faucibus erat enim, at auctor est
            efficitur non. Nulla pretium consequat tortor a venenatis. Sed eget
            libero porta, lacinia ex et, sollicitudin diam. Nulla facilisi.
            Maecenas quis erat in lorem rhoncus consectetur. Sed eget porta
            odio.
          </h5>
        </CardContent>
      </div>
      <CardFooter className="pt-4 flex justify-between items-center">
        <p>{date}</p>
        <Button className="rounded-full w-14 h-14" variant="outline">
          <Pen />
        </Button>
      </CardFooter>
    </Card>
  );
}
