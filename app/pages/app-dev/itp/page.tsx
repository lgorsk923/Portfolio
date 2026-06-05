'use client'

import { jomolhari, afacad } from '../../../fonts';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import BackButton from '@/components/backButton';

export default function Page() {
    const [expandedSkills, setExpandedSkills] = useState(false);
    const [showVideo, setShowVideo] = useState(false);
    const [canExpandSkills, setCanExpandSkills] = useState(false);
    const skillsRef = useRef<HTMLParagraphElement | null>(null);
    const [isLargeViewport, setIsLargeViewport] = useState(false);

    useEffect(() => {
        const lgMq = window.matchMedia("(min-width: 1024px)");
        const onLgChange = (e: MediaQueryListEvent) => setIsLargeViewport(e.matches);

        setIsLargeViewport(lgMq.matches);

        if (lgMq.addEventListener) lgMq.addEventListener("change", onLgChange);
        else lgMq.addListener(onLgChange);

        return () => {
            if (lgMq.removeEventListener) lgMq.removeEventListener("change", onLgChange);
            else lgMq.removeListener(onLgChange);
        };
    }, []);

    useEffect(() => {
        if (isLargeViewport) {
            setCanExpandSkills(false);
            return;
        }
        if (expandedSkills) return;
        const frame = window.requestAnimationFrame(() => {
            const el = skillsRef.current;
            if (!el) return;
            setCanExpandSkills(el.scrollHeight > el.clientHeight + 1);
        });
        return () => window.cancelAnimationFrame(frame);
    }, [expandedSkills, isLargeViewport]);
    return (
        <div className="flex flex-col flex-1 bg-[#FFFFFF] bg-cover bg-center bg-no-repeat">
            <main className="flex flex-col flex-1 sm:justify-start">
                <div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[url('/development-background.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
                        <h1 className={`${jomolhari.className} relative px-8 py-4 text-3xl leading-tight break-words dark:text-zinc-50  md:text-4xl md:py-8 lg:text-6xl`}>
                            In Touch Pharmaceuticals
                        </h1>
                    </div>

                    <div className='bg-[#C9D8C7] px-5 pt-2 pb-6 md:px-10 md:py-9'>
                        <BackButton href='/pages/app-dev' />
                        <div className='w-full md:w-4/5 md:mx-auto xl:w-3/5 md:overflow-hidden rounded-lg md:aspect-[2/1]'>
                            <Image
                                src='/in-touch.png'
                                alt='In Touch Pharmaceuticals thumbnail'
                                width={800}
                                height={450}
                                className='my-2 rounded-lg md:my-0 md:h-full md:w-full md:object-cover md:object-top'
                            />
                        </div>
                        <div className='xl:w-4/5 xl:mx-auto'>
                            <div className='bg-white m-3 rounded-xl
                    md:w-4/5 md:my-7 lg:w-4/5 xl:w-3/5 xl:my-12'>
                                <p className={` ${afacad.className} py-4 px-5 md:px-9 md:py-7 lg:px-12 lg:py-9 xl:px-16 xl:py-12 w-full text-base leading-7 text-black dark:text-zinc-400 md:text-lg xl:text-xl`}>
                                    I have worked with ITP for the last 3 years as a contracted developer to complete several projects and maintenance tasks. Summaries of each major project can be found below.
                                </p>
                            </div>
                            <div>
                                <div className='border-5 border-[#6EA9AD] bg-white rounded-xl mx-3 mt-5 py-2 px-5
                        md:w-3/5 md:ml-auto md:my-7 lg:w-3/5 xl:w-3/5 xl:my-12'>
                                    <h3 className='font-semibold text-lg'>Hubspot Migration</h3>
                                    <p className={` ${afacad.className} px-2 mt-1 md:px-9 lg:px-12 xl:px-16 w-full text-base leading-7 text-black dark:text-zinc-400 md:text-lg xl:text-xl`}>
                                        In my most recent project, I orchestrated the migration of a complex corporate WordPress site to HubSpot CMS. I developed a library of custom modules and templates that will allow internal marketing teams to make updates easily while maintaining brand consistency.
                                    </p>
                                    <h3 className='mt-3 font-semibold text-base'>Highlighted Skills:</h3>
                                    <p className={`${afacad.className} text-base px-2 mt-1`}>WordPress & HubSpot CMS content management, HubL</p>
                                </div>
                                {(isLargeViewport || showVideo) ? (
                                    <div>
                                        <video
                                            controls
                                            preload="none"
                                            className='aspect-video w-[calc(100%-1.5rem)] rounded-xl mx-3 mt-5 object-cover md:w-3/5 md:ml-auto md:my-7 lg:w-3/5 xl:w-3/5 xl:my-12'>
                                            <source src="/Hubspot_migration.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                        {!isLargeViewport && (
                                            <button
                                                onClick={() => setShowVideo(false)}
                                                className={`${afacad.className} mt-2 px-5 py-2 rounded-lg bg-[#6EA9AD] text-white text-base font-semibold hover:bg-[#5a9297] transition-colors`}
                                            >
                                                Hide
                                            </button>
                                        )}
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setShowVideo(true)}
                                        className={`${afacad.className} mt-3 px-5 py-2 rounded-lg bg-[#6EA9AD] text-white text-base font-semibold hover:bg-[#5a9297] transition-colors`}
                                    >
                                        See Demo
                                    </button>
                                )}
                            </div>
                            <div className='border-5 border-[#6EA9AD] bg-white rounded-xl mx-3 mt-5 py-2 px-5
                        md:w-3/5 md:ml-auto md:my-7 lg:w-3/5 xl:w-3/5 xl:my-12'>
                                <h3 className='font-semibold text-lg'>Customer Portal Development</h3>
                                <p className={` ${afacad.className} px-2 mt-1 md:px-9 lg:px-12 xl:px-16 w-full text-base leading-7 text-black dark:text-zinc-400 md:text-lg xl:text-xl`}>
                                    I contributed extensively to a customer portal application built primarily with TypeScript and C#, working across both the front and back end. I focused my development on the TypeScript front end and integrated with the backend APIs to support core business workflows. By maintaining a disciplined, agile workflow, I delivered a steady stream of production commits to GitHub—breaking down large feature requests into clean, incremental updates and fixes while maintaining the overall reliability of the portal.
                                </p>
                            </div>
                            <div className='border-5 border-[#6EA9AD] bg-white rounded-xl mx-3 mt-5 py-2 px-5
                        md:w-3/5 md:ml-auto md:my-7 lg:w-3/5 xl:w-3/5 xl:my-12'>
                                <h3 className='font-semibold text-lg'>Policy and Procedure Digitization</h3>
                                <p className={` ${afacad.className} px-2 mt-1 md:px-9 lg:px-12 xl:px-16 w-full text-base leading-7 text-black dark:text-zinc-400 md:text-lg xl:text-xl`}>
                                    I completed a full transcription and reformatting of the company's policy and procedure manuals to be accessible via ITP's customer portal. The files are easily editable by company associates thanks to the utilization of Markdown. Formatting and styling were completed using designated CSS classes to maintain consistency in branding. Additionally, multiple branches of the manuals were created, allowing for easy customization across clients. Docfx was utilized to create pdf versions of each manual, and Github Actions were created to trigger the creation of updated pdfs anytime a new commit is made.
                                </p>
                            </div>
                            {/*<div className='bg-white rounded-xl mx-3 mt-5 py-4
                    md:w-3/5 md:my-7 lg:w-1/3 xl:w-1/4 xl:my-12'>
                                <h3 className='mx-4 mb-1 font-bold md:px-5'>Project Files:</h3>
                                <div className='grid grid-cols-1 border-[#6EA9AD] border-2 mx-4 px-3 py-2 md:mx-9'>
                                    <Link href='https://www.figma.com/design/PPYARyYddHDNelpTKSIN8Y/Call-Forward-Pro?node-id=56-3084&t=JiV93tTTNW8sIqIv-1' className='text-[#495D57] hover:underline' target="_blank" rel="noopener noreferrer">
                                        Figma Files
                                    </Link>
                                    <Link href='/CallForward_Mobile_View.pdf' className='text-[#495D57] hover:underline' target="_blank" rel="noopener noreferrer">
                                        Mobile-View Preview
                                    </Link>
                                    <Link href='/CallForward_Desktop_View.pdf' className='text-[#495D57] hover:underline' target="_blank" rel="noopener noreferrer">
                                        Desktop-View Preview
                                    </Link>
                                </div>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}