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
                        <h1 className={`${jomolhari.className} relative px-8 py-4 text-3xl leading-tight break-words dark:text-zinc-50  md:text-4xl md:py-8 lg:text-6xl`}>
                            Application Development
                        </h1>
                    </div>
                    <div className='bg-[#C9D8C7] rounded-lg my-4 mx-5
                    md:w-4/5 md:mx-auto md:my-7 lg:w-3/5 xl:w-3/5 xl:my-12'>
                        <div className={` ${afacad.className} py-4 px-5 md:px-9 md:py-7 lg:px-12 lg:py-9 xl:px-16 xl:py-12`}>
                            <p className='w-full text-base leading-7 text-black dark:text-zinc-400 md:text-lg xl:text-xl'>
                                I am a Full-Stack Engineer and UI/UX Specialist with four years
                                experience in application development.
                            </p>
                            <p className='w-full pt-4 text-base leading-7 text-black dark:text-zinc-400 md:text-lg md:pt-8 xl:text-xl xl:pt-12'>
                                Skilled at adapting legacy applications and modernizing digital
                                products by bridging the gap between high-level creative concepts
                                and high-performance, responsive code.
                            </p>
                            <p className='w-full pt-4 text-base leading-7 text-black dark:text-zinc-400 md:text-lg md:pt-8 xl:text-xl xl:pt-12'>
                                Familiar with performing deep
                                technical audits to resolve delivery and performance conflicts,
                                architecting scalable component libraries, and translating complex
                                Figma designs into pixel-perfect, accessible applications.
                            </p>
                        </div>
                    </div>
                    <h1 className='text-2xl [word-spacing:-0.4em] bg-[#6EA9AD] text-white w-5/6 rounded-lg pb-4 pt-3 mx-auto text-center mt-5
                    md: text-3xl md:w-2/3 lg:text-4xl lg:w-1/2 xl:text-5xl xl:w-2/5'>
                        Projects and Experience
                    </h1>
                    <div className='md:mb-6 md:mt-3'>
                        <CardCarousel items={experienceArray} className="py-4" />
                    </div>
                </div>
            </main >
        </div >
    )
}