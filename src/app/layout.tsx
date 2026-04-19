import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clawdoes",
  description: "Deploy your OpenClaw agent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            {/* Navigation */}
            <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
              <nav className="mx-auto grid h-16 max-w-6xl grid-cols-3 items-center px-6">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-2.5">
                  <Image
                    src="/logo.svg"
                    alt="Clawdoes"
                    width={28}
                    height={28}
                    priority
                    className="size-7 select-none dark:invert"
                  />
                  <div className="flex flex-col">
                    <span className="font-serif text-lg font-medium leading-none tracking-tight">
                      Clawdoes
                    </span>
                    <span className="mt-1 font-mono text-[10px] uppercase leading-none tracking-[0.14em] text-muted-foreground">
                      Powered by OpenClaw
                    </span>
                  </div>
                </Link>

                {/* Center: Links */}
                <div className="hidden items-center justify-center gap-8 md:flex">
                  <Link
                    href="#pricing"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="#features"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Features
                  </Link>
                  <Link
                    href="#faq"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Blog
                  </Link>
                </div>

                {/* Right: CTA */}
                <div className="flex justify-end">
                  <Link href="#pricing">
                    <Button size="sm" className="rounded-full px-5 font-medium">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </nav>
            </header>
            {children}
            {/* Footer */}
            <footer className="border-t border-border bg-muted/40">
              <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
                  {/* Brand */}
                  <div className="col-span-2 md:col-span-1">
                    <Link href="/" className="flex items-center gap-2.5">
                      <Image
                        src="/logo.svg"
                        alt="Clawdoes"
                        width={22}
                        height={22}
                        className="size-[22px] select-none dark:invert"
                      />
                      <span className="font-serif text-base font-medium tracking-tight">
                        Clawdoes
                      </span>
                    </Link>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      Deploy your OpenClaw agent in minutes. Private, personal AI
                      assistants for everyone.
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      Product
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                      <li>
                        <Link
                          href="/"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#pricing"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#features"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          Features
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      Use Cases
                    </h4>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      <li>CEOs</li>
                      <li>Developers</li>
                      <li>Content Creators</li>
                      <li>Freelancers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      Legal
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                      <li>
                        <Link
                          href="/terms"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          Terms of Service
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/privacy"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-4 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      Open Source
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                      <li>
                        <a
                          href="https://github.com/openclaw"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          OpenClaw on GitHub
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://docs.openclaw.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                          Documentation
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-12 flex items-center justify-between border-t border-border pt-8 font-mono text-[11px] text-muted-foreground">
                  <span>
                    &copy; {new Date().getFullYear()} Clawdoes LLC. All rights
                    reserved.
                  </span>
                  <span>Powered by OpenClaw</span>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
