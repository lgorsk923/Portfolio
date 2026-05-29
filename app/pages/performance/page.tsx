import { jomolhari, afacad } from "../../fonts";

export default function Page() {
    return (
        <div className="flex flex-col flex-1 bg-[#FFFFFF] bg-cover bg-center bg-no-repeat">
            <main className="flex flex-col flex-1 sm:justify-start">
                <div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[url('/performance-background.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
                        <h1 className={`${jomolhari.className} relative px-8 py-4 text-3xl leading-tight break-words dark:text-zinc-50  md:text-4xl md:py-8 lg:text-6xl`}>
                            Performance
                        </h1>
                    </div>
                </div>
            </main >
        </div >
    )
}