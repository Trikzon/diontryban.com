import type { Metadata } from "next";

import "the-new-css-reset/css/reset.css";
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
      <body>
        {children}
      </body>
    </html>
  );
}
