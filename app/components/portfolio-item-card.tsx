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
            <Card className="relative mx-auto w-6/7 max-w-sm pt-0 mt-4 pb-0">
                <div className="absolute inset-0 z-30 aspect-video" />
                <img
                    src={imageSrc}
                    alt={title}
                    className="relative z-20 aspect-video w-full object-cover dark:brightness-40"
                />
                <CardHeader>
                    <CardAction>
                    </CardAction>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className={`${expanded ? "line-clamp-none" : "line-clamp-4"} [word-spacing:-0.35em]`} ref={descriptionRef}>
                        {description}
                    </CardDescription>
                    {canExpand && (
                        <Button
                            variant='ghost'
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                setExpanded((prev) => !prev)
                            }}
                            className="m-0 p-0 items-start col-span-2 w-fit text-xs font-semibold text-[#495D57] hover:underline"
                        >
                            {expanded ? "Show less" : "See more"}
                        </Button>
                    )}
                </CardHeader>
            </Card>
        </Link>
    )
}
