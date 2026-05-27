"use client"

import Image from "next/image";
import Link from "next/link";
import { afacad, jomolhari } from "../../../fonts";
import { useEffect, useRef, useState } from "react";

export default function Page() {
    const [expandedSkills, setExpandedSkills] = useState(false);
    const [canExpandSkills, setCanExpandSkills] = useState(false);
    const skillsRef = useRef<HTMLParagraphElement | null>(null);

    useEffect(() => {
        if (expandedSkills) return;
        const frame = window.requestAnimationFrame(() => {
            const el = skillsRef.current;
            if (!el) return;
            setCanExpandSkills(el.scrollHeight > el.clientHeight + 1);
        });
        return () => window.cancelAnimationFrame(frame);
    }, [expandedSkills]);

    return (
        <div className="flex flex-col flex-1 bg-[#FFFFFF] bg-cover bg-center bg-no-repeat">
            <main className="flex flex-col flex-1 sm:justify-start">
                <div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[url('/development-background.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
                        <h1 className={`${jomolhari.className} relative px-8 py-4 text-3xl leading-tight break-words dark:text-zinc-50  md:text-4xl md:py-8 lg:text-6xl`}>
                            Call Forward
                        </h1>
                    </div>
                    <div className='bg-[#C9D8C7] px-5 pt-3 pb-6'>
                        <Image src='/call-forward-thumbnail.png' alt='Call Forward thumbnail' width={800} height={450} className='my-2 rounded-lg' />
                        <div className='bg-white border-5 border-[#C9D8C7] rounded-xl
                    md:w-4/5 md:mx-auto md:my-7 lg:w-3/5 xl:w-3/5 xl:my-12'>
                            <p className={` ${afacad.className} py-4 px-5 md:px-9 md:py-7 lg:px-12 lg:py-9 xl:px-16 xl:py-12 w-full text-base leading-7 text-black dark:text-zinc-400 md:text-lg xl:text-xl`}>
                                An independent Next.js project. Call Forward is a responsive scheduling application providing
                                call forwarding services. It allows users the ability to build an on-call team with a designated phone number in
                                a zip code of their choice. It also aids in the facilitation of creating a schedule that will automatically forward any calls
                                received at the selected number to the appropriate user.
                            </p>
                        </div>
                        <div className='bg-white border-5 border-[#C9D8C7] rounded-xl mt-2
                    md:w-4/5 md:mx-auto md:my-7 lg:w-3/5 xl:w-3/5 xl:my-12'>
                            <h3 className='my-2 mx-4 font-bold'>Highlighted Skills:</h3>
                            <p
                                ref={skillsRef}
                                className={` ${afacad.className} px-5 md:px-9 md:py-7 lg:px-12 lg:py-9 xl:px-16 xl:py-12 w-full text-base leading-7 text-black dark:text-zinc-400 md:text-lg xl:text-xl ${expandedSkills ? "" : "line-clamp-2"}`}
                            >
                                React, Next.js, TypeScript, Tailwind CSS, Figma, Vercel, Neon, PostgreSQL, AWS Cognito, Stripe Twilio API, Git, GitHub, Responsive Design, UI/UX Design, Figma
                            </p>
                            {canExpandSkills && (
                                <button
                                    type="button"
                                    onClick={() => setExpandedSkills((prev) => !prev)}
                                    className={`${afacad.className} mb-4 ml-5 text-xs font-semibold text-[#495D57] hover:underline md:ml-9 lg:ml-12 xl:ml-16`}
                                >
                                    {expandedSkills ? "See less" : "See more"}
                                </button>
                            )}
                        </div>
                        <div className='bg-white border-5 border-[#C9D8C7] rounded-xl mt-2 py-4
                    md:w-4/5 md:mx-auto md:my-7 lg:w-3/5 xl:w-3/5 xl:my-12'>
                            <h3 className='mx-4 font-bold'>Project Files:</h3>
                            <div className='grid grid-cols-1 border-[#6EA9AD] border-2 mx-4 px-3 py-2'>
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
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}