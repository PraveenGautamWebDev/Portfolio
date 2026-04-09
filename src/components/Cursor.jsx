import { useEffect, useState, useRef } from "react";
import "./Cursor.css";

function Cursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [active, setActive] = useState(false);

    const timeoutRef = useRef(null); // 👈 ADD THIS

    useEffect(() => {
        const move = (e) => {
            setPos({ x: e.clientX, y: e.clientY });

            const el = document.elementFromPoint(e.clientX, e.clientY);

            if (el && el.closest("a")) {
                // ✅ instantly activate
                clearTimeout(timeoutRef.current);
                setActive(true);
            } else {
                // 🔥 delay deactivation (prevents flicker)
                timeoutRef.current = setTimeout(() => {
                    setActive(false);
                }, 80); // 👈 adjust (60–100ms best)
            }
        };

        window.addEventListener("mousemove", move);

        return () => {
            window.removeEventListener("mousemove", move);
            clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <div
            className={`cursor ${active ? "active" : ""}`}
            style={{
                left: pos.x,
                top: pos.y,
            }}
        />
    );
}

export default Cursor;