import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Koi Mobilize",
  description: "Koi Mobilize Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${open_sans.className} relative`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
