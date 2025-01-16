import { Button } from "@/components/button"
import { ArrowRight } from 'lucide-react'
import { AnimatedBackground } from './animated-background'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="container flex flex-col items-center justify-center gap-4 py-8 md:py-12 lg:py-24 relative z-10">
        <a
          href="#pricing"
          className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
        >
          🎉 <span className="ml-2">Join our growing community of developers</span>
        </a>
        <h1 className="text-center text-4xl font-bold leading-tight tracking-tighter md:text-6xl lg:text-7xl lg:leading-[1.1]">
          Empowering Brazilian Developers
          <br className="hidden sm:inline" />
          to Build Global Careers
        </h1>
        <p className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl md:text-2xl">
          Join a supportive community that provides interview preparation, resume building, and career
          development resources tailored for Brazilian developers.
        </p>
        <Link href="/signup" className="w-full max-w-md">
          <Button type="submit" size="lg" variant="gradient" className="w-full whitespace-nowrap">
            <span className="flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </span>
          </Button>
        </Link>
      </div>
    </section>
  )
}

