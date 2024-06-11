import { Inter } from "next/font/google";
import BootstrapClient from "@/app/_components/BootstrapClient.js";
import "bootstrap/dist/css/bootstrap.css";
import "./_styles/globals.css";
import SideNavBar from "./_components/navigation/side-navbar";
import Header from "./_components/navigation/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Patient Data Next.js App",
  description: "Web app created with Next.js, App Router.",
};

function Footer() {
  return <footer>Footer</footer>;
}

/* Root Layout - https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates#root-layout-required */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Header />

        <div className="container-fluid">
          <div className="row flex-nowrap">
            <SideNavBar />
            <main className="col ps-md-2 pt-2">
              <div className="page-content-wrap ps-5">{children}</div>
            </main>
          </div>
        </div>

        <Footer />

        <BootstrapClient />
        
      </body>
    </html>
  );
}
