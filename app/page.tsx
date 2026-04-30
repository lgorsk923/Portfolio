import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col flex-1 h-screen bg-[url('/home-background.jpg')] bg-cover bg-center bg-no-repeat">
      <main className="flex flex-col flex-1 justify-center sm:justify-start">
        <div>
          <div className="flex flex-row items-stretch gap-0 py-3">
            <Image
              src="/Profile_Image.png"
              alt="Picture of the author"
              width={150}
              height={100}
              loading="eager"
              className="h-[125px] w-[125px] shrink-0"
            />
            <h1 className="flex h-[125px] min-w-0 items-center bg-cyan-50 px-4 py-3 text-4xl font-semibold text-violet-900 dark:text-zinc-50 sm:text-6xl">
              Laura Gaffigan
            </h1>
          </div>
        </div>
        <div className="px-4 [word-spacing:-0.3em]">
          <p className='max-w-md text-2xl leading-8 text-black dark:text-zinc-400'>
            Private Voice Instructor          </p>
          <p className="max-w-md text-2xl leading-8 text-black dark:text-zinc-400">
            Web & App. Developer
          </p>
        </div>
      </main>
    </div>
  );
}
