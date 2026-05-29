"use client";

import Image from "next/image";
import { afacad } from "./fonts";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

function RoleDescription({
  title,
  description,
  href,
  className,
  onPanelRef,
}: {
  title: string;
  description: string;
  href?: string;
  className?: string;
  onPanelRef?: (el: HTMLDivElement | null) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const visibleRef = useRef<HTMLParagraphElement>(null);
  const measureRef = useRef<HTMLParagraphElement>(null);
  const descriptionClasses = "text-sm leading-5 lg:text-base lg:leading-6";
  const interactiveClasses = href
    ? "cursor-pointer transition-shadow hover:ring-2 hover:ring-[#6EA9AD] focus-within:ring-2 focus-within:ring-[#6EA9AD]"
    : "";

  useEffect(() => {
    const checkOverflow = () => {
      if (!visibleRef.current || !measureRef.current) return;

      const visibleEl = visibleRef.current;
      const measureEl = measureRef.current;

      measureEl.style.width = `${visibleEl.clientWidth}px`;

      const lineHeight = Number.parseFloat(getComputedStyle(visibleEl).lineHeight) || 20;
      const threeLines = lineHeight * 3;
      const fullHeight = measureEl.scrollHeight;

      const overflow = fullHeight > threeLines + 1;
      setHasOverflow(overflow);

      if (!overflow) {
        setIsExpanded(false);
      }
    };

    checkOverflow();

    const timer = setTimeout(checkOverflow, 0);
    const observer = new ResizeObserver(checkOverflow);

    if (visibleRef.current) {
      observer.observe(visibleRef.current);
    }

    window.addEventListener("resize", checkOverflow);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("resize", checkOverflow);
    };
  }, [description]);

  const cardContent = (
    <div
      ref={onPanelRef}
      className={`relative mt-3 mb-5 pb-2 bg-[#C9D8C7] mx-2 px-2 w-15/17 flex flex-col ${interactiveClasses} ${className}
    md:mx-5 md:w-5/7 md:px-5 md:pt-2 md:rounded-lg
    lg:mx-15 lg:my-10 lg:max-w-4/7 xl:my-6 xl:pb-1`}
    >
      <h1 className='text-base font-bold pt-2
      lg:text-lg'>{title}</h1>
      <p
        ref={measureRef}
        className={`absolute top-0 left-0 invisible pointer-events-none -z-10 ${descriptionClasses}`}
      >
        {description}
      </p>
      <p
        ref={visibleRef}
        className={`${descriptionClasses} ${isExpanded ? "" : "line-clamp-3 min-h-[3.75rem] xl:min-h-[3.25rem]"}`}
      >
        {description}
      </p>
      <div className='h-7 xl:h-6 flex items-start'>
        <button
          type='button'
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            setIsExpanded((prev) => !prev);
          }}
          tabIndex={hasOverflow ? 0 : -1}
          className={`self-start text-left text-[#736D6D] text-sm font-semibold underline cursor-pointer leading-none ${hasOverflow ? "opacity-100" : "pointer-events-none opacity-0"}`}
        >
          {isExpanded ? "See less" : "See more"}
        </button>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}

export default function Page() {
  const rolePanelsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const syncHeights = () => {
      const panels = rolePanelsRef.current.filter((el): el is HTMLDivElement => Boolean(el));
      if (!panels.length) return;

      const isXl = window.matchMedia("(min-width: 1280px)").matches;
      if (!isXl) {
        panels.forEach((panel) => {
          panel.style.minHeight = "";
        });
        return;
      }

      const heights = panels
        .map((el) => {
          const prevMinHeight = el.style.minHeight;
          el.style.minHeight = "";
          const height = el.offsetHeight;
          el.style.minHeight = prevMinHeight;
          return height;
        });

      const tallest = Math.max(...heights);
      const minHeightValue = tallest > 0 ? `${tallest}px` : "";
      panels.forEach((panel) => {
        panel.style.minHeight = minHeightValue;
      });
    };

    syncHeights();
    const timer = window.setTimeout(syncHeights, 0);

    const observer = new ResizeObserver(syncHeights);
    rolePanelsRef.current.forEach((panel) => {
      if (panel) observer.observe(panel);
    });

    window.addEventListener("resize", syncHeights);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("resize", syncHeights);
    };
  }, []);

  return (
    <div className='pt-2 px-3 bg-white grid grid-cols-7 gap-1'>
      <div className='col-span-full'>
        <div className="col-span-full grid grid-cols-3 gap-3 xl:text-xl">
          <Link href='/pages/app-dev' className="text-center py-2 [word-spacing:-0.3em] hover:underline">
            App Dev
          </Link>
          <Link href='/pages/private-voice' className="text-center  py-2 hover:underline ">
            Performance
          </Link>
          <Link href='/pages/gaffigan-voice-studio' className="text-center py-2 hover:underline">
            Coaching
          </Link>

        </div>

      </div>
      <div className='block col-span-full xl:w-6/7 xl:mx-auto xl:mt-1 lg:mb-7 xl:mb-10'>
        {/* picture and contact info */}
        <div className='md:float-left md:w-2/7 md:mr-3 xl:w-1/4'>
          <div className='flex flex-row md:flex-col'>
            <div className='w-2/5 md:w-full shrink-0'>
              <Image
                src='/Profile_Image.png'
                alt='Profile Image'
                width={300}
                height={300}
                className='w-full h-auto '
              />

            </div>
            <div className='flex-1 ps-2 pe-1 content-center bg-[#6EA9AD] text-[#F5F5F5]
          md:px-3 md:pt-2 md:pb-4
          xl:px-6 xl:pt-4 xl:pb-6'>
              <h1 className='underline md:text-lg xl:text-xl'>Contact Information</h1>
              <p className="text-sm pt-2 md:text-base xl:text-lg">Email: laura@gaffigan.net</p>
              <p className="text-sm pt-1 md:text-base xl:text-lg">Phone: (224) 735-0532</p>
            </div>
          </div>
        </div>
        {/*Picture and contact info end */}
        <div className={`${afacad.className} col-span-full bg-[#F5F5F5] border-5 my-2 border-[#C9D8C7]
        md:overflow-hidden md:mt-0 md:py-2`} >
          <RoleDescription
            title='Full-Stack Developer'
            description='Laura has been working as a front and backend developer for the past four years, specializing in building scalable responsive web applications that utilize RESTful APIs and communicate effectively with databases.'
            href='/pages/app-dev'
            onPanelRef={(el) => {
              rolePanelsRef.current[0] = el;
            }}
          />
          <RoleDescription
            title='Musician'
            description='Appearing in productions and concerts for the last 2 decades, Laura loves to perform. She has performed vocally on her local community theater stage as well as in the Super Bowl XLVI Halftime Show.'
            href='/pages/performance'
            className='justify-self-end'
            onPanelRef={(el) => {
              rolePanelsRef.current[1] = el;
            }}
          />
          <RoleDescription
            title='Vocal Coach'
            description='Laura has been coaching vocalists for the past decade, helping them improve their technique and performance skills.'
            href='/pages/gaffigan-voice-studio'
            onPanelRef={(el) => {
              rolePanelsRef.current[2] = el;
            }}
          />
        </div>
      </div>
    </div>
  );
}
