import "./globals.css";
import type { Metadata } from "next";
import Script from 'next/script';

import SideNavBar from "@/components/navigation/SideNavBar";
import Header, { OffcanvasNavBar } from "@/components/navigation/Header";
import Link from "next/link";
import { ThemeProvider } from "@/utils/theme-provider";

export const metadata: Metadata = {
  title: "Elsandb",
  description: "Personal website, created with Next.js",
  icons: "/icon.png"
};
export const viewport = {
  width: 1,
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en"> 
      <body>
        <ThemeProvider>
          <div className="root-container container-fluid">
            <div className="page-wrapper row pb-2">
              <Header />
              <div id="sidebar" className="border-end col-3 collapse m-0 show">
                <SideNavBar />
              </div>
              <OffcanvasNavBar />
              {/* col - MAIN */}
              <div className="col d-flex pt-5 ps-0 pe-0">
                <main className="w-100">
                  {children}
                </main>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <footer className="text-center bg-body-tertiary">
            <div className="row pt-5 pb-5 m-0 justify-content-center">
              {/* GitHub */}
              <div className="col-sm-2">
                <Link className="d-flex align-items-center justify-content-center gap-2"
                  href="https://github.com/elsandb"
                  target="_blank" rel="noopener noreferrer"
                >
                  <i aria-hidden className="bi bi-github" />
                  GitHub
                </Link>
              </div>
              {/* LinkedIn */}
              <div className="col-sm-3">
                <Link
                  className="d-flex align-items-center justify-content-center gap-2"
                  href="https://www.linkedin.com/in/elsandb/"
                  target="_blank" // open in a new window or tab
                  rel="external noopener noreferrer"
                >
                  <i aria-hidden className="bi bi-linkedin" />
                  LinkedIn
                </Link>
              </div>
            </div>
          </footer>

          {/* <BootstrapClient /> */}
          <Script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
            strategy="lazyOnload"
            integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            crossOrigin="anonymous"
            async />
          <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/languages/go.min.js" async />
        </ThemeProvider>
      </body>
    </html>
  );
}