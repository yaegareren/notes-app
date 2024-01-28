import { auth } from "@clerk/nextjs";
import { Metadata } from "next";
import prisma from "@/lib/db/prisma";

export const metadata: Metadata = {
  title: "NotesApp - Notes",
};

export default async function Notespage() {
  const { userId } = auth();

  if (!userId) throw Error("userId undefined");

  const allNotes = await prisma?.note.findMany({ where: { userId } });

  return <div>{JSON.stringify(allNotes)}</div>;
}
