// about page

import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="about">
        <h1>About Me</h1>
        <p>
          I am a web developer with experience in building modern, responsive
          websites and applications.
        </p>
        <p>
          I have a strong background in front-end development using JavaScript,
          React, and Next.js, as well as experience with server-side
          technologies such as Node.js and Express.
        </p>
        <p>
          I am passionate about using technology to create intuitive and
          user-friendly experiences for users. I obsess over pixel perfect
          designs. I create websites to help people or companies meet their
          specific needs. I handle all aspects from page design and layout, to
          hosting and security.
        </p>
        <p>
          My expertise lies within front-end web apps, and the main languages in
          my tech stack are JavaScript, React, and of course HTML/CSS. I’m a
          lifelong learner (currently preparing for Associate Android Developer
          certification from Google. I recently obtained my AWS Certified Cloud
          Practitioner certification).
        </p>

        <p>
          Experienced and passionate educator with more than 16 years of
          experience in the Teaching and Curriculum Development industry.
          Skilled in English as a Second Language (ESL), Curriculum Design,
          Professional Development Facilitation for teachers, Microsoft Office
          products, Educational Leadership methods, Lesson planning techniques
          and Project management methodologies. Strong education professional
          with a Bachelor&apos;s degree focused in Mathematics and Physical
          Sciences.
        </p>

        <p> I love to read (Sci-Fi).</p>
      </div>
      <div className="experience">
        <h1>Experience</h1>
        <div className="experience-item">
          <h2>Web Developer</h2>
          <h3>Freelance</h3>
          <p>
            I have been working as a freelance web developer for the past 3
            months and have worked on a variety of projects. I have experience
            with building websites from scratch, as well as working with
            existing codebases. I have experience with both front-end and
            back-end development.
          </p>
        </div>
        <div className="experience-item">
          <h2>Mathematics Teacher</h2>
          <h3>Olympic Primary School</h3>
          <p>
            I have been teaching Mathematics and other Learning Areas for the
            past 16 years. I have experience with teaching Mathematics to
            students from Grades 4 to 11.
          </p>
        </div>
      </div>
      <style jsx>{`
        .about {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        .experience {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
      `}</style>
    </Layout>
  );
}
