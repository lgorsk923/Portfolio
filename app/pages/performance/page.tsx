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
                        <h1 className={`${jomolhari.className} relative px-8 py-4 text-3xl leading-tight break-words dark:text-zinc-50  md:text-4xl md:py-8 lg:text-6xl`}>
                            Performance
                        </h1>
                    </div>
                    <div className='bg-[#C9D8C7] rounded-lg my-4 mx-5
                    md:w-4/5 md:mx-auto md:my-7 lg:w-3/5 xl:w-3/5 xl:my-12'>
                        <div className={` ${afacad.className} py-4 px-5 md:px-9 md:py-7 lg:px-12 lg:py-9 xl:px-16 xl:py-12`}>
                            <p className='w-full text-base leading-7 text-black dark:text-zinc-400 md:text-lg xl:text-xl'>
                                Laura has had the privilege and honor of performing in a variety of settings. Most recently she has performed in a number of productions at the Memorial Opera House in Valparaiso, IN.
                            </p>
                            <p className='w-full pt-4 text-base leading-7 text-black dark:text-zinc-400 md:text-lg md:pt-8 xl:text-xl xl:pt-12'>
                                Her favorite roles to date include: Mary Poppins in Mary Poppins, Betty Haynes in White Christmas, and Celia in Godspell.
                            </p>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    )
}