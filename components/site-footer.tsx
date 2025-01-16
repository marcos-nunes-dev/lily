import { Globe } from 'lucide-react'
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Globe className="h-6 w-6" />
            <span className="font-bold">Lily</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Empowering Brazilian developers to build global careers through community, education, and
            opportunity.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#community" className="text-muted-foreground hover:text-foreground">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container border-t border-border/50 py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Lily. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

