import { useEffect, useRef } from "react";
import "./Skills.css";

const skills = ["Web", "Designer", "Frontend", "Creative", "Developer"];

function Skills() {
    const itemsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            itemsRef.current.forEach((el, index) => {
                const rect = el.getBoundingClientRect();
                const center = window.innerHeight / 2;

                const distance = Math.abs(center - rect.top);

                // Blur + opacity effect
                const blur = Math.min(distance / 100, 10);
                const opacity = Math.max(1 - distance / 300, 0);

                el.style.filter = `blur(${blur}px)`;
                el.style.opacity = opacity;
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="skills-section">
            {skills.map((skill, i) => (
                <h1
                    key={i}
                    ref={(el) => (itemsRef.current[i] = el)}
                    className="skill-text"
                >
                    {skill}
                </h1>
            ))}
        </section>
    );
}

export default Skills;