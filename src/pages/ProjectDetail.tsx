import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function ProjectDetail() {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#D0CCC9] flex items-center justify-center text-neutral-900">
                <div className="text-center">
                    <h1 className="text-4xl font-mono mb-4">404 // Project Not Found</h1>
                    <Link to="/" className="text-cyan-700 hover:text-cyan-900 underline">Return to System</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#D0CCC9] text-neutral-800">
            <Navbar />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
            >
                {/* Header */}
                <header className="mb-20 border-b border-neutral-400 pb-12">
                    <Link to="/#selected-works" className="inline-block mb-12 text-xs font-mono text-neutral-500 hover:text-cyan-700 uppercase tracking-widest transition-colors">
                        ← Back to Selected Works
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-neutral-900 mb-6">
                        {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-4 text-sm font-mono text-cyan-700 max-w-2xl leading-relaxed">
                        <span className="bg-neutral-200/50 px-3 py-1 rounded">{project.status}</span>
                        <span className="bg-neutral-200/50 px-3 py-1 rounded">{project.category}</span>
                    </div>
                </header>

                {/* Project Image */}
                {project.imageUrl && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mb-20 rounded-lg overflow-hidden border border-neutral-400 shadow-xl"
                    >
                        <img
                            src={project.imageUrl}
                            alt={`${project.title} Screenshot`}
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                )}

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Summary & Capabilities */}
                    <div className="lg:col-span-8 flex flex-col gap-12">
                        <section>
                            <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">Overview</h2>
                            <p className="text-xl leading-relaxed text-neutral-800 font-light max-w-prose">
                                {project.summary}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">Core Capabilities</h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.capabilities.map((cap, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-700">
                                        <span className="text-cyan-600 mt-1">▹</span>
                                        <span>{cap}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Right Column: Architecture */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 p-6 bg-neutral-200/30 rounded-lg border border-neutral-300/50 backdrop-blur-sm">
                            <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6">Technical Architecture</h2>
                            <ul className="space-y-4">
                                {Object.entries(project.technicalArchitecture).map(([key, value]) => (
                                    <li key={key}>
                                        <span className="block text-xs font-mono text-neutral-400 uppercase mb-1">{key}</span>
                                        <span className="text-neutral-800 font-medium">{value}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-8 border-t border-neutral-300/50">
                                <Link
                                    to="/#selected-works"
                                    className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-900 transition-colors"
                                >
                                    <span>← Back to Selected Works</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Gallery Grid */}
                {project.gallery && project.gallery.length > 0 && (
                    <section className="mt-24 border-t border-neutral-300 pt-12">
                        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-8">Interface Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {project.gallery.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.6 }}
                                    className="rounded-lg overflow-hidden border border-neutral-400 shadow-lg group hover:shadow-2xl transition-shadow duration-300"
                                >
                                    <img
                                        src={img}
                                        alt={`${project.title} Interface ${i + 1}`}
                                        className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </section>
                )}

            </motion.div>

            <Footer />
        </div>
    );
}
