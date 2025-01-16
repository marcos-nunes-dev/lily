import { BookOpen, FileText, Globe2, GraduationCap, MessageSquare, Users } from 'lucide-react'
import { GradientBackground } from './gradient-background'

export function FeaturesSection() {
  return (
    <section id="features" className="relative w-full overflow-hidden bg-slate-50/50 dark:bg-transparent py-8 md:py-12 lg:py-24">
      <GradientBackground />
      <div className="container relative">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Everything you need to accelerate your international tech career
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background/60 backdrop-blur-sm p-2 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <GraduationCap className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Interview Classes</h3>
                <p className="text-sm text-muted-foreground">
                  Master technical interviews with live practice sessions and expert feedback.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background/60 backdrop-blur-sm p-2 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <FileText className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Resume Reviews</h3>
                <p className="text-sm text-muted-foreground">
                  Get personalized feedback on your resume from industry experts.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background/60 backdrop-blur-sm p-2 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <BookOpen className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Daily Webinars</h3>
                <p className="text-sm text-muted-foreground">
                  Learn from industry experts through interactive online sessions.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background/60 backdrop-blur-sm p-2 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Globe2 className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Social Media Navigation</h3>
                <p className="text-sm text-muted-foreground">
                  Learn how to build your professional brand and network effectively.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background/60 backdrop-blur-sm p-2 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <MessageSquare className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Community Support</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with peers and mentors in our supportive community.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background/60 backdrop-blur-sm p-2 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-transparent hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <Users className="h-12 w-12" />
              <div className="space-y-2">
                <h3 className="font-bold">Job Opportunities</h3>
                <p className="text-sm text-muted-foreground">
                  Get first access to international tech job opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

