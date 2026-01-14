import css from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={css.hero}>
      <div className={css.content}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>You can find everything you want in our catalog</p>
        <Link href="/catalog" className={css.button}>
          View Now
        </Link>
      </div>
    </div>
  );
}
