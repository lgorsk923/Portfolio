'use client'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { ItemCardProps } from "@/lib/AppDevExperince";
import { afacad } from "../fonts";



export function ItemCard({ title, description, imageSrc, link }: ItemCardProps) {
    const [expanded, setExpanded] = useState(false);
    const [canExpand, setCanExpand] = useState(false);
    const descriptionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (expanded) return
        const frame = window.requestAnimationFrame(() => {
            const el = descriptionRef.current
            if (!el) return
            setCanExpand(el.scrollHeight > el.clientHeight + 1)
        })
        return () => window.cancelAnimationFrame(frame)
    }, [description, expanded])

    return (
        <Link href={link}>
            <Card className="relative mx-auto w-7/9 max-w-sm pt-0 mt-4 pb-0 border-4 border-[#6EA9AD] bg-[#F5F5F5] gap-y-2 gap-x-0">
                <div className="absolute inset-0 z-30 aspect-video" />
                <img
                    src={imageSrc}
                    alt={title}
                    className="relative z-20 aspect-video w-full object-cover dark:brightness-40"
                />
                <CardHeader className='px-0 gap-0'>
                    <CardAction>
                    </CardAction>
                    <CardTitle className={`${afacad.className} text-lg py-0 px-2`}>{title}</CardTitle>
                    <CardDescription
                        className={`${expanded ? "max-h-none" : "max-h-[4.5rem] overflow-hidden"} px-2 mx-2 pt-1 ${afacad.className} bg-[#C9D8C7] leading-6`}
                        ref={descriptionRef}
                    >
                        {description}
                    </CardDescription>
                    {canExpand && (
                        <div className='bg-[#C9D8C7] mx-2 mb-2 rounded-b-lg'>
                            <Button
                                variant='ghost'
                                onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    setExpanded((prev) => !prev)
                                }}
                                className={`${afacad.className} m-0 h-auto min-h-0 px-2 pb-2 pt-0 items-start col-span-2 w-fit text-xs font-semibold text-[#495D57] hover:underline`}
                            >
                                {expanded ? "Show less" : "See more"}
                            </Button>
                        </div>
                    )}
                </CardHeader>
            </Card>
        </Link>
    )
}
