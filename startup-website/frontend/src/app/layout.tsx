import type { Metadata } from "next";
import { orbitron, ptSansNarrow } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "SKY AI", 
  description: "Website of SKY AI", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ptSansNarrow.variable} ${orbitron.variable}`}
    >
      <head>
      </head>
      <body className={`${ptSansNarrow.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
