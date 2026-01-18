import { motion } from 'framer-motion';
import { siteContent } from '../data/siteContent';
import { projects } from '../data/projects';
import SystemScrollCanvas from '../components/SystemScrollCanvas';
import SystemTextOverlays from '../components/SystemTextOverlays';
import FocusGrid from '../components/FocusGrid';
import Profile from '../components/Profile';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div className="bg-[#D0CCC9] min-h-screen text-neutral-800 selection:bg-cyan-200 selection:text-neutral-900">
            <Navbar />

            {/* Hero Section - Overlaying the start of the scroll canvas essentially */}
            <section className="h-screen flex flex-col justify-center items-center relative z-10 pointer-events-none bg-[#BEC3BD]">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-6xl md:text-9xl font-bold tracking-tighter text-neutral-900 text-center"
                >
                    {siteContent.brand}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-6 font-mono text-cyan-700 text-sm tracking-widest uppercase"
                >
                    Scroll to Initialize System
                </motion.p>
            </section>

            {/* Main Scroll System */}
            <div className="relative z-0">
                <SystemScrollCanvas />
                <SystemTextOverlays />
            </div>

            {/* Content Sections */}
            <div className="relative z-10 bg-[#D0CCC9]">
                <FocusGrid />

                {/* Selected Projects */}
                <section id="selected-works" className="py-24 px-6 border-t border-neutral-400">
                    <div className="max-w-7xl mx-auto">
                        <h3 className="text-cyan-700 font-mono text-sm tracking-widest uppercase mb-12">
                            Selected Works
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Dynamic Project Cards */}
                            {projects.map((project, index) => (
                                <a key={project.id} href={`/projects/${project.id}`} className="block group">
                                    <div className="bg-[#D0CCC9] border border-neutral-400 p-8 h-full transition-all duration-500 hover:border-neutral-300 flex flex-col relative overflow-hidden group">

                                        {/* Background Image Layer */}
                                        {project.imageUrl && (
                                            <div className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                                                <img
                                                    src={project.imageUrl}
                                                    alt=""
                                                    className="w-full h-full object-cover filter grayscale contrast-125"
                                                />
                                            </div>
                                        )}

                                        {/* Content Layer */}
                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="flex justify-between items-start mb-6">
                                                <span className="font-mono text-xs text-neutral-500">0{index + 1} // PROJECT</span>
                                                <span className="bg-neutral-200/50 px-2 py-1 text-xs font-mono text-cyan-700 rounded text-right max-w-[50%] truncate">
                                                    {project.status.split(' / ')[0]}
                                                </span>
                                            </div>
                                            <h4 className="text-3xl font-light text-neutral-900 mb-4 group-hover:underline decoration-1 underline-offset-4 decoration-neutral-400">
                                                {project.title}
                                            </h4>
                                            <p className="text-neutral-700 font-light leading-relaxed mb-8 flex-grow">
                                                {project.summary.length > 140 ? project.summary.substring(0, 140) + '...' : project.summary}
                                            </p>
                                            <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest group-hover:text-cyan-700 transition-colors mt-auto">
                                                View Case Study →
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <Profile />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}
