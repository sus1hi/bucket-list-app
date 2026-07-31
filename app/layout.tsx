import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bucket List",
  description: "A personal bucket list",
};

// Category filters available in the nav bar.
const categories = ["Activity", "Place", "Other"];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="border-b border-zinc-200 px-6 py-4 dark:border-zinc-800">
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/category/${category}`}
                  className="hover:underline"
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
