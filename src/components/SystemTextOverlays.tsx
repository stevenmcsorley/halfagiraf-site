import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteContent } from '../data/siteContent';

export default function SystemTextOverlays() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between h-full">
            {siteContent.focusAreas.map((area, index) => (
                <SectionOverlay
                    key={area.title}
                    area={area}
                    index={index}
                    total={siteContent.focusAreas.length}
                    progress={scrollYProgress}
                />
            ))}
        </div>
    );
}

function SectionOverlay({ area, index, total, progress }: any) {
    const isLast = index === total - 1;

    // Aggressive compression: Text sequence completes by 75% of scroll
    // This guarantees frames (which run to 100%) are still moving
    // We start immediately at 0.0
    const rangeStart = 0.0;
    const rangeEnd = 0.75;
    const totalRange = rangeEnd - rangeStart;
    const step = totalRange / total;

    // Center of this section's visibility
    const center = rangeStart + (index + 0.5) * step;

    // Start fading in
    const start = center;

    // Hold time
    // Base multiplier
    let durationMult = 0.85;

    // Specific tweaks based on user feedback:
    // "3 is a little too soon disappearing" -> Boost index 2
    // Also boosting index 3 (last one) to ensure it holds long enough
    if (index === 2 || index === 3) durationMult = 1.1;

    const end = center + step * durationMult;

    // For the last item (Section 4), we want it to hold but definitely fade out.
    // Previous calc pushed it > 1.0, so it never faded.
    // We cap the fade-out start to ensure it has time to disappear.
    let opacityEnd = end;

    if (isLast) {
        // Force it to start fading out before the absolute end of scroll
        // User request: "fade out as we scroll down away"
        // Interpretation: Keep it visible until the very end (1.0), then it leaves via natural scroll
        opacityEnd = 1.0;
    }

    const opacity = useTransform(
        progress,
        [start - 0.1, start, opacityEnd, opacityEnd + 0.1],
        [0, 1, 1, 0]
    );

    // Update Y to also "hold" in the center while fully opaque
    // This creates the "stationary position" effect the user likely wants
    // Moves in (50->0), Holds (0->0), Moves out (0->-50)
    // For the last item, we align the exit movement with the opacity fade out cap
    const yEnd = isLast ? opacityEnd : end;

    const y = useTransform(
        progress,
        [start - 0.1, start, yEnd, yEnd + 0.1],
        [50, 0, 0, -50]
    );

    return (
        <div className="h-screen sticky top-0 flex items-center justify-center pointer-events-none">
            <motion.div
                style={{ opacity, y }}
                className="max-w-2xl px-8 py-12 text-center bg-[#D0CCC9]/80 backdrop-blur-md border border-neutral-900/5 shadow-2xl rounded-sm"
            >
                <div className="overflow-hidden mb-2">
                    <h2 className="text-4xl md:text-5xl font-mono tracking-tight text-neutral-900 mb-4 drop-shadow-sm">
                        <span className="text-cyan-700">0{index + 1} //</span> {area.title}
                    </h2>
                </div>
                <p className="text-lg md:text-xl text-neutral-700 font-light leading-relaxed drop-shadow-sm">
                    {area.description}
                </p>
            </motion.div>
        </div>
    );
}
