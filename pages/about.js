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
        <p> I love to read (Sci-Fi).</p>
      </div>
      <style jsx>{`
        .about {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
      `}</style>
    </Layout>
  );
}
