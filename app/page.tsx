"use client";

import Image from "next/image";
import { afacad } from "./fonts";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function RoleDescription({ title, description, className }: { title: string; description: string; className?: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [shouldShowToggle, setShouldShowToggle] = useState(false);
  const measureRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (!measureRef.current) return;

      const measureEl = measureRef.current;
      const lineHeight = Number.parseFloat(getComputedStyle(measureEl).lineHeight) || 20;
      const threeLineHeight = lineHeight * 3;
      const fullHeight = measureEl.getBoundingClientRect().height;

      setShouldShowToggle(fullHeight > threeLineHeight + 1);
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(checkOverflow);
    if (measureRef.current) {
      resizeObserver.observe(measureRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [description]);

  return (
    <div className={`mt-3 mb-5 bg-[#C9D8C7] mx-2 px-2 w-15/17 ${isExpanded ? "h-auto" : "h-32"} flex flex-col ${className}`}>
      <h1 className='text-base font-bold pt-2'>{title}</h1>
      <p ref={measureRef} className='text-sm leading-5 absolute invisible pointer-events-none -z-10'>
        {description}
      </p>
      <div>
        <p className={`text-sm leading-5 ${isExpanded ? "pb-1" : "max-h-[3.75rem] overflow-hidden"}`}>
          {description}
        </p>
      </div>
      {shouldShowToggle ? (
        <button
          type='button'
          onClick={() => setIsExpanded((prev) => !prev)}
          className='self-start text-left text-[#736D6D] text-sm font-semibold underline cursor-pointer pb-3 mt-1 leading-none'
        >
          {isExpanded ? "See less" : "See more"}
        </button>
      ) : null}
    </div>
  );
}

export default function Page() {
  return (
    <div className='pt-2 px-3 bg-white grid grid-cols-7 gap-1'>
      <div className="col-span-full grid grid-cols-3 gap-3">
        <Link href='/pages/app-dev' className="text-center py-2 [word-spacing:-0.3em]">
          App Dev
        </Link>
        <Link href='/pages/private-voice' className="text-center  py-2">
          Performance
        </Link>
        <Link href='/pages/gaffigan-voice-studio' className="text-center py-2">
          Education
        </Link>

      </div>
      <div className="col-span-3">
        <Image
          src='/Profile_Image.png'
          alt='Profile Image'
          width={500}
          height={500}
        />

      </div>
      <div className='col-span-4 ps-2 pe-1 content-center bg-[#6EA9AD] text-[#F5F5F5]'>
        <h1 className='underline '>Contact Information</h1>
        <p className="text-sm pt-2">Email: laura@gaffigan.net</p>
        <p className="text-sm pt-1">Phone: (224) 735-0532</p>
      </div>

      <div className={`${afacad.className} col-span-full bg-[#F5F5F5] border-t-5 border-l-5 border-r-5 border-[#C9D8C7]`} >
        <RoleDescription
          title='Full-Stack Developer'
          description='Laura has been working as a front and backend developer for the past four years, specializing in building scalable responsive web applications that utilize RESTful APIs and communicate effectively with databases.' />
        <RoleDescription
          title='Musician'
          description='Appearing in productions and concerts for the last 2 decades, Laura loves to perform. She has performed vocally on her local community theater stage as well as in the Super Bowl Halftime Show'
          className='justify-self-end' />
        <RoleDescription
          title='Vocal Coach'
          description='Laura has been coaching vocalists for the past decade, helping them improve their technique and performance skills.'
        />
      </div>
    </div>
  );
}
