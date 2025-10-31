import "./about.css";

const MAIN_SKILLS = [
  { icon: "devicon-html5-plain colored", label: "HTML5" },
  { icon: "devicon-css3-plain colored", label: "CSS3" },
  { icon: "devicon-bootstrap-plain-wordmark colored", label: "Bootstrap" },
  { icon: "devicon-javascript-plain colored", label: "Javascript" },
  { icon: "devicon-react-plain colored", label: "React" },
  { icon: "devicon-angular-plain colored", label: "Angular" },
  { icon: "devicon-nodejs-plain colored", label: "Node.js" },
  { icon: "devicon-python-plain colored", label: "Python" },
  { icon: "devicon-git-plain colored", label: "Git" },
  { icon: "devicon-github-plain colored", label: "Github" },
  { icon: "devicon-windows8-original colored", label: "Windows" },
  { icon: "devicon-apple-original colored", label: "OSX" },
  { icon: "devicon-linux-plain colored", label: "Linux" },
];

const FAMILIAR_SKILLS = [
  { icon: "devicon-typescript-plain colored", label: "Typescript" },
  { icon: "devicon-c-plain colored", label: "C" },
  { icon: "devicon-cplusplus-plain colored", label: "C++" },
  { icon: "devicon-java-plain colored", label: "Java" },
  { icon: "devicon-mongodb-plain colored", label: "MongoDB" },
  { icon: "devicon-mysql-plain colored", label: "MySQL" },
];

const SkillItem = ({ skill, skipMargin }) => (
  <li className={skipMargin ? "" : ""}>
    <i className={skill.icon}></i>
    {skill.label}
  </li>
);

const SkillsSection = ({ title, skills }) => (
  <div className="skills-section">
    <h2 className="text-center">
      {title}
    </h2>
    <br />
    <ul>
      {skills.map((skill, index) => (
        <SkillItem key={`${title}-${index}`} skill={skill} />
      ))}
    </ul>
  </div>
);

const About = () => {
  return (
    <div className="aboutpage p-5 mx-xs-1 mx-md-auto" id="about">
      <div className="about-content row">
        <div className="self-description col-12 px-20 col-md-8 mx-auto bg-blk-o bd-white">
          <p>
            Majored in computer science because I enjoy making things. I always
            had a curiosity of how things work, what made them tick and how
            everything fit together.
          </p>

          <p>
            My present goals are to become more proficient in software
            development, improve my current skillset, and eventually branch out.
            I'm curious about robotics, machine learning, modeling and
            simulations.
          </p>
          <p>
            Self taught in HTML, CSS, Javascript, React, MongoDB, Python, and am
            continuing to perfect my skillset in those subjects. Presently I am
            also in the process of learning AWS, data analysis with Python,
            Docker and Kubernetes.
          </p>
        </div>
        <div className="skills-set col-12 mobile-font-size col-md-4 mx-auto bg-blk-o bd-white">
          <h1 className="display-4 text-center">Skills</h1>
          <br />

          <div className="main-skills">
            <SkillsSection title="Main Skills" skills={MAIN_SKILLS} />
          </div>
          <div className="familiar-skills">
            <SkillsSection title="Familiar With" skills={FAMILIAR_SKILLS} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
