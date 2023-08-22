import Link from "next/link"

const page = () => {
  return (
    <div>
        <h1>About college page</h1>
        <br />
        <Link href={'/about'}>Go to about page</Link>

    </div>
  )
}

export default page