import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio App for YT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
