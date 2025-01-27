import styles from "@/app/resume/page.module.scss"

export default function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <h2>Education</h2>
      <ul className={styles["column-list"]}>
        <li><strong>Florida State University</strong></li>
        <li>Expected May 2025</li>
        <li>Bachelor of Science in Computer Science</li>
        <li>GPA: 3.764</li>
        <li><em>President's List: Spring 2023, Fall 2023, Spring 2024, Fall 2024</em></li>
      </ul>
      <ul className={styles["column-list"]}>
        <li><strong>University of South Florida</strong></li>
        <li>December 2022</li>
        <li>Associate of Arts</li>
        <li>GPA: 3.429</li>
      </ul>
      <h2>Professional Experience</h2>
      <ul className={styles["column-list"]}>
        <li><strong>Project Facilitator Intern</strong></li>
        <li>August 2024 – Present</li>
        <li><a href="https://www.innovation.fsu.edu/">FSU Innovation Hub</a></li>
        <li></li>
        <li>
          <ul>
            <li>Oversee the development of <a href="#orbital-odyssey">Orbital Odyssey</a> with 35 student developers.</li>
            <li>Meet weekly to delegate tasks, discuss goals, and pair program.</li>
            <li>Help students learn tools such as Git, GitHub, Blender, and Godot.</li>
          </ul>
        </li>
      </ul>
      <ul className={styles["column-list"]}>
        <li><strong>President, Vice President</strong></li>
        <li>April 2023 – Present</li>
        <li><a href="https://fsu.devlup.org">DevLUp at FSU</a> <em>Game Development Student Org.</em></li>
        <li></li>
        <li>
          <ul>
            <li>Design, organize, and teach hands-on workshops about game development.</li>
            <li>Lead the development of two annual game dev projects to teach students.</li>
            <li>Organize intercollegiate game jam events with over 100 participants.</li>
          </ul>
        </li>
      </ul>
      <ul className={styles["column-list"]}>
        <li><strong>Undergraduate Grading Assistant</strong></li>
        <li>October 2024 – Present</li>
        <li>FSU Department of Computer Science</li>
        <li></li>
        <li>
          <ul>
            <li>Grade exams and assignments for COT4420 Theory of Computation.</li>
            <li>Review difficult concepts with students one-on-one in office hours.</li>
          </ul>
        </li>
      </ul>
      <h2>Projects</h2>
      <ul className={styles["column-list"]} id="orbital-odyssey">
        <li><strong><a href="https://github.com/devlup-fsu/party-game">Orbital Odyssey</a></strong> <em>Internship Project</em></li>
        <li>August 2024 – Present</li>
        <li>
          <ul>
            <li>Design a modular minigame system for teams to easily integrate their work.</li>
            <li>Write core controller input, scene management, and results screen systems.</li>
            <li>Create the game board that ties the team's minigames together.</li>
          </ul>
        </li>
      </ul>
      <ul className={styles["column-list"]}>
        <li><strong><a href="https://github.com/trikzon/toasty-time">Toasty Time</a></strong> <em>48-hour Game Jam Entry</em></li>
        <li>March – April 2024</li>
        <li>
          <ul>
            <li>Led the programming and taught Godot to our second programmer.</li>
            <li>Wrote a shader to simulate the gradual cooking/burning of a marshmallow.</li>
          </ul>
        </li>
      </ul>
      <ul className={styles["column-list"]}>
        <li><strong><a href="https://github.com/devlup-fsu/party-pirates">Party Pirates</a></strong> <em>DevLUp at FSU Club Project</em></li>
        <li>October 2023 – April 2024</li>
        <li>
          <ul>
            <li>Led the development of a small 4-player local-multiplayer party game.</li>
            <li>Collaborated with and taught around 15 students of different skill levels.</li>
            <li>Showcased the project at the Seminole Innovators Showcase.</li>
          </ul>
        </li>
      </ul>
      <ul className={styles["column-list"]}>
        <li><strong><a href="https://github.com/trikzon/chirp-8">CHIRP-8</a></strong> <em>CHIP-8 Emulator</em></li>
        <li>November 2023</li>
        <li>
          <ul>
            <li>Created a <a href="https://en.wikipedia.org/wiki/CHIP-8">CHIP-8</a> instruction set emulator with Rust, OpenGL, and OpenAL.</li>
            <li>Complied with the CHIP-8 specification and passed all tests.</li>
          </ul>
        </li>
      </ul>
      <ul className={styles["column-list"]}>
        <li><strong><a href="https://github.com/stars/Trikzon/lists/minecraft-mods">Minecraft Mods</a></strong> <em>Multiple Projects</em></li>
        <li>August 2017 – Present</li>
        <li>
          <ul>
            <li>Create Java mods earning 3 million monthly and 85 million total downloads.</li>
            <li>Contribute to other open-source mods to fix bugs and add compatibility.</li>
            <li>Develop an <a href="https://github.com/trikzon/ash-api">open-source API</a> that abstracts the most popular mod loaders.</li>
          </ul>
        </li>
      </ul>
    </>
  );
}
