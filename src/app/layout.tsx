import type { Metadata } from "next";
import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Blob from "@/components/Blob";

const inter = Inter({ subsets: ["latin"] });
const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // This is the key fix
});

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
      <body
        className={`${open_sans.className} relative bg-black pb-[80vh] overflow-x-hidden`}
      >
        <Header />
        {children}
        <div className="hidden md:flex absolute bottom-0 -right-[30%]">
          <Blob className="h-[50rem] w-[50rem]" />
        </div>
        <Footer />
      </body>
    </html>
  );
}
