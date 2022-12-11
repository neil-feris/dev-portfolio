import Image from "next/image";
import Link from "next/link";

import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div className="page">
        <section className="portfolio-block block-intro">
          <div className="container">
            <div className="avatar"></div>
            <div className="about-me">
              <p>
                Hello! I am <strong>Neil Feris</strong>. I&apos;m a full stack
                web developer with a passion for pixel perfect, minimal and easy
                to use interfaces.&nbsp;
              </p>
            </div>
          </div>
        </section>
        <section className="portfolio-block photography">
          <div className="container">
            <div className="row">
              <div className="col item zoom-on-hover">
                <Link href="/projects">
                  <Image
                    className="img-fluid image"
                    src="/img/tech/deals.png"
                    alt="online store"
                    width={400}
                    height={225}
                  />
                </Link>
              </div>
              <div className="col item zoom-on-hover">
                <Link href="/projects">
                  <Image
                    className="img-fluid image"
                    src="/img/tech/todo.png"
                    alt="todo list"
                    width={400}
                    height={225}
                  />
                </Link>
              </div>
              <div className="col item zoom-on-hover">
                <Link href="/projects">
                  <Image
                    className="img-fluid image"
                    src="/img/tech/rpsls.png"
                    alt="rock paper scissors lizard spock"
                    width={400}
                    height={225}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio-block skills">
          <div className="container">
            <div className="heading">
              <h2>Special Skills</h2>
            </div>
            <div className="row">
              <div className="col">
                <div className="card special-skill-item border-0">
                  <div className="card-header bg-transparent border-0">
                    <AiOutlineStar className="icon" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Web Design</h3>
                    <p className="card-text">
                      Harmoniously blending visuals and content for beautiful,
                      engaging websites to hold your user&apos;s interest
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card special-skill-item border-0">
                  <div className="card-header bg-transparent border-0">
                    <AiOutlineBulb className="icon" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Interface Design</h3>
                    <p className="card-text">
                      Intuitive and easy to use so that even the least
                      tech-savvy users will enjoy using your site
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card special-skill-item border-0">
                  <div className="card-header bg-transparent border-0">
                    <AiOutlineSetting className="icon" />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title">Safety and Privacy</h3>
                    <p className="card-text">
                      All user data and transactions are fully end-to-end
                      encrypted and all the latest security patches are
                      automatically applied
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <section className="portfolio-block website gradient">
        <div className="container">
          <div className="row">
            <div className="col2 text">
              <h3>Online Store</h3>
              <p>
                Easy to use store functionality providing simple method of
                adding products. Multiple payment providers are supported.
              </p>
            </div>
            <div className="col2">
              <div className="portfolio-laptop-mockup">
                <div className="screen">
                  <div
                    className="screen-content"
                    style={{
                      backgroundImage: "url('/img/tech/deals.png')",
                    }}
                  ></div>
                </div>
                <div className="keyboard"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <style jsx global>{`
        .avatar {
          background-image: url("/img/profile.jpg");
          width: 150px;
          height: 150px;
          background-size: cover;
          background-repeat: no-repeat;
          margin: auto;
          border-radius: 100px;
          margin-bottom: 30px;
        }

        .about-me {
          max-width: 800px;
          margin: 0 auto;
        }

        .portfolio-block {
          padding-bottom: 30px;
          padding-top: 30px;
        }

        .portfolio-block .heading {
          margin-bottom: 50px;
          text-align: center;
        }

        .portfolio-block .heading h2 {
          font-weight: bold;
          font-size: 1.4rem;
          text-transform: uppercase;
        }

        .portfolio-block .heading p {
          text-align: center;
          max-width: 420px;
          margin: 0 auto;
          opacity: 0.7;
        }

        .portfolio-block.block-intro {
          text-align: center;
        }

        .portfolio-block.block-intro p {
          font-size: 1.5em;
          font-weight: 300;
          margin-bottom: 30px;
        }

        .portfolio-block.block-intro .avatar {
          width: 150px;
          height: 150px;
          background-size: cover;
          background-repeat: no-repeat;
          margin: auto;
          border-radius: 100px;
          margin-bottom: 30px;
        }

        .portfolio-block.website h3 {
          font-weight: bold;
        }

        .portfolio-block.website {
          display: flex;
          justify-content: center;
          width: 100%;
          max-width: 100%;
        }

        .portfolio-block.website p {
          opacity: 0.8;
          padding: 0 20px;
        }

        .portfolio-block.website .text {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          margin: auto;
          text-align: center;
        }

        .portfolio-block.photography {
          padding-top: 0;
          padding-bottom: 0;
        }

        .portfolio-block.photography .item {
          overflow: hidden;
          margin-bottom: 0;
          background: #000;
          opacity: 1;
        }

        .portfolio-block.photography .item a img {
          transition: 0.8s ease;
        }

        .zoom-on-hover:hover .image {
          transform: scale(1.3);
          opacity: 0.7;
        }

        .zoom-on-hover a {
          display: flex;
          flex-wrap: wrap;
        }

        .img-fluid {
          max-width: 100%;
          border: 1px solid #ddd;
          margin: 0;
        }

        .col {
          display: flex;
          flex: 0 0 auto;
          align-items: center;
          // min-width: 200px;
          max-width: 360px;
        }

        .col2 {
          flex: 0 0 auto;
          min-width: 400px;
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 1200px;
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          border-bottom: 1px solid #ddd;
        }

        .heading {
          margin-bottom: 50px;
          text-align: center;
        }

        .heading h2 {
          font-weight: bold;
          font-size: 1.4rem;
          text-transform: uppercase;
        }

        .heading p {
          text-align: center;
          max-width: 420px;
          margin: auto;
          opacity: 0.7;
        }

        .special-skill-item {
          margin-bottom: 30px;
          text-align: center;
          padding: 0 20px;
        }

        .bg-transparent {
          background-color: transparent !important;
        }

        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 280px;
          word-wrap: break-word;
          background-color: #fff;
          background-clip: border-box;
          border-radius: 0.25rem;
        }

        .card-header {
          padding: 1rem;
          margin-bottom: 0;
          background-color: rgba(0, 0, 0, 0.03);
        }

        .card-body {
          flex: 1 1 auto;
          padding: 1rem 1rem;
        }

        .card-title {
          margin-bottom: 0.5rem;
        }

        .icon {
          text-align: center;
          background-color: #0ea0ff;
          color: #fff;
          height: 90px;
          width: 90px;
          display: inline-block;
          border-radius: 50%;
        }

        .social-icons {
          margin-top: 20px;
          margin-bottom: 16px;
        }

        .social-icons a {
          font-size: 18px;
          margin: 0 3px;
          color: #fff;
          border: 1px solid;
          opacity: 0.75;
          border-radius: 50%;
          width: 36px;
          display: inline-block;
          height: 36px;
          text-align: center;
          background-color: #c5c9d2;
          line-height: 34px;
        }

        .social-icons a:hover {
          opacity: 1;
        }

        .gradient {
          background: linear-gradient(120deg, #46cec5, #0ea0ff);
          color: #fff;
        }

        .portfolio-laptop-mockup {
          margin: auto;
          margin-top: 30px;
          max-width: 280px;
        }

        .portfolio-laptop-mockup .screen {
          border: 1px solid #9c9c9c;
          border-bottom: none;
          width: 250px;
          height: 160px;
          padding: 10px;
          border-radius: 5px;
          background-color: #fff;
          position: relative;
          left: 15px;
        }

        .portfolio-laptop-mockup .screen .screen-content {
          border: 1px solid #c5c5c5;
          background-position: center;
          background-size: cover;
          height: 100%;
        }

        .portfolio-laptop-mockup .keyboard {
          width: 295px;
          height: 10px;
          border: 1px solid #9c9c9c;
          border-bottom-left-radius: 7px;
          border-bottom-right-radius: 7px;
          background-color: #fff;
        }
      `}</style>
    </>
  );
}
