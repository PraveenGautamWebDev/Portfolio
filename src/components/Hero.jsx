import "./Hero.css";
import heroImg from "../assets/hero.png";

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-text">
                <h1>
                    Praveen <br /> Gautam
                </h1>
            </div>

            <div className="hero-image">
                <img src={heroImg} alt="hero" />
            </div>
        </section>
    );
}

export default Hero;