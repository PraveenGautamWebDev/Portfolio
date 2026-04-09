import "./Awards.css";

const awards = [
    { year: "2024", org: "Awards", title: "Twice Employee of the month" },
    { year: "2023", org: "Certificate", title: "Best Full Stack Developer" },
    { year: "2025", org: "Award by Council of Architecture India", title: "Creative Freelancer" },
    { year: "2022", org: "WWDC Nominee", title: "Best Coder" },
];

const education = [
    { year: "2017", org: "CBSE Delhi", title: "Schooling" },
    { year: "2018", org: "Diploma From NSIC Okhla - Delhi", title: "Website designing and development" },
    { year: "2020", org: "Delhi University", title: "Bachelor of Computer Applications" },
    { year: "2023", org: "IGNOU", title: "Master of Computer Applications" },
];

function Awards() {
    return (
        <section className="awards-section">
            <div className="awards-container">

                {/* LEFT */}
                <div className="column">
                    <h2>Awards</h2>
                    {awards.map((item, i) => (
                        <div key={i} className="row">
                            <span>{item.year}</span>
                            <span>{item.org}</span>
                            <span>{item.title}</span>

                            <div className="arrow">
                                <span>↗</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT */}
                <div className="column">
                    <h2>Educational</h2>
                    {education.map((item, i) => (
                        <div key={i} className="row">
                            <span>{item.year}</span>
                            <span>{item.org}</span>
                            <span>{item.title}</span>

                            <div className="arrow">
                                <span>↗</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Awards;