export default function Page() {
    return (
        <div className="flex flex-col flex-1 bg-cyan-50 bg-cover bg-center bg-no-repeat">
            <main className="flex flex-col flex-1 sm:justify-start">
                <div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-[url('/development-background.jpg')] bg-cover bg-center bg-no-repeat opacity-30" />
                        <h1 className="relative flex py-4 min-w-0 items-center px-8 text-4xl font-semibold text-violet-900 dark:text-zinc-50 sm:text-6xl">
                            Call Forward
                        </h1>
                    </div>
                    <div className="px-8 py-4 [word-spacing:-0.15em]">
                        <p className='max-w-md text-md leading-8 text-black dark:text-zinc-400'>
                            An independent Next.js project. Call forward is a responsive scheduling application providing
                            Call forwarding services. It allows users the ability to build an on-call team with a number in
                            a zip code of their choice, and creating a schedule that will automatically forward any calls
                            received at the selected number to the appropriate user.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    )
}