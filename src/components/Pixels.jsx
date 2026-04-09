import { useEffect, useRef } from "react";
import "./Pixels.css";

function Pixels() {
    const sectionRef = useRef(null);
    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // progress 0 → 1
            let progress = 1 - rect.top / windowHeight;
            progress = Math.max(0, Math.min(progress, 1));

            // 🔥 smooth easing (important)
            const ease = progress * progress * (3 - 2 * progress);

            // 🎯 circle grows properly
            const radius = 8 + ease * 120;

            if (bgRef.current) {
                const mask = `radial-gradient(circle at center, black ${radius}%, transparent ${radius + 0.5}%)`;

                bgRef.current.style.webkitMaskImage = mask;
                bgRef.current.style.maskImage = mask;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="pixels-section">
            <div className="pixels-sticky">

                <div ref={bgRef} className="pixels-bg"></div>

                <div className="pixels-content">
                    <h1>Pixels</h1>
                    <h1>with Purpose</h1>
                    <p>Since 2020</p>
                </div>

            </div>
        </section>
    );
}

export default Pixels;