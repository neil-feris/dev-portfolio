// projects page

import Layout from "../components/Layout";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      name: "Online Store",
      description:
        "Customisable online storefront \n\nFeatures: \nEasy to add  inventory \nDiscount coupons\n\nTechnologies: \nHTML, CSS, Bootstrap, jQuery, javascript",
      image: "/img/tech/deals.png",
      github: "https://github.com/neil-feris/hyperion-online-store",
      url: "https://neil-feris.github.io/hyperion-online-store/index.html",
    },
    {
      name: "Rock Paper Scissors Lizard Spock",
      description:
        "The game expands on the traditional Rock, Paper, Scissors. \n\nFeatures: \nKeeps track of player and computer score \n\n\nTechnologies: \nHTML, CSS, Bootstrap, React",
      image: "/img/tech/rpsls.png",
      url: "https://rock-paper-scissors-lizard-spock-xi.vercel.app/",
      github: "https://github.com/neil-feris/RockPaperScissorsLizardSpock",
    },
    {
      name: "Todo List",
      description:
        "TODO list app with support for different users.\n\nFeatures: \nMulti Device support  \n\nTechnologies: \nMongoDB, ExpressJS, React, NodeJS, Material UI",
      image: "/img/tech/todo.png",
    },
  ];

  return (
    <Layout>
      <div>
        <h1>My Projects</h1>
        <section className="portfolio-block">
          <div className="heading">
            <h2>Recent Work</h2>
          </div>
          <div className="cards">
            {projects.map((project, index) => (
              <div className="card" key={index}>
                <div className="card-title">
                  <h2>{project.name}</h2>
                </div>
                <Image
                  className="card-img scale-on-hover"
                  src={project.image}
                  alt="Card Image"
                  width={400}
                  height={300}
                />
                <div className="project-description">{project.description}</div>
                <div className="project-link">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <style jsx global>{`
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

        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          word-wrap: break-word;
          background-color: #fff;
          background-clip: border-box;
          border: 1px solid rgba(0, 0, 0, 0.125); /* Remove */
          border-radius: 0.25rem;
          margin: 10px;
        }

        .card-title {
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .scale-on-hover:hover {
          transform: scale(1.15);
          opacity: 0.75;
          box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15) !important;
        }

        .scale-on-hover {
          transition: transform 0.3s ease;
        }

        .card-img {
          margin: 0 auto;
          width: 90%;
          height: 90%;
          border-radius: calc(0.25rem - 1px);
        }

        .project-description {
          white-space: pre-wrap;
          margin: 0.5rem 1rem;
          text-align: center;
        }

        .project-link {
          margin: 0.5rem 1rem;
          text-align: center;
        }

        .project-link a {
          text-decoration: none;
          font-weight: bold;
          font-size: 1.2rem;
          padding: 0.5rem 1rem;
        }

        .project-link a:hover {
          text-decoration: underline;
        }

        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
}
