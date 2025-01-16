import Link from "next/link"
import { Button } from "@/components/button"
import { Globe } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Globe className="h-6 w-6" />
            <span className="font-bold">Lily</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#features" className="transition-colors hover:text-foreground/80">
              Features
            </Link>
            <Link href="#pricing" className="transition-colors hover:text-foreground/80">
              Pricing
            </Link>
            <Link href="#community" className="transition-colors hover:text-foreground/80">
              Community
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Link href="/signup">
            <Button type="submit" size="lg" variant="gradient" className="whitespace-nowrap">
              <span>Join Community</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

