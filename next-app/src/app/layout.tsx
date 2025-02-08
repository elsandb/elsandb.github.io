import "./globals.css";
import type { Metadata } from "next";
import Script from 'next/script';

import SideNavBar from "@/components/navigation/SideNavBar";
import Header from "@/components/navigation/Header";
import HtmlThemeProvider from "../utils/html-theme-provider";

export const metadata: Metadata = {
  title: "Elsandb",
  description: "Personal website, created with Next.js",
};
export const viewport = {
  width: 1,
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HtmlThemeProvider>
      <body>
        <div className="root-container container-fluid">
          <div id="work-in-progress-row" className="row pt-5 text-center text-md-end">
            <div className="col"></div>
            <p className="fw-light* text-primary orange-55 fs-6 pt-2 mb-0">🔧 Work in progress🔧</p>
          </div>
          <div className="page-wrapper row pt-2* pb-2">
            {/* HEADER */}
            <Header />
            {/* col - SIDEBAR */}
            <div id="sidebar" className="border-end col-3 collapse m-0 show">
              <SideNavBar />
            </div>
            {/* col - MAIN */}
            <div className="col d-flex pt-5* ps-0 pe-0">
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
              <a className="d-flex align-items-center justify-content-center gap-2"
                href="https://github.com/elsandb"
                target="_blank" rel="noopener noreferrer"
                style={{ color: "#538A90" }}
              >
                <i aria-hidden className="bi bi-github" />
                GitHub
              </a>
            </div>
            {/* LinkedIn */}
            <div className="col-sm-3">
              <a
                className="d-flex align-items-center justify-content-center gap-2"
                href="https://www.linkedin.com/in/elsandb/"
                target="_blank" // open in a new window or tab
                rel="external noopener noreferrer"
                style={{ color: "#538A90" }}
              >
                <i aria-hidden className="bi bi-linkedin" />
                LinkedIn
              </a>
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

      </body>
    </HtmlThemeProvider>
  );
}