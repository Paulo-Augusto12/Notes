import { Pen } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface INoteCardProps {
  description: string;
  title: string;
}
export function NoteCard({ description, title }: INoteCardProps) {
  const x = new Date();
  const date = `${x.getDate()}/0${x.getMonth() + 1}/${x.getFullYear()}`;
  return (
    <Card className="max-w-[30%] h-96 flex flex-col justify-between">
      <div className="max-h-[55%]">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="resize-none max-h-[100%] flex flex-nowrap overflow-y-scroll no-scrollbar">
          <h5 className="text-ellipsis ">{description}</h5>
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
