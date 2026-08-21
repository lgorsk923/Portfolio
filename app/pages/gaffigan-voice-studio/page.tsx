import CardCarousel from "@/app/components/card-carousel";
import { afacad, jomolhari } from "../../fonts";
import Image from "next/image";
import { AppDevExperience } from "@/lib/AppDevExperince";
import Link from "next/link";

export default function Page() {
    let experienceArray = AppDevExperience
    return (
        <div className="flex flex-col flex-1 bg-[#FFFFFF] bg-cover bg-center bg-no-repeat">
            <main className="flex flex-col flex-1 sm:justify-start">
                <div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[url('/music-background.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
                        <Image src="/gaffigan-voice-studio-logo-nobg.png" alt="Gaffigan Voice Studio" className="relative px-8" width={400} height={100} />
                    </div>
                    <div className='bg-[#C9D8C7] rounded-lg my-4 mx-5
                    md:w-4/5 md:mx-auto md:my-7 lg:w-3/5 xl:w-3/5 xl:my-12'>
                        <div className={` ${afacad.className} py-4 px-5 md:px-9 md:py-7 lg:px-12 lg:py-9 xl:px-16 xl:py-12`}>
                            <p className='w-full text-base leading-7 text-black dark:text-zinc-400 md:text-lg xl:text-xl'>
                                I taught choir and general music in Indiana public schools for grades k-12 over the span of eight years. After Covid, however, I decided to step back from full-time teaching and embrace the world of private voice.
                            </p>
                            <p className='w-full pt-4 text-base leading-7 text-black dark:text-zinc-400 md:text-lg md:pt-8 xl:text-xl xl:pt-12'>
                                This decision allowed me to focus more on some of my favorite parts of the art of teaching. I LOVE getting to work with students one-on-one. Getting to truly listen and observe each performer really allows me to target their specific needs and help them grow as musicians.
                            </p>
                            <p className='w-full pt-4 text-base leading-7 text-black dark:text-zinc-400 md:text-lg md:pt-8 xl:text-xl xl:pt-12'>
                                With a background in classical voice, I have a strong foundation in healthy vocal technique and pedagogy. I strive to help students develop their voices in a healthy and sustainable way, while also exploring their own unique artistic expression through a variety of genres.
                            </p>
                            <p className='w-full pt-4 text-base leading-7 text-black dark:text-zinc-400 md:text-lg md:pt-8 xl:text-xl xl:pt-12'>
                                Another passion of mine is helping students overcome anxiety and stage fright. As someone who has struggled with it herself, I love getting to share the tools and techniques that have helped me to break through and really enjoy performing more.
                            </p>
                            <p className='w-full pt-4 text-base leading-7 text-black dark:text-zinc-400 md:text-lg md:pt-8 xl:text-xl xl:pt-12'>
                                If you have any questions regarding lesson rates or availabilty, please click
                                <Link href="/pages/contact" className="px-2 text-[#6EA9AD] underline font-bold hover:text-theme-teal/80 transition-colors duration-300 ease-in-out">
                                    HERE
                                </Link>
                                and complete the contact form. I will get back to you as soon as I am able!
                            </p>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    )
}