import "./about.css";

function About() {
  return (
    <div className="aboutpage p-5 mx-xs-1 mx-md-auto" id="about">
      <div className="content row">
        <div className="self-description col-12 px-20 col-md-8 ">
          <p>Personal interests in software development.</p>
          <p>
            I majored in computer science because I enjoy making things. I
            always had a curiosity of how things work, what made them tick and
            how everything fit together.
          </p>

          <p>
            My present goals are to become more profficient in software
            development, improve my current skillset, and eventually branch out.
            I'm curious about robotics, machine learning, modeling and
            simulations.
          </p>
        </div>
        <div className="skills-set col-12 mobile-font-size col-md-4 ">
          <h1 className="display-4 text-center">Skills</h1>
          <br />

          <div className="main-skills">
            <h1>Main Skills</h1>
            <br />
            <ul>
              <li>
                <i className="devicon-html5-plain colored"> </i>
                HTML5
              </li>
              <i className="devicon-css3-plain colored"> </i>
              CSS3
              <li className="ml-4">
                <i className="devicon-bootstrap-plain-wordmark colored"></i>
                Bootstrap
              </li>
              <li>
                <i className="devicon-javascript-plain colored"> </i>Javascript
              </li>
              <li>
                <i className="devicon-react-plain colored"> </i>
                React
              </li>
              <li>
                <i className="devicon-nodejs-plain colored"> </i>
                Node.js
              </li>
              <li>
                <i className="devicon-python-plain colored"> </i>
                Python
              </li>
              <li>
                <i className="devicon-git-plain colored"> </i>Git
              </li>
              <li>
                <i className="devicon-github-plain colored"> </i>Github
              </li>
              <br />
              <li>
                <i className="devicon-windows8-original colored"> </i>
                Microsoft Windows
              </li>
              <li>
                <i className="devicon-linux-plain colored"> </i>
                Linux
              </li>
              <li className="row ml-4">Microsoft Office</li>
            </ul>
          </div>
          <div className="familiar-skills">
            <h1>Familiar With</h1>
            <br />
            <ul>
              <li>
                <i className="devicon-typescript-plain colored"> </i>
                Typescript
              </li>
              <li>
                <i className="devicon-c-plain colored"> </i>C
              </li>
              <li>
                <i className="devicon-cplusplus-plain colored"> </i>C++
              </li>
              <li>
                <i className="devicon-java-plain colored"> </i>Java
              </li>
              <li>
                <i className="devicon-mongodb-plain colored"> </i>
                MongoDB
              </li>
              <li>
                <i className="devicon-mysql-plain colored"> </i>
                MySQL
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

// <div className="row">
//         <div className="part-one col-8 px-20">
//           <p>Personal interests in software development.</p>
//           <p>Why I chose this field.</p>
//           <p>What are my interests in it.</p>
//           <p>What do I hope to achieve.</p>
//           <p>What are my present and future goals.</p>
//         </div>
//         <div className="part-two col-4">
//           <h1 className="display-4">Experience with</h1>
//           <br />
//           <ul>
//             <li className="row">
//               <DiHtml5 color="blue" size="1.5em" />
//               HTML
//             </li>
//             <li className="row">
//               <DiCss3 color="" size="1.5em" />
//               CSS
//             </li>
//             <li className="ml-4 row">
//               <DiBootstrap color="purple" size="1.5em" />
//               Bootstrap
//             </li>
//             <li className="row">
//               <DiJavascript1 />
//               Javascript
//             </li>
//             <li className="row">
//               <i className="devicon-typescript-plain colored"> </i>
//               Typescript
//             </li>
//             <li className="row">
//               <i className="devicon-nodejs-plain colored"> </i>
//               Node.js
//             </li>
//             <li>
//               <i className="devicon-c-plain colored"> </i>C
//             </li>
//             <li>
//               <i className="devicon-cplusplus-plain colored"> </i>C++
//             </li>
//             <li>
//               <i className="devicon-java-plain colored"> </i>Java
//             </li>
//             <li>
//               <i className="devicon-mongodb-plain colored"> </i>
//               MongoDB
//             </li>
//             <li>
//               <i className="devicon-mysql-plain-wordmark colored"> </i>
//               MySQL
//             </li>
//             <li>
//               <i className="devicon-react-plain colored"> </i>
//               React
//             </li>
//             <li>
//               <i className="devicon-python-plain colored"> </i>
//               Python
//             </li>
//             <li>
//               <DiGitMerge color="orange" size="1.5em" />
//               Git
//             </li>
//             <li className="row">
//               <DiGithubBadge color="black" size="1.5em" /> Github
//             </li>

//             <br />

//             <li className="row">
//               <img
//                 className="px-2 img-fluid"
//                 src="https://img.icons8.com/color/24/000000/office-365.png"
//               />
//               Microsoft Office
//             </li>
//             <li>
//               <i className="devicon-windows8-original colored"> </i>
//               Microsoft Windows
//             </li>
//             <li>
//               <i className="devicon-linux-plain colored"> </i>
//               Linux
//             </li>
//           </ul>
//         </div>
//       </div>
