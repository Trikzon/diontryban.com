import type { Metadata } from "next";
import Link from "next/link";
import { PageUrls } from "@/lib/PageUrls";
import styles from "./layout.module.scss"

// ===== Global CSS imports ===== //
import "the-new-css-reset/css/reset.css";
import "@fontsource/fira-mono";
// Supports weights 400-900
import "@fontsource-variable/vollkorn";
import "@/app/globals.scss";

export const metadata: Metadata = {
  title: "Dion Tryban",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <header className={styles.header}>
          <Link className={styles.link} href={PageUrls.home()}>
            Dion Tryban
          </Link>
        </header>
        <main className={styles.main}>
          {children}
        </main>
        <hr className={styles.hr}/>
        <footer className={styles.footer}>
          <nav>
            <ul>
              <li className={styles["nav-row"]}>
                <span className={styles["nav-title"]}>Campsites</span>
                <ul className={styles["nav-list"]}>
                  <li><a href={PageUrls.home()}>Home</a></li>
                  <li><span>Blog</span></li>
                  <li><a href={PageUrls.projects()}>Projects</a></li>
                  <li><span>Resume</span></li>
                </ul>
              </li>
              <li className={styles["nav-row"]}>
                <span className={styles["nav-title"]}>Outposts</span>
                <ul className={styles["nav-list"]}>
                  <li><a href={PageUrls.external.github()} rel="me">GitHub</a></li>
                  <li><a href={PageUrls.external.mastodon()} rel="me">Mastodon</a></li>
                  <li><a href={PageUrls.external.bluesky()} rel="me">Bluesky</a></li>
                  <li><a href={PageUrls.external.linkedin()} rel="me">LinkedIn</a></li>
                </ul>
              </li>
              <li className={styles["nav-row"]}>
                <span className={styles["nav-title"]}>Backpack</span>
                <ul className={styles["nav-list"]}>
                  <li><a href={PageUrls.external.maven()}>Maven</a></li>
                  <li><a href={PageUrls.external.source()}>Source Code</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
