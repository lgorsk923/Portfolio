export default function Page() {
    return (
        <div className="flex flex-col flex-1 h-screen bg-[url('/private-voice-background.jpg')] bg-cover bg-center bg-no-repeat">
            <main className="flex flex-col flex-1 justify-center sm:justify-start">
                <div>
                    <h1 className="flex h-[125px] min-w-0 items-center bg-cyan-50 px-4 py-3 text-4xl font-semibold text-violet-900 dark:text-zinc-50 sm:text-6xl">
                        Private Voice Instruction
                    </h1>
                </div>
                <div className="px-4 [word-spacing:-0.3em]">
                    <p className='max-w-md text-2xl leading-8 text-black dark:text-zinc-400'>
                        I am a private voice instructor with experience in teaching students of all ages and skill levels. I have a strong understanding of vocal technique and pedagogy, and I am passionate about helping my students develop their unique voices and reach their full potential as singers. I offer personalized instruction tailored to each student's goals and needs, and I am committed to creating a supportive and encouraging learning environment where students can thrive and grow as musicians.
                    </p>
                </div>
            </main>
        </div>
    )
}