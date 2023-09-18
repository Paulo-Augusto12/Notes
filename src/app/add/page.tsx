import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export default function Add() {
  return (
    <div className="w-full px-4 py-8 flex flex-col space-y-6">
      <Card className="min-h-[100px]">
        <CardHeader>
          <CardTitle className="font-bold">Adicionar nova nota</CardTitle>
          <CardDescription>
            Descreva da forma desejada sobre a sua nova anotação
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Label htmlFor="title">Título</Label>
            <Input id="title" />
          </form>
        </CardContent>
      </Card>
      <div className="flex flex-row justify-end gap-2">
        <Button>Adicionar</Button>
        <Button variant={"secondary"}>Cancelar</Button>
      </div>
    </div>
  );
}
