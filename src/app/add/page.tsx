import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Form } from "./components/form";
import Link from "next/link";

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
        <Form>
          <CardContent className="flex flex-col space-y-8">
            <div>
              <Label htmlFor="title">Título</Label>
              <Input id="title" name="title" />
            </div>
            <div>
              <Label htmlFor="content">Conteúdo</Label>
              <Textarea
                id="content"
                className="min-h-[250px] resize-none"
                name="content"
              />
              <span className="text-muted-foreground">
                O campo acima possui suporte a{" "}
                <Link href={"https://www.markdownguide.org/"}>
                  <code className="text-secondary-foreground cursor-pointer">
                    Markdown
                  </code>
                </Link>
              </span>
            </div>

            <CardFooter className="flex justify-end gap-2">
              <Button type="submit">Adicionar</Button>
              <Link href={"/"}>
                <Button variant={"secondary"} type="reset">
                  Cancelar
                </Button>
              </Link>
            </CardFooter>
          </CardContent>
        </Form>
      </Card>
    </div>
  );
}
