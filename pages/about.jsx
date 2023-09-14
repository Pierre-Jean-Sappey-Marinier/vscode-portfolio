import Skills from "../components/Skills";
import styles from "../styles/About.module.css";

const AboutPage = () => {
  return (
    <>
      <h2>Qui suis-je ? </h2>
      <p className={styles.p}>
        Passionné du développement web avec une solide expertise en JavaScript,
        je me suis reconverti dans ce domaine après avoir travaillé pendant 10
        ans dans le secteur de la géotechnique.
      </p>

      <p className={styles.p}>
        En tant que développeur junior, ma reconversion professionnelle m'a
        dirigé vers les technologies React, JavaScript, Next.js et TypeScript.
        Fort de ces compétences, je conçois et développe des interfaces
        utilisateur réactives.
      </p>

      <p className={styles.p}>
        Je maintiens une veille constante sur les dernières tendances et
        meilleures pratiques du secteur pour garantir des solutions alignées sur
        vos objectifs. Mon approche méthodologique agile et ma capacité à gérer
        efficacement les projets pourront renforcer votre équipe. Je suis prêt à
        contribuer activement à la réalisation de vos projets.
      </p>

      <p className={styles.p}>
        Je vous remercie sincèrement d'avoir pris le temps de lire ces quesles
        lignes sur mon parcours.{" "}
      </p>
      <p className={styles.p}>
        Cordialement,
        <br />
        Pierre-Jean Sappey-Marinier
      </p>
      <Skills />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
