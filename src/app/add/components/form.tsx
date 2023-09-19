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

    await HttpService("/add", { method: "POST", body: formData });
  }
  return (
    <form className="flex gap-8 flex-col" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}
