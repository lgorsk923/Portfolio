export default function Footer() {
    return (
        <footer className="bg-[#412C95] text-[#F5F5F5] py-4 px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Laura Gaffigan. All rights reserved.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="https://www.linkedin.com/in/laura-gaffigan/" target="_blank" rel="noopener noreferrer" className="hover:text-[#6EA9AD] transition-colors duration-300">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}