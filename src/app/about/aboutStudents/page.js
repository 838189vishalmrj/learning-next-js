import Link from "next/link"


const page = () => {
  return (
    <div>
        <h1>About studens page</h1>
        <br />
        <Link href={'/about'}>Go to About page</Link>
    </div>
  )
}

export default page