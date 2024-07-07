import styles from "@/app/ui/Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true"
                 alt="cute cat footer" />
            <div>Copyright © 2024 Dion Tryban</div>
            <div className={styles.poweredBy}>
                <span>Powered by <a href="https://nextjs.org/">Next.js</a>, </span>
                <span><a href="https://www.content-collections.dev/">Content Collections</a>, </span>
                <span>and <a href="https://catppuccin.com/">Catppuccin</a>.</span>
            </div>
        </footer>
    )
}
