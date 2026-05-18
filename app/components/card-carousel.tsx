"use client";

import { ItemCardProps } from "@/lib/AppDevExperince";
import { ItemCard } from "./portfolio-item-card";
import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";

interface CarouselProps {
    items: ItemCardProps[];
    className?: string;
}
export default function CardCarousel({ items, className }: CarouselProps) {
    const [isLarge, setIsLarge] = useState(false);

    useEffect(() => {
        const mdMq = window.matchMedia("(min-width: 768px)");

        const onMdChange = (e: MediaQueryListEvent) => setIsLarge(e.matches);

        setIsLarge(mdMq.matches);

        if (mdMq.addEventListener) mdMq.addEventListener("change", onMdChange);
        else mdMq.addListener(onMdChange);

        return () => {
            if (mdMq.removeEventListener) mdMq.removeEventListener("change", onMdChange);
            else mdMq.removeListener(onMdChange);
        };
    }, []);

    const showArrows = !(isLarge && items.length <= 3);

    return (
        <div className={`w-full pt-1 ${className ?? ""}`}>
            <div className="relative mx-auto w-full max-w-5xl px-2 md:w-6/7 md:px-0">
                <Carousel
                    className="mx-auto w-full"
                    opts={{ align: "center", loop: items.length > 1, containScroll: false }}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        })
                    ]}>
                    <CarouselContent className='-ml-0 md:-ml-6 lg:-ml-4'>
                        {items.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className='flex basis-[275px] shrink-0 justify-center pl-0 md:basis-1/3 md:pl-6 lg:pl-4'>
                                <ItemCard
                                    title={item.title}
                                    description={item.description}
                                    imageSrc={item.imageSrc}
                                    link={item.link}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {showArrows && (
                        <>
                            <CarouselPrevious className="left-1 md:-left-9" />
                            <CarouselNext className="right-1 md:-right-9" />
                        </>
                    )}
                </Carousel>
            </div>
        </div>
    )
}