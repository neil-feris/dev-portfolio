import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import logoLinkedin from "ionicons/dist/ionicons/svg/logo-linkedin.svg";
import logoGithub from "ionicons/dist/ionicons/svg/logo-github.svg";
import logoTwitter from "ionicons/dist/ionicons/svg/logo-twitter.svg";
import logoFacebook from "ionicons/dist/ionicons/svg/logo-facebook.svg";
import mail from "ionicons/dist/ionicons/svg/mail.svg";
import starOutline from "ionicons/dist/ionicons/svg/star-outline.svg";

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <main className="main">
          <section>
            <div>
              <div className="profile-photo">
                <Image
                  src="/img/profile.jpg"
                  width={120}
                  height={120}
                  alt="Neil Feris"
                />
              </div>
              <div className="about-me">
                <p>
                  Hello! I am <strong>Neil Feris</strong>. I&apos;m a full stack
                  web developer with a passion for pixel perfect, minimal and
                  easy to use interfaces.&nbsp;
                </p>
              </div>
            </div>
          </section>
          <section className="portfolio-block">
            <div>
              <div className="zoom-contain">
                <div className="contain">
                  <div className="zoom-on-hover">
                    <a href="projects.html">
                      <Image
                        src="/img/tech/timetracker.jpg"
                        alt="hourglass"
                        width={432}
                        height={324}
                      />
                    </a>
                  </div>
                </div>
                <div className="contain">
                  <div className="zoom-on-hover">
                    <a href="projects.html">
                      <Image
                        src="/img/tech/deals.png"
                        alt="timetable"
                        width={432}
                        height={324}
                      />
                    </a>
                  </div>
                </div>
                <div className="contain">
                  <div className="zoom-on-hover">
                    <a href="projects.html">
                      <Image
                        src="/img/tech/blake-wisz-tE6th1h6Bfk-unsplash.jpg"
                        alt="Point of Sale"
                        width={432}
                        height={324}
                      />
                    </a>
                  </div>
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
                <div className="col-md-4">
                  <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0">
                      <Image
                        className="icon"
                        src={starOutline}
                        alt="star"
                        width={32}
                        height={32}
                      />
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
                <div className="col-md-4">
                  <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0">
                      <i className="icon ion-ios-lightbulb-outline"></i>
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
                <div className="col-md-4">
                  <div className="card special-skill-item border-0">
                    <div className="card-header bg-transparent border-0">
                      <i className="icon ion-ios-gear-outline"></i>
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
        </main>

        <footer className="page-footer">
          <div className="container">
            <div className="links">
              <a href="cv.html">About me</a>
              <a href="projects.html">Projects</a>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/neil-feris-8496745/">
                <Image
                  src={logoLinkedin}
                  alt="linkedin"
                  width={32}
                  height={32}
                />
              </a>
              <a href="https://github.com/neil-feris">
                <Image src={logoGithub} alt="github" width={32} height={32} />
              </a>
              <a href="https://twitter.com/neil_feris">
                <Image src={logoTwitter} alt="twitter" width={32} height={32} />
              </a>
              <a href="mailto:neil.feris@gmail.com">
                <Image src={mail} alt="mail" width={32} height={32} />
              </a>
              <a href="https://www.facebook.com/neil.feris">
                <Image
                  src={logoFacebook}
                  alt="facebook"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
      <style jsx global>{`
        .profile-photo img {
          margin: 0 auto;
          display: flex;
          border-radius: 50%;
\        }

        .about-me {
          margin: 0 auto;
          display: flex;
          text-align: center;
          padding: 20px;
        }

        .zoom-contain {
          overflow: hidden;
          display: flex;
          flex-wrap: wrap;
        }

        .contain {
          display: flex;
          flex-wrap: wrap;
          overflow: hidden;
        }

        .zoom-on-hover:hover img {
          overflow: hidden;
          transform: scale(1.3);
          opacity: 0.7;
          transition: transform 0.8s ease;
        }

        .zoom-on-hover img {
          transition: transform 0.8s ease;
        }

        .zoom-on-hover a{
          display: flex;
          flex-wrap: wrap;
        }

        .portfolio-block {
          padding-bottom: 60px;
          padding-top: 60px;
        }

        .portfolio-block .heading {
          margin-bottom: 50px;
          text-align: center;
        }

        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          word-wrap: break-word;
          background-color: #fff;
          background-clip: border-box;
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 0.25rem;
        }

        .card-header {
          padding: 0.5rem 1rem;
          margin-bottom: 0;
          background-color: rgba(0, 0, 0, 0.03);
          border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        }

        .row {
          display: flex;
          flex-wrap: wrap;
          margin-top: calc(-1 * var(--bs-gutter-y));
          margin-right: calc(-0.5 * var(--bs-gutter-x));
          margin-left: calc(-0.5 * var(--bs-gutter-x));
        }
        .row > * {
          flex-shrink: 0;
          width: 100%;
          max-width: 100%;
          padding-right: calc(var(--bs-gutter-x) * 0.5);
          padding-left: calc(var(--bs-gutter-x) * 0.5);
          margin-top: var(--bs-gutter-y);
        }
        .col {
          flex: 1 0 0%;
        }

        .special-skill-item {
          margin-bottom: 30px;
          text-align: center;
        }
        .special-skill-item .icon {
          text-align: center;
          font-size: 50px;
          background-color: #0ea0ff;
          color: #fff;
          height: 70px;
          width: 70px;
          line-height: 69px;
          display: inline-block;
          border-radius: 50%;
        }
        .special-skill-item h3,
        .special-skill-item .h3 {
          font-size: 1.3em;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .special-skill-item p {
          color: #8e8e8e;
        }

        .bg-transparent {
          background-color: transparent !important;
        }

        .gradient {
            background: linear-gradient(120deg, rgba(14,160,255,0.5) 0%, rgba(70,206,197,0.5) 100%);
        }

        .icon {
          display: inline-block;
          font-style: normal;
          font-weight: 400;
          line-height: 1;
          text-decoration: inherit;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        `}</style>
    </Layout>
  );
}
