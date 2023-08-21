import Link from "next/link";
import React from "react";
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/todos">Todo</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}