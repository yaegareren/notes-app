import Image from "next/image";
import logo from "@/assets/logoipsum-280.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/notes");

  return (
    <>
      <main className="flex flex-col h-screen items-center justify-center gap-5">
        <div className="flex items-center gap-4">
          <Image src={logo} alt="logo" width={100} height={100} />
          <span className="font-bold tracking-tight text-4xl lg:text-5xl text-gray-700">
            Notes Application
          </span>
        </div>
        <p className="text-center max-w-prose">
          A modern notes application built using next.js, mongodb, tailwindcss
          and clerk. <br />
          It enables CRUD operations and supports dual theme.
        </p>
        <Button size="lg" asChild>
          <Link href="/notes">Open</Link>
        </Button>
      </main>
    </>
  );
}
