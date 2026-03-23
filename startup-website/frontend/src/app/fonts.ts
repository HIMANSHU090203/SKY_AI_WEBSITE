import { Orbitron, PT_Sans_Narrow } from "next/font/google";

export const ptSansNarrow = PT_Sans_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pt-sans-narrow",
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
});
