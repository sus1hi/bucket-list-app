import type { Metadata } from "next";
import { Courier_Prime, Kalam } from "next/font/google";
import Link from "next/link";
import { CATEGORIES } from "@/types/bucket";
import "./globals.css";

// Two voices, and which one a piece of text gets is a rule, not a taste call:
// Kalam is anything the reader wrote (titles, entries, what they type),
// Courier Prime is anything the form came printed with (nav, column heads,
// labels, dates, buttons). Both ship real 400 and 700 cuts, so emphasis uses
// a drawn bold rather than a browser-synthesized one. Use font-bold (700);
// the intermediate utilities have no matching cut in either face.
const kalam = Kalam({
  weight: ["400", "700"],
  variable: "--font-handwriting",
  subsets: ["latin"],
});

const courier = Courier_Prime({
  weight: ["400", "700"],
  variable: "--font-courier",
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
      className={`${kalam.variable} ${courier.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* A double rule closes the sheet's header, the way a ledger page
            separates its masthead from the entries below it. */}
        <nav className="border-b-4 border-double border-foreground/60 px-6 py-4">
          <ul className="flex gap-6 font-typewriter text-[0.75rem] font-bold uppercase tracking-[0.1em]">
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
