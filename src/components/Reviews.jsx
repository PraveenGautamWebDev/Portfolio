import { useState } from "react";
import "./Reviews.css";

const reviews = [
    {
        text: "Praveen is one of the most reliable developers I’ve worked with. He understood our requirements quickly and delivered exactly what we needed — clean, fast, and fully responsive. Communication was smooth throughout the project.",
        author: "– Linda Linares, CEO at Gatherandmuse",
    },
    {
        text: "We hired Praveen to redesign our website, and the results were beyond expectations. He not only improved the design but also optimized performance and user experience. Highly recommended for any serious web project.",
        author: "– Jasmeet, ASP Associates",
    },
    {
        text: "Working with Praveen was a great experience. He handled everything from frontend to backend seamlessly and always came up with practical solutions. The project was delivered on time without any compromises.",
        author: "– Sarah Johnson, Marketing Manager",
    },
    {
        text: "Praveen has a great eye for detail and strong technical skills. He helped us build a scalable website using React and PHP, and the final product was smooth, fast, and easy to manage. Thanks a lot Praveen Gautam",
        author: "– Jasmeet Singh, CEO at Miuex Techologies",
    },
    {
        text: "What stood out about Praveen was his professionalism and problem-solving approach. Even when we had last-minute changes, he handled everything calmly and delivered high-quality work.",
        author: "– Jasmine Kaur, CEO at Prityaarts",
    },
];

function Reviews() {
    const [index, setIndex] = useState(0);

    // show 3 at a time
    const visibleReviews = reviews.slice(index, index + 3);

    const next = () => {
        if (index < reviews.length - 3) {
            setIndex(index + 1);
        }
    };

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    return (
        <section className="reviews-section">
            <div className="reviews-container">

                <h2 className="reviews-title">Reviews</h2>

                <div className="reviews-grid">
                    {visibleReviews.map((item, i) => (
                        <div className="review-card" key={i}>
                            <div className="quote">“</div>
                            <p>{item.text}</p>
                            <span className="author">{item.author}</span>
                        </div>
                    ))}
                </div>

                {/* pagination dots ONLY (like your design) */}
                <div className="pagination">
                    {Array.from({ length: reviews.length - 2 }).map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === index ? "active" : ""}`}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Reviews;