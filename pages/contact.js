// contact page
import Layout from "../components/Layout";

import {
  BsLinkedin,
  BsGithub,
  BsEnvelope,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";

export default function Contact() {
  return (
    <Layout>
      <div className="contact">
        <h1>Contact Me</h1>
        <p>You can contact me through the following channels:</p>
        <ul>
          <li>
            <BsEnvelope /> :{" "}
            <a href="mailto:neil.feris@gmail.com">neil.feris@gmail.com</a>
          </li>
          <li>
            <BsGithub /> :{" "}
            <a href="https://github.com/neil-feris">
              https://github.com/neil-feris
            </a>
          </li>
          <li>
            <BsLinkedin /> :{" "}
            <a href="https://www.linkedin.com/in/neil-feris-8496745/">
              LinkedIn
            </a>
          </li>
          <li>
            <BsTwitter /> :{" "}
            <a href="https://twitter.com/neil_feris">
              https://twitter.com/neil_feris
            </a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .contact {
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
    </Layout>
  );
}
