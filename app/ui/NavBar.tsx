"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMastodon } from "@fortawesome/free-brands-svg-icons";
import styles from "@/app/ui/NavBar.module.scss";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
];

const socialLinks = [
    { href: "https://github.com/trikzon", icon: faGithub },
    { href: "https://www.linkedin.com/in/diontryban/", icon: faLinkedin },
    { href: "https://mastodon.gamedev.place/@diontryban", icon: faMastodon },
]

export default function NavBar() {
    const pathname = usePathname();

    return (
        <nav className={styles.navBar}>
            <div className={styles.title}>
                <Link href="/">Dion Tryban</Link>
            </div>
            <div className={styles.navLinks}>
                {navLinks.map(({ href, label }) => (
                    <Link className={clsx(href === pathname && styles.active)}
                          key={href}
                          href={href}>
                        {label}
                    </Link>
                ))}
            </div>
            <div className={styles.socialLinks}>
                {socialLinks.map(({ href, icon }) => (
                    <a key={href} href={href}>
                        <FontAwesomeIcon icon={icon} />
                    </a>
                ))}
            </div>
        </nav>
    )
}
