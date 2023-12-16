import "./About.css";
import Github from "../assets/githubWhite.png";
import LinkedIn from "../assets/linkedInWhite.png";
import photoCanardTest from "../assets/CyberQuack.png";

function About() {
  return (
    <section className="aboutSection">
      <article className="aboutUs">
        <h1>
          Qu'est ce que la <span className="duckColor">duck</span>
          <span className="societyColor">Society</span>&nbsp;?
        </h1>
        <p>
          La <span className="duckColor">duck</span>
          <span className="societyColor">Society</span> est un groupe de quatre
          étudiants de la{" "}
          <a href="https://www.wildcodeschool.com/fr-fr/" target="_blank">
            Wild Code School
          </a>
          .
          <br />
          Passionnés de <a href="https://rezmason.github.io/matrix/"> code </a>,
          de{" "}
          <a href="https://fr.wikipedia.org/wiki/Malbolge" target="_blank">
            malbolge{" "}
          </a>
          et de{" "}
          <a href="https://fr.wikipedia.org/wiki/Canard" target="_blank">
            canards
          </a>
          , nous avons souhaité monter notre propre équipe de développement dans
          une ambiance aussi étrange que divertissante. Là où l'intensité des
          cours domine, où les cerveaux chauffent à en faire mal, les membres de
          la <span className="duckColor">duck</span>
          <span className="societyColor">Society</span> combattent la pression
          en prenant les nouveaux <span className="green">quack</span> qui se
          présentent chaque jour dans les lignes de code avec le sourire.
          <br />
          En bref, nous sommes quatre camarade de formation, probablement
          devenus amis grâce à notre passion commune et à notre sens de l'humour
          et inéluctablement du troll,{" "}
          <a href="https://www.youtube.com/watch?v=HIcSWuKMwOw" target="_blank">
            merci internet
          </a>
          . En raison de l'hiver, nous codons en{" "}
          <span className="green">cols</span> <del>roulés</del>{" "}
          <span className="green">verts</span>.
        </p>
      </article>
      <article className="ourLinks">
        <div className="oce">
          <p className="ourNames">Océ</p>
          <img src={photoCanardTest} alt="Océane version canard" id="oceCoin" />
          <div className="socialMedias">
            <a
              href="https://github.com/ThisIsHowVillainsAreMade"
              target="_blank"
            >
              <img src={Github} alt="github" className="github" />
            </a>
            <a href="https://www.linkedin.com/in/oaiw/" target="_blank">
              <img src={LinkedIn} alt="linkedIn" className="linkedIn" />
            </a>
          </div>
        </div>
        <div className="flo">
          <p className="ourNames">Flo</p>
          <img
            src={photoCanardTest}
            alt="Florian version canard"
            id="floCoin"
          />
          <div className="socialMedias">
            <a href="https://github.com/Dolpheus89" target="_blank">
              <img src={Github} alt="github" className="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/florian-schaessens-041243a9/"
              target="_blank"
            >
              <img src={LinkedIn} alt="linkedIn" className="linkedIn" />
            </a>
          </div>
        </div>
        <div className="ryan">
          <p className="ourNames">Ryan</p>
          <img src={photoCanardTest} alt="Ryan version canard" id="ryanCoin" />
          <div className="socialMedias">
            <a href="https://github.com/RetrozDev" target="_blank">
              <img src={Github} alt="github" className="github" />
            </a>
            {/* <a href="" target="_blank">
              <img src={LinkedIn} alt="linkedIn" className="linkedIn" />
            </a> */}
          </div>
        </div>
        <div className="greg">
          <p className="ourNames">Greg</p>
          <img src={photoCanardTest} alt="Greg version canard" id="gregCoin" />
          <div className="socialMedias">
            <a href={photoCanardTest} target="_blank">
              <img src={Github} alt="github" className="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/gr%C3%A9gory-d-754664195/"
              target="_blank"
            >
              <img src={LinkedIn} alt="linkedIn" className="linkedIn" />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default About;
