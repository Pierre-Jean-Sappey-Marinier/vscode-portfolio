import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Je</h1>
          <h1>creer</h1>
          <h1>vos</h1>
          <h1>sites</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Pierre-Jean SAPPEY-MARINIER</h1>
            <h6 className={styles.bio}>Développeur Web React Javascript</h6>
            <Link href="/projects">
              <button className={styles.button}>Mes projets</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contactez-moi</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
