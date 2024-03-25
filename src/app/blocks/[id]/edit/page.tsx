import BlockEditForm from "@/components/BlockEditForm";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface BlockEditProps {
    params: {
        id: string
    }
}

export default async function BlockEditPage ({ params }: BlockEditProps) {
    const block = await db.snippet.findUnique({
        where: { id: parseInt(params.id) },
    });

    if (!block) {
        return notFound();
    }

    return (
        <BlockEditForm block={block} />
    )
}