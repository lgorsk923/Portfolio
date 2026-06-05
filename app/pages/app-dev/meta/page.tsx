import BackButton from "@/components/backButton"
import Image from "next/image"

export default function Page() {
    return (
        <div className="flex flex-col flex-1 bg-[#FFFFFF] bg-cover bg-center bg-no-repeat">
            <main className="flex flex-col flex-1 sm:justify-start">
                <div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[url('/development-background.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
                        <h1 className={`relative px-8 py-4 text-3xl leading-tight break-words dark:text-zinc-50  md:text-4xl md:py-8 lg:text-6xl`}>
                            Meta Front-End Developer Professional Certificate Capstone Project
                        </h1>
                    </div>
                    <div className='bg-[#C9D8C7] px-5 pt-3 pb-6 md:px-10 md:py-9'>
                        <BackButton href='/pages/app-dev' />
                        <div className='w-full md:w-5/6 md:mx-auto md:overflow-hidden md:rounded-lg md:aspect-[2/1]'>
                            <Image
                                src='/meta_thumbnail.png' alt='Meta Capstone Project thumbnail'
                                width={800}
                                height={450}
                                className='my-2 rounded-lg md:my-0 md:h-full md:w-full md:object-cover md:object-top'
                            />
                        </div>
                        <div className='xl:w-4/5 xl:mx-auto'>
                            <p className='mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300'>
                                As part of the Meta Front-End Developer Professional Certificate, I built a fully responsive website using Create React App based on wireframes and prototypes I created using Figma. Since completion of the certification, I have also independently translated the project into a Next.js application.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}