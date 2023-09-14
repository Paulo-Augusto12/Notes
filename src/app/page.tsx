import { Pen } from "lucide-react";
import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { NoteCard } from "../components/noteCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1 flex-row">
        <Sidebar />
        <div className="flex flex-wrap flex-col px-4 py-8">
          <NoteCard />
        </div>
      </div>
    </div>
  );
}
