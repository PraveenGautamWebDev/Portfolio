import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">PG</div>

            <div className="right">
                <span className="availability">Available May 2026</span>
                <a href="#" className="connect">
                    Let's Connect ↗
                </a>
            </div>
        </header>
    );
}

export default Header;