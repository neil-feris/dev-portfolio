// Header with links to home, about and contact pages

import Link from "next/link";
// import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <>
      <nav>
        <Link className="nav-home" href="/">
          Home
        </Link>
        <div className="nav-links">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
      <style jsx global>{`
        nav {
          width: 100%;
          max-width: 100vw;
          height: 60px;
          display: flex;
          padding: 20px 0 0;
          justify-content: space-between;
          background: linear-gradient(120deg, #46cec5, #0ea0ff);
          color: #fff;
        }

        .nav-home {
          font-size: 2rem;
          font-weight: 700;
          padding: 0 20px;
          text-decoration: none;
          color: #fff;
        }

        nav a {
          color: #fff;
          text-decoration: none;
          font-size: 1.2rem;
        }

        nav a:hover {
          color: #fff9;
        }

        .nav-links a {
          padding: 0 30px;
          text-decoration: none;
          color: #fff;
        }
      `}</style>
    </>
  );
}
