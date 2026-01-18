import { motion } from 'framer-motion';
import { siteContent } from '../data/siteContent';

export default function FocusGrid() {
    return (
        <section className="bg-[#D0CCC9] py-32 px-6 border-t border-neutral-400">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-cyan-700 font-mono text-sm tracking-widest uppercase mb-12">
                    Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-400 border border-neutral-400">
                    {siteContent.focusAreas.map((area, i) => (
                        <motion.div
                            key={area.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#D0CCC9] p-12 hover:bg-neutral-200/50 transition-colors duration-500"
                        >
                            <div className="text-neutral-600 font-mono text-xs mb-4">0{i + 1}</div>
                            <h4 className="text-2xl text-neutral-900 font-light mb-4">{area.title}</h4>
                            <p className="text-neutral-700 leading-relaxed font-light">
                                {area.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
