import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 200;
// Module-level cache to persist across re-renders/unmounts
const cachedImages: HTMLImageElement[] = [];

export default function SystemScrollCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const imagesRef = useRef<HTMLImageElement[]>([]);

    // Preload images
    useEffect(() => {
        let active = true;

        if (cachedImages.length === FRAME_COUNT) {
            // Already cached, use immediately
            imagesRef.current = cachedImages;
            setImagesLoaded(FRAME_COUNT);
            // Don't render here - canvas isn't sized yet
            return;
        }

        const loadImages = async () => {
            const imgs: HTMLImageElement[] = [];
            for (let i = 1; i <= FRAME_COUNT; i++) {
                if (!active) return;

                // Check if we already have this specific frame cached (partial cache scenario)
                if (cachedImages[i - 1]) {
                    imgs.push(cachedImages[i - 1]);
                    continue;
                }

                const img = new Image();
                // Pad with zeros: 001, 002, ...
                const filename = `ezgif-frame-${String(i).padStart(3, '0')}.jpg`;
                img.src = `/frames/system/${filename}`;
                await new Promise((resolve) => {
                    img.onload = resolve;
                    img.onerror = resolve; // Continue even if error
                });

                // Cache it
                cachedImages[i - 1] = img;
                imgs.push(img);

                if (active) {
                    setImagesLoaded(imgs.length);
                }
            }
            imagesRef.current = imgs;
        };
        loadImages();
        return () => { active = false; };
    }, []);

    const renderFrame = (index: number, imgs: HTMLImageElement[]) => {
        const canvas = canvasRef.current;
        if (!canvas || !imgs[index]) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = imgs[index];

        // Cover fit
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Trigger initial render when images are ready
    useEffect(() => {
        if (imagesLoaded === FRAME_COUNT && canvasRef.current) {
            // Size canvas first
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
            // Then render the current scroll position
            const handleScroll = () => {
                if (!containerRef.current) return;
                const windowHeight = window.innerHeight;
                const scrollY = window.scrollY;
                const elementTop = containerRef.current.offsetTop;
                const elementHeight = containerRef.current.offsetHeight;
                let progress = (scrollY - elementTop) / (elementHeight - windowHeight);
                progress = Math.max(0, progress);

                let frameIndex;
                if (progress <= 1) {
                    frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(progress * FRAME_COUNT));
                } else {
                    const overscroll = (progress - 1);
                    const reverseProgress = Math.max(0, 1.0 - overscroll);
                    frameIndex = Math.floor(reverseProgress * (FRAME_COUNT - 1));
                }
                renderFrame(frameIndex, imagesRef.current);
            };
            handleScroll(); // Immediate render
        }
    }, [imagesLoaded]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            // const { top, height } = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress based on how far we've scrolled into the container
            // If top is 0, we are at start. if top is -height + windowHeight, we are at end.
            // Actually, we want the sticky behavior.
            // This handling depends on the parent layout. 
            // If this component IS the sticky container inside a tall wrapper.
            // Let's assume the parent passes the scroll progress or strictly controls layout.
            // But the requirements say "A wrapper section with height: 500vh".

            // Let's rely on standard scroll calculation relative to document or use a library?
            // "Calculate scroll progress (0 -> 1)" 
            // Since it's sticky, we can check the parent's position relative to viewport?

            // Let's do:
            // Calculate progress based on how far we've scrolled into the container
            // If top is 0, we are at start. if top is -height + windowHeight, we are at end.
            const scrollY = window.scrollY;
            const elementTop = containerRef.current.offsetTop;
            const elementHeight = containerRef.current.offsetHeight;

            let progress = (scrollY - elementTop) / (elementHeight - windowHeight);

            // Allow progress to go beyond 1.0 to detect the "unpinning" phase
            progress = Math.max(0, progress); // We only clamp 0, not 1

            let frameIndex;

            if (progress <= 1) {
                // Standard Forward Phase (0% -> 100% of container)
                frameIndex = Math.min(
                    FRAME_COUNT - 1,
                    Math.floor(progress * FRAME_COUNT)
                );
            } else {
                // Exit/Reverse Phase (Unpinning)
                // As the container moves up off-screen, we reverse the animation.
                // The canvas is visible for exactly 1 windowHeight of scroll after 1.0
                // So we map progress 1.0 -> 1.25 (approx) to Frame 199 -> 0

                // Exit/Reverse Phase (Unpinning)
                // User requirement: "same pace as the first sequence", do not need to fulfill 200->0.
                // We just reverse at the natural scroll rate.

                const overscroll = (progress - 1);
                // No multiplier. We just subtract the accrued overscroll from the max.
                // If overscroll reaches ~0.25 (1 viewport height), we reverse roughly 25% of the frames.

                // Map 1.0 -> 0.75 (approx) -> Frame 199 -> ~150
                const reverseProgress = Math.max(0, 1.0 - overscroll);

                frameIndex = Math.floor(reverseProgress * (FRAME_COUNT - 1));
            }

            renderFrame(frameIndex, imagesRef.current);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Immediate re-render attempt (optional/simple)
            }
        });

        // Initial size
        if (canvasRef.current) {
            canvasRef.current.width = window.innerWidth;
            canvasRef.current.height = window.innerHeight;
            // Force initial render check
            handleScroll();
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', () => { });
        };
    }, []);

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-[#D0CCC9]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 block w-full h-full object-cover"
                />
                {/* Loading indicator if needed, or hidden */}
                {imagesLoaded < FRAME_COUNT && (
                    <div className="absolute top-4 right-4 text-xs text-white/50 font-mono">
                        System Load: {Math.round((imagesLoaded / FRAME_COUNT) * 100)}%
                    </div>
                )}
            </div>
        </div>
    );
}
