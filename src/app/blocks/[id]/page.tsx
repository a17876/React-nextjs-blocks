import { db } from "@/db";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import * as actions from "@/actions";

interface BlocShowPageProps {
  params: { id: string };
}

export default async function BlockShowPage({ params }: BlocShowPageProps) {
  const block = await db.snippet.findFirst({
    where: { id: parseInt(params.id) },
  });

  if (!block) {
    return notFound();
  }
  const editDeleteAction = actions.deleteBlock.bind(null, block.id);

  return (
    <>
      <div className="flex m-4 justify-between items-center">
        <Link className="border p-2 rounded" href={"/"}>
          Home
        </Link>

        <div className="flex gap-4">
          <Link
            key={block?.id}
            href={`${block?.id}/edit`}
            className="border p-2 rounded"
          >
            Edit
          </Link>
          <form action={editDeleteAction}>
            <button key={block?.id} className="border p-2 rounded">
              Delete
            </button>
          </form>
        </div>
      </div>
      <h1 className="text-xl font-bold p-5">{block.title}</h1>
      <code className="border p-2 rounded">{block?.code}</code>
    </>
  );
}
