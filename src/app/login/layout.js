"use client"

import Link from "next/link";
import './login.css'
import { usePathname } from "next/navigation";

export default function Layout({children}) {
    const pathName = usePathname();
    console.log(pathName);
  return (
    <div>
        {
            pathName !== '/login/loginTeacher'?<ul className="login-list">
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
        </ul>:<Link href={'/login'}>Go to main login page</Link>
        }
        <hr />
        {children}
    </div>
  )
}
