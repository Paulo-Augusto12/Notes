import { NoteCard } from "../components/noteCard";
import { HttpService } from "../services/http/httpService";
import Link from "next/link";

type x = {
  notes: {
    title: string;
    description: string;
  }[];
};

export default async function Home() {
  const response = await HttpService<x>("/getnotes");

  return (
    <>
      {response.notes.length ? (
        <div className="grid grid-cols-4 gap-4 px-4 py-8">
          {response.notes.map(({ description, title }) => (
            <NoteCard description={description} title={title} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center w-full flex-col">
          <h1 className="font-bold">Você ainda não possui anotações !</h1>
          <Link href={"/add"}>
            <h2 className="text-muted-foreground">
              Clique aqui para fazer sua primeira anotação
            </h2>
          </Link>
        </div>
      )}
    </>
  );
}
