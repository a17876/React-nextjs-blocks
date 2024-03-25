import { db } from "@/db"
import { redirect } from 'next/navigation'
import * as actions from "@/actions";


export default function BlockCreatePage() {
  return (
    <form action={actions.createBlock}>
      <h3 className="font-bold m-3">Create a Block</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded p-2 w-full"
            name="title"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            className="border rounded p-2 2-full"
            name="code"
            id="code"
          />
        </div>
        <button
          className="rounded p-2 bg-blue-600 hover:bg-blue-500 text-white"
          type="submit"
        >
          Create
        </button>
      </div>
    </form>
  );
}
