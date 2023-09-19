"use client";

import { FormEvent, ReactNode } from "react";
import { HttpService } from "../../../services/http/httpService";

interface IFormProps {
  children: ReactNode;
}
export function Form({ children }: IFormProps) {
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    await HttpService("/addnote", {
      method: "POST",
      body: formData,
      cache: 'no-cache'
    });
  }
  return (
    <form className="flex gap-8 flex-col" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
