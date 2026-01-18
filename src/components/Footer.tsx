import { siteContent } from "../data/siteContent";

export default function Footer() {
    return (
        <footer className="w-full bg-[#D0CCC9] text-neutral-600 py-12 px-6 border-t border-neutral-400">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="font-mono text-xs">
                    {siteContent.footer.copyright}
                </div>
                <div className="text-sm font-light">
                    <a href="#" className="hover:text-cyan-700 transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}
