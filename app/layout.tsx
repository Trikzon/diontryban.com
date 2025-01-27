import clsx from "clsx";
import { Metadata } from "next";
import { Vollkorn } from "next/font/google";
import Link from "next/link";
import "@/app/globals.scss"
import styles from "@/app/layout.module.scss"

const vollkorn = Vollkorn({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Dion Tryban",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(vollkorn.className, styles.body)}>
        <header>
          <Link href="/"><strong>Dion Tryban</strong></Link>
        </header>
        <main>
          <article>
            {children}
          </article>
        </main>
        <footer>
          <hr/>
          <ul>
            <li>
              <span><strong>Campsites</strong></span>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/resume" className="yellow">Resume</Link></li>
                <li>Blog Coming Soon!</li>
              </ul>
            </li>
            <li>
              <span><strong>Outposts</strong></span>
              <ul>
                <li><a rel="me" href="https://github.com/trikzon" className="maroon">GitHub</a></li>
                <li><a rel="me" href="https://mastodon.gamedev.place/@diontryban" className="lavender">Mastodon</a></li>
                <li><a rel="me" href="https://bsky.app/profile/diontryban.com" className="sky">Bluesky</a></li>
                <li><a rel="me" href="https://www.linkedin.com/in/diontryban/" className="blue">LinkedIn</a></li>
              </ul>
            </li>
            <li>
              <span><strong>Backpack</strong></span>
              <ul>
                <li><a href="https://maven.diontryban.com" className="green">Maven</a></li>
                <li><a href="https://github.com/trikzon/diontryban.com" className="peach">Source</a></li>
              </ul>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
