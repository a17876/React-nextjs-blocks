import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Sorry, your code block was not found</h2>
      <p>Could not find requested resource</p>
      <Link className="border p-2 rounded" href="/">Return Blocks</Link>
    </div>
  )
}