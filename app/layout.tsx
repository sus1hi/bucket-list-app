import type { Metadata } from "next";
import { Kalam } from "next/font/google";
import Link from "next/link";
import { CATEGORIES } from "@/types/bucket";
import "./globals.css";

// Kalam ships real 400 and 700 cuts, so emphasis uses a drawn bold rather
// than a browser-synthesized one. Use font-bold (700) for emphasis; the
// intermediate utilities have no matching cut.
const kalam = Kalam({
  weight: ["400", "700"],
  variable: "--font-handwriting",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bucket List",
  description: "A personal bucket list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kalam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="border-b border-muted/40 px-6 py-4">
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:text-accent-hover">
                Home
              </Link>
            </li>
            {CATEGORIES.map((category) => (
              <li key={category}>
                <Link
                  href={`/category/${category}`}
                  className="hover:text-accent-hover"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="flex-1 px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
