import CardCarousel from "@/app/components/card-carousel";
import { afacad, jomolhari } from "../../fonts";
import Image from "next/image";
import { AppDevExperience } from "@/lib/AppDevExperince";
import Link from "next/link";

export default function Page() {
    let experienceArray = AppDevExperience
    return (
        <div className="flex flex-col flex-1 bg-[#F5F5F5] bg-cover bg-center bg-no-repeat">
            <main className="flex flex-col flex-1 sm:justify-start">
                {/*background*/}
                <div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[url('/music-background.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
                        <Image src="/gaffigan-voice-studio-logo-nobg.png" alt="Gaffigan Voice Studio" className="relative px-8" width={400} height={100} />
                    </div>
                    <div className='py-4 px-5 mx-4 flex items-center gap-4 animate-on-scroll'>
                        <Image src="/salzburg landscape picture.jpg" alt="Salzburg Landscape" className="relative z-0 rounded-xl" width={400} height={200} />
                        <div className='bg-[#C9D8C7] rounded-lg my-4 mx-5 align-top md:w-4/5 md:mx-auto md:my-7 lg:w-3/5 xl:w-3/5 xl:my-12'>
                            <div className={`animate-[fadeIn_2s_ease-in-out] ${afacad.className} py-4 px-5 md:px-9 md:py-7 lg:px-12 lg:py-9 xl:px-16 xl:py-12`}>
                                <p className='w-full text-base leading-7 text-black dark:text-zinc-400 md:text-lg xl:text-xl'>
                                    Laura has lived and taught in Northwest Indiana for the last 12 years. Originally from the northern suburbs of Chicago, she is a classically trained graduate of Butler University where she received a Bachelor of Music in Music Education.
                                </p>
                                <p className=' w-full pt-2 text-base leading-7 text-black dark:text-zinc-400 md:text-lg md:pt-8 xl:text-xl xl:pt-8'>
                                    Previously she taught general music and choir in Hebron, Merrillville, and Chesterton for students ranging from elementary to high school. While she stepped away from the formal classroom in 2022, she has continued to teach private voice lessons for people of all ages in the area.
                                </p>
                                <p className=' w-full pt-2 text-base leading-7 text-black dark:text-zinc-400 md:text-lg md:pt-8 xl:text-xl xl:pt-8'>
                                    She has experience vocal directing a variety of productions in NWI and has served as one of the Music Directors for the local chapter of the Penguin Project, a theatre program that provides performance opportunities with mentor support for artists with disabilities, for the last four years.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full mx-4'>
                        <div className='bg-[#C9D8C7] rounded-lg mx-5 md:w-4/5 lg:w-3/5 xl:w-3/5 animate-on-scroll'>
                            <div className={`animate-[fadeIn_2s_ease-in-out] ${afacad.className} py-4 px-5 md:px-9 md:py-7 lg:px-12 lg:py-9 xl:px-16 xl:py-12`}>
                                <p className='w-full text-base leading-7 text-black dark:text-zinc-400 md:text-lg xl:text-xl'>
                                    With a background in classical voice, Laura has a strong foundation in healthy vocal technique and pedagogy. She strives to help students develop their voices in a healthy and sustainable way, while also exploring their own unique artistic expression through a variety of genres.
                                </p>
                                <p className='w-full pt-4 text-base leading-7 text-black dark:text-zinc-400 md:text-lg md:pt-8 xl:text-xl'>
                                    Her teaching style revolves around pride in one's voice. The voice is a very vulnerable instrument. It is arguably the only instrument that can’t be traded in for a new one if we don’t like the way it sounds. Everything we do in lessons is meant to build confidence and pride in one’s voice where it is right now, while targeting areas in which we can still work to develop an even greater voice.
                                </p>
                                <p className='w-full pt-4 text-base leading-7 text-black dark:text-zinc-400 md:text-lg md:pt-8 xl:text-xl'>Whether your goals include learning to read music, increasing your range and stamina while singing, or just generally increasing your confidence as a performer, she would be happy to help!</p>
                            </div>
                        </div>
                        <div className='w-full my-10 px-25'>
                            <div className='ml-auto bg-[#C9D8C7] rounded-lg md:w-4/5 lg:w-3/5 xl:w-3/5'>
                                <div className={`animate-[fadeIn_2s_ease-in-out] ${afacad.className} animate-on-scroll py-4 px-5 md:px-9 md:py-7 lg:px-12 lg:py-9 xl:px-16 xl:py-12`}>
                                    <p className='w-full text-base leading-7 text-black dark:text-zinc-400 md:text-lg xl:text-xl'>
                                        If you have any questions regarding lesson rates or availabilty, please click
                                        <Link href="/pages/contact" className="px-2 text-[#6EA9AD] underline font-bold hover:text-theme-teal/80 transition-colors duration-300 ease-in-out">
                                            HERE
                                        </Link>
                                        and complete the contact form. I will get back to you as soon as I am able!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main >
        </div >
    )
}