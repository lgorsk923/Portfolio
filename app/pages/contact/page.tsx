import ContactForm from "../../components/contact-form";
import ContactCard from "../../components/contact-card";
export default function Page() {
    return (
        <main className=" bg-white md:px-6 md:py-6 ">
            <div className='md:flex flex-1 justify-center rounded-2xl'>
                <div className="hidden md:flex" >
                    <ContactCard />
                </div>
                <section className="px-4 py-3 w-full max-w-xl bg-[#D3D3D3] md:p-8 shadow-sm">
                    <h1 className="text-4xl font-semibold text-[#4B0082]">Contact Laura!</h1>
                    <p className="leading-6 mt-2 md:mt-4 text-lg md:leading-8 text-black/75 pb-4">
                        Reach out for app and web development, or private voice instruction inquiries.
                    </p>
                    <ContactForm />
                    <div className="mt-4 md:hidden" >
                        <ContactCard />
                    </div>
                </section>
            </div>
        </main>
    );
}
