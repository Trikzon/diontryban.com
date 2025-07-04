import { PageUrls } from "@/lib/PageUrls";
import styles from "./page.module.scss";

export default function Home() {
  const blogPosts = [
    { name: "Hello, world!", date: "2025-06-25", },
    { name: "This is a very long blog post title. Almost hard to believe.", date: "2025-06-25", },
    { name: "Hello, world!", date: "2025-06-25", },
    { name: "Hello, world!", date: "2025-06-25", },
    { name: "Hello, world!", date: "2025-06-25", },
  ]

  return (
    <>
      <head>
         <link rel="indieauth-metadata" href={PageUrls.external.indieauthMetadata()} />
	 <link rel="authorization_endpoint" href="https://indieauth.tryban.dev/auth" />
	 <link rel="token_endpoint" href="https://indieauth.tryban.dev/token" />
      </head>
      <h1>Welcome 🏕️</h1>
      <p>
        Hello, my name is Dion. Welcome to my little corner of the internet.
        I am a game developer and a recent computer science graduate from <a href="https://cs.fsu.edu">Florida State University</a>.
        Other than software engineering, I'm also interested in books, board games, hiking, and—more recently—the <a href="https://indieweb.org/">indie web</a>.
      </p>
      <p>
        While at Florida State, I was hired as Project Manager by the <a href="https://innovation.fsu.edu">FSU Innovation Hub</a> to
        lead the development of a video game, Orbital Odyssey, to help students gain experience creating games. This was in
        conjunction with being the President of <a href="https://fsu.devlup.org">DevLUp at FSU</a>, the university's game dev club,
        where I taught workshops and organized state-wide game jams.
      </p>
      <p>
        After graduating I began working part-time at <a href="https://arcvale.com">Arcvale</a>, a small local game studio I was
        introduced to through the FSU Innovation Hub, while I hunt for my first full-time job. At Arcvale, I am working
        on <a href="https://arcvale.com/products/prawemit/">Prawemit</a>, a puzzle platformer Unity game for the Nintendo Switch; 
        a second, unannounced Unity puzzle game still in early development;
        and <a href="https://arcvale.com/products/drawdrills/">DrawDrills</a>, a Svelte website that helps artists improve through drawing exercises.
      </p>
      {/* <h2>Recent blog posts</h2>
      <ul>
        {blogPosts.map((blogPost, index) => (
          <li className={styles["blog-post-li"]} key={index}>
            <a href="">{blogPost.name}</a>
            <span>{blogPost.date}</span>
          </li>
        ))}
      </ul> */}
    </>
  );
}
