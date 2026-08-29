import Image from 'next/image';
export default function ContentCard() {
    return (
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
            <div className='flex-1 ps-2 pe-1 content-center bg-primary text-background
                  md:px-3 md:pt-2 md:pb-4
                  xl:px-6 xl:pt-4 xl:pb-6'>
                <h1 className='underline md:text-lg xl:text-xl'>Contact Information</h1>
                <p className="text-sm pt-2 md:text-base xl:text-lg">Email: laura@gaffigan.net</p>
                <p className="text-sm pt-1 md:text-base xl:text-lg">Phone: (224) 735-0532</p>
            </div>
        </div>
    )
}