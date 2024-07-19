import styles from "@/app/ui/Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface ExternalLinkProps {
    href: string;
    children: React.ReactNode;
}

function ExternalLink({ href, children }: ExternalLinkProps) {
    return (
        <a href={href}>
            {children}
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.externalLinkIcon} />
        </a>
    )
}

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true"
                 alt="cute cat footer" />
            <div>Copyright © 2024 Dion Tryban</div>
            
            <div className={styles.poweredBy}>
                <span>Powered by <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>, </span>
                <span><ExternalLink href="https://www.content-collections.dev">Content Collections</ExternalLink>, </span>
                <span>and <ExternalLink href="https://catppuccin.com">Catppuccin</ExternalLink>.</span>
            </div>
        </footer>
    )
}
