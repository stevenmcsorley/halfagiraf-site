export default function Contact() {
    return (
        <section className="bg-[#D0CCC9] py-32 px-6 border-t border-neutral-400">
            <div className="max-w-xl mx-auto">
                <h3 className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-12">
                    Inquiries
                </h3>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="block text-sm font-mono text-neutral-500">Identity</label>
                        <input
                            type="text"
                            className="w-full bg-transparent border-b border-neutral-700 py-4 text-white focus:border-cyan-400 focus:outline-none transition-colors"
                            placeholder="Name or Organization"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-mono text-neutral-500">Signal</label>
                        <input
                            type="email"
                            className="w-full bg-transparent border-b border-neutral-500 py-4 text-neutral-900 focus:border-cyan-600 focus:outline-none transition-colors"
                            placeholder="Email Address"
                        />
                    </div>
                    <div className="pt-8">
                        <button className="text-neutral-900 hover:text-cyan-600 transition-colors font-mono uppercase tracking-widest text-sm">
                            [ Transmit ]
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
