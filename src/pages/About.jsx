import "./About.css";

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
        <div className="Océ">
          <img src="" alt="Océane version canard" id="oceCoin" />
          <img src="../assets/githubBlack.png" alt="github" />
          <img src="../assets/linkedInBlack.png" alt="linkedIn" />
        </div>
        <div className="Flo">
          <img src="" alt="Florian version canard" id="floCoin" />
          <img src="../assets/githubBlack.png" alt="github" />
          <img src="../assets/linkedInBlack.png" alt="linkedIn" />
        </div>
        <div className="Ryan">
          <img src="" alt="Ryan version canard" id="ryanCoin" />
          <img src="../assets/githubBlack.png" alt="github" />
          <img src="../assets/linkedInBlack.png" alt="linkedIn" />
        </div>
        <div className="Greg">
          <img src="" alt="Greg version canard" id="gregCoin" />
          <img src="../assets/githubBlack.png" alt="github" />
          <img src="../assets/linkedInBlack.png" alt="linkedIn" />
        </div>
      </article>
    </section>
  );
}

export default About;
