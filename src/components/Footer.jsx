import "./Footer.css";
import profile from "../assets/footer.jpg";
import cv from "../assets/cv.pdf"; // ✅ IMPORTANT

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-left">
                <p className="small-title">Praveen Gautam</p>
                <p className="subtitle">Digital designer + Creative Full Stack Developer</p>

                <h1 className="big-text">
                    Let’s <br /> Connect
                </h1>

                <p className="copyright">
                    ©2026 UXUI Developers. All rights reserved.
                </p>
            </div>

            <div className="footer-right">
                <div className="profile-img">
                    <img src={profile} alt="profile" />
                </div>

                <div className="contact">
                    <a href={cv} target="_blank" rel="noopener noreferrer">
                        View CV
                    </a>

                    <p>parveen.webdeveloper@gmail.com</p>

                    <div className="socials">
                        <a href="#">LinkedIn</a>
                        <a href="#">Medium</a>
                        <a href="#">Instagram</a>
                        <a href="#">X</a>
                        <a href="#">Behance</a>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;