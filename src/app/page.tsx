import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { NoteCard } from "../components/noteCard";
import { HttpService } from "../services/http/httpService";

type x = {
  notes: {
    title: string;
    description: string;
  }[];
};
export default async function Home() {
  const response = await HttpService<x>("/getnotes", { cache: "no-cache" });

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 flex-row">
        <Sidebar />
        <div className="flex flex-wrap flex-row justify-start items-start gap-4 px-4 py-8">
          {response.notes.map(({ description, title }) => (
            <NoteCard description={description} title={title} />
          ))}
        </div>
      </div>
    </main>
  );
}
