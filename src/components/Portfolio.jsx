import "./Portfolio.css";

// ✅ IMPORT IMAGES
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
    {
        title: "Mood",
        image: project1,
    },
    {
        title: "Bunero",
        image: project2,
    },
    {
        title: "Creative",
        image: project3,
    },
];

function Portfolio() {
    return (
        <section className="portfolio">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="card"
                    style={{ top: `${index * 80}px` }}
                >
                    <img src={project.image} alt={project.title} />
                    <h2>{project.title}</h2>
                </div>
            ))}
        </section>
    );
}

export default Portfolio;