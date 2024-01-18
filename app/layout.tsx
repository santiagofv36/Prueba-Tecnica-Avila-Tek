import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Prueba Técnica Avila Tek",
  description: "Aplicación de prueba técnica para Avila Tek",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-0 md:px-20 sm:px-20 sm:pt-5  md:pt-5">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
