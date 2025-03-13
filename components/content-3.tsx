import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <img className="rounded-(--radius) grayscale" src="/zoltan-tasi-4T7-GLBDLKE-unsplash.jpg" alt="team image" height="" width="" loading="lazy" />

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">Building enduring brand foundations and digital experiences that stand firm.</h2>
                    <div className="space-y-6">
                        <p>Drawing inspiration from our Maasai name meaning "rock", Soit Studio combines thoughtful design with technical expertise to craft distinctive brand identities and responsive websites that create authentic connections.</p>
                        <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>Learn More</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
