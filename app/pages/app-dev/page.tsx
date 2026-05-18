import CardCarousel from "@/app/components/card-carousel";
import { ItemCard } from "@/app/components/portfolio-item-card";
import { Card } from "@/components/ui/card";
import { afacad, jomolhari } from "../../fonts";
import { AppDevExperience } from "@/lib/AppDevExperince";
export default function Page() {
    let experienceArray = AppDevExperience
    return (
        <div className="flex flex-col flex-1 bg-[#FFFFFF] bg-cover bg-center bg-no-repeat">
            <main className="flex flex-col flex-1 sm:justify-start">
                <div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[url('/development-background.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
                        <h1 className={`${jomolhari.className} relative py-4 px-4 text-3xl leading-tight break-words dark:text-zinc-50 sm:px-8 sm:text-5xl lg:text-6xl`}>
                            Application Development
                        </h1>
                    </div>
                    <div className='border-5 border-[#C9D8C7] my-3 mx-3 p'>
                        <div className={` ${jomolhari.className} text-sm px-2 py-3 sm:px-8`}>
                            <p className='w-full text-md leading-7 text-black dark:text-zinc-400'>
                                I am a Full-Stack Engineer and UI/UX Specialist with four years
                                experience in application development.
                            </p>
                            <p className='w-full  pt-4 text-md leading-7 text-black dark:text-zinc-400'>
                                Skilled at adapting legacy applications and modernizing digital
                                products by bridging the gap between high-level creative concepts
                                and high-performance, responsive code.
                            </p>
                            <p className='w-full  pt-4 text-md leading-7 text-black dark:text-zinc-400'>
                                Familiar with performing deep
                                technical audits to resolve delivery and performance conflicts,
                                architecting scalable component libraries, and translating complex
                                Figma designs into pixel-perfect, accessible applications.
                            </p>
                        </div>
                    </div>
                    <h1 className='text-2xl [word-spacing:-0.4em] bg-[#6EA9AD] text-white w-5/6 rounded-lg pb-4 pt-3 mx-auto text-center mt-5'>
                        Projects and Experience
                    </h1>
                    <div>
                        <CardCarousel items={experienceArray} className="py-4" />
                    </div>
                </div>
            </main >
        </div >
    )
}