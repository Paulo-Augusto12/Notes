import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { NoteCard } from "../components/noteCard";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 flex-row">
        <Sidebar />
        <div className="flex flex-wrap flex-col px-4 py-8">
          <NoteCard />
        </div>
      </div>
    </main>
  );
}
