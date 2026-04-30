import CardCarousel from "@/app/components/card-carousel";
import { ItemCard } from "@/app/components/portfolio-item-card";
import { Card } from "@/components/ui/card";
import { AppDevExperience } from "@/lib/AppDevExperince";
export default function Page() {
    let experienceArray = AppDevExperience
    return (
        <div className="flex flex-col flex-1 bg-cyan-50 bg-cover bg-center bg-no-repeat">
            <main className="flex flex-col flex-1 sm:justify-start">
                <div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[url('/development-background.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
                        <h1 className="relative flex py-4 min-w-0 items-center px-8 text-4xl font-semibold text-violet-900 dark:text-zinc-50 sm:text-6xl">
                            Full-Stack Development
                        </h1>
                    </div>
                    <div className="px-8 py-4 [word-spacing:-0.15em]">
                        <p className='max-w-md text-md leading-8 text-black dark:text-zinc-400'>
                            I am a Full-Stack Engineer and UI/UX Specialist with four years
                            experience in application development.
                            Skilled at adapting legacy applications and modernizing digital
                            products by bridging the gap between high-level creative concepts
                            and high-performance, responsive code. Familiar with performing deep
                            technical audits to resolve delivery and performance conflicts,
                            architecting scalable component libraries, and translating complex
                            Figma designs into pixel-perfect, accessible applications.
                        </p>
                    </div>
                    <h1 className='text-2xl px-8 [word-spacing:-0.4em]'> Projects and Experience </h1>
                    <div>
                        <CardCarousel items={experienceArray} className="py-4" />
                    </div>
                </div>
            </main>
        </div>
    )
}