import Link from "next/link";
import './about.css'

const Layout = ({ children }) => {
  return (
    <div>
        <ul className="login-list ">
            <h1>About Navigation</h1>
            <li>
                <Link href={'/about'}>About</Link>
            </li>
            <li>
                <Link href={'/about/aboutCollege'}>About College</Link>
            </li>
            <li>
                <Link href={'/about/aboutStudents'}>About Students</Link>
            </li>
        </ul>
        <hr />
      {children}
    </div>
  );
};

export default Layout;
