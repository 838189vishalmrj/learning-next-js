"use client"

const studentDetails = ({params}) => {

    console.log(params);
  return (
    <div>
        <h1>Student Details</h1>
        <h2>Name:{params.student.toUpperCase()}</h2>
    </div>
  )
}

export default studentDetails