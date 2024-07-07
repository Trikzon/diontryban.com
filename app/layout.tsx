import clsx from "clsx";
import type { Metadata } from "next";
import { Rosarivo } from "next/font/google";
import "@/app/globals.scss";
import styles from "@/app/layout.module.scss";
import Footer from "@/app/ui/Footer";
import NavBar from "@/app/ui/NavBar";

const rosarivo = Rosarivo({
    weight: '400',
    subsets: ["latin"]
});

export const metadata: Metadata = {
    title: "Dion Tryban",
    icons: {
        icon: "/favicon/favicon.ico",
        apple: "/favicon/apple-touch-icon.png",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={clsx(rosarivo.className, styles.body)}>
                <NavBar />
                <main className={styles.main}>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
