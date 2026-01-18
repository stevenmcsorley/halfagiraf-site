import { Link } from 'react-router-dom';
import { siteContent } from "../data/siteContent";

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center pointer-events-none select-none">
            <Link to="/" className="font-mono text-cyan-400 text-sm tracking-widest uppercase pointer-events-auto hover:opacity-75 transition-opacity">
                {siteContent.brand}
            </Link>
            <div className="hidden md:block font-mono text-neutral-500 text-xs">
                {siteContent.positioning}
            </div>
        </header>
    );
}
