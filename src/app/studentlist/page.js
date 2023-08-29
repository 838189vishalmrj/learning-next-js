
import Link from "next/link"

const Student = () => {

    const studentData = [
        {name:'vishal',id:1},
        {name:'mohan',id:2},
        {name:'sohan',id:3},
        {name:'mukesh',id:4}
    ]

  return (
    <div>
        <ul>
            {
                studentData.map((data)=>(
                    <li key={data.id}>
                        <Link href={`/studentlist/${data.name}`}>{data.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Student