import { ChevronLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { afacad } from '../app/fonts';
export default function BackButton({ href }: { href: string }) {
    return (
        <Link
            href={href}
            className={`${afacad.className} pb-2 inline-flex items-center gap-1 text-base font-semibold text-[#5c9ca1] transition-colors hover:text-[#3b4d48] hover:underline`}
        >
            <ChevronLeftIcon className='h-4 w-4' aria-hidden='true' />
            Back to App Dev
        </Link>
    )
}