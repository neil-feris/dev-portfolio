// footer with links to social media and copyright info

import Link from "next/link";

import {
  BsLinkedin,
  BsGithub,
  BsEnvelope,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:neil.feris@gmail.com"
          >
            <BsEnvelope />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/neil-feris-8496745/"
          >
            <BsLinkedin />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/neil-feris"
          >
            <BsGithub />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/neil_feris"
          >
            <BsTwitter />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/neil.feris"
          >
            <BsFacebook />
          </a>
        </div>
        <div>
          <p>&copy; 2022 Neil Feris</p>
        </div>
      </footer>
      <style jsx global>{`
        footer {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          width: 100%;
          max-width: 100vw;
          height: 60px;
          display: flex;
          padding: 20px 0 20px;
          justify-content: space-between;
          background: linear-gradient(120deg, #46cec5, #0ea0ff);
          color: #fff;
        }

        footer a {
          color: #fff;
          text-decoration: none;
          font-size: 1.2rem;
        }

        footer a:hover {
          color: #fff9;
        }

        .footer-links a {
          padding: 0 30px;
          text-decoration: none;
          color: #fff;
        }

        .footer-links {
          display: flex;
          align-items: center;
          margin: 0 auto;
        }

        p {
          padding: 0 20px;
        }
      `}</style>
    </>
  );
}
