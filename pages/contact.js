// contact page

import {
  BsLinkedin,
  BsGithub,
  BsEnvelope,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <h1>Contact Me</h1>
        <p>You can contact me through the following channels:</p>
        <ul>
          <li>
            <BsEnvelope /> :{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:neil.feris@gmail.com"
            >
              neil.feris@gmail.com
            </a>
          </li>
          <li>
            <BsGithub /> :{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/neil-feris"
            >
              https://github.com/neil-feris
            </a>
          </li>
          <li>
            <BsLinkedin /> :{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/neil-feris-8496745/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <BsTwitter /> :{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/neil_feris"
            >
              https://twitter.com/neil_feris
            </a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .contact {
          min-height: 75vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0 auto;
          padding: 20px;
          max-width: 800px;
        }
        h1 {
          font-size: 2rem;
          font-weight: 700;
          padding: 0 20px;
          text-decoration: none;
        }
        p {
          font-size: 1.4rem;
          font-weight: 400;
          padding: 0 20px;
          text-decoration: none;
        }
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          font-size: 1.3rem;
          font-weight: 400;
          padding: 10px 20px;
          text-decoration: none;
        }
        li a {
          text-decoration: none;
        }
        li a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}
