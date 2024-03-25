"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editBlock(id: number, code: string, formData: FormData) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/blocks/${id}`);
}

export async function deleteBlock(id: number, formData: FormData) {
  await db.snippet.delete({
    where: { id },
  });
  redirect("/");
}

export async function createBlock(formData: FormData) {
    const title = formData.get("title") as string; 
    const code = formData.get("code") as string;
    const block = await db.snippet.create({ data: { title, code }});
    redirect("/");
}
