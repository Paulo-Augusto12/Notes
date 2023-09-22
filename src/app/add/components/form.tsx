"use client";

import { FormEvent, ReactNode } from "react";
import { HttpService } from "../../../services/http/httpService";
import { useToast } from "../../../components/ui/use-toast";
import { useRouter } from "next/navigation";

interface IFormProps {
  children: ReactNode;
}
export function Form({ children }: IFormProps) {
  const { toast } = useToast();
  const { back, prefetch } = useRouter()
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = { title: formData.get('title'), description: formData.get('content') }
    
    try {
      await HttpService("/addnote", {
        method: "POST",
        body: JSON.stringify(body),
        cache: "no-cache",
      });

      toast({
        title: "Nota adicionada com sucesso",
        description:
          "você será redirecionado para a sua lista de novas para conferir sua nova anotação",
      });
      prefetch('/')
      back()
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Oh, algo deu errado",
        description: "Por favor tente de novo mais tarde",
      });
    }
  }
  return (
    <form className="flex gap-8 flex-col" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
