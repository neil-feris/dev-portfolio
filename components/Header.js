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
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
          min-width: 100vw;
          height: 60px;
          padding: 20px 0 0;
          justify-content: space-between;
          background: linear-gradient(120deg, #46cec5, #0ea0ff);
          color: #fff;
        }

        .nav-home {
          display: flex;
          font-size: 2rem;
          font-weight: 700;
          padding: 0 20px;
          text-decoration: none;
          color: #fff;
        }

        @media (max-width: 480px) {
          .nav-home {
            font-size: 1.4rem;
            padding: 0 10px;
          }

          .nav-links {
            padding: 0 10px;
          }

          .nav-links a {
            font-size: 1rem;
            padding: 0 10px;
          }
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

        .nav-links {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
