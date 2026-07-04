import ContactForm from "../../components/contact-form";
import ContactCard from "../../components/contact-card";
export default function Page() {
    return (
        <main className=" bg-white px-6 py-6 ">
            <div className='flex flex-1 justify-center rounded-2xl'>
                <ContactCard />
                <section className="w-full max-w-xl bg-[#D3D3D3] p-8 shadow-sm">
                    <h1 className="text-4xl font-semibold text-[#4B0082]">Contact Laura!</h1>
                    <p className="mt-4 text-lg leading-8 text-black/75 pb-4">
                        Reach out for app development, web development, or private voice instruction inquiries.
                    </p>
                    <ContactForm />
                </section>
            </div>
        </main>
    );
}
