import Image from "next/image";
import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.content}>
          <Link href="/" className={css.logo}>
            <Image src="/Logo.svg" alt="TravelTrucks" width={136} height={16} />
          </Link>
          <nav>
            <ul className={css.navigation}>
              <li>
                <Link href="/" className={css.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalog" className={css.link}>
                  Catalog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
