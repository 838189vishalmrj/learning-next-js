import Link from "next/link";
import './login.css'

export default function Layout({children}) {
  return (
    <div>
        <ul className="login-list">
        <h2>Login Navigation</h2>
            <li>
                <Link href={'/login'}>Login</Link>
            </li>
            <li>
                <Link href={'/login/loginStudents'}>Login Students</Link>
            </li>
            <li>
                <Link href={'/login/loginTeacher'}>Login Teacher</Link>
            </li>
        </ul>
        <hr />
        {children}
    </div>
  )
}
