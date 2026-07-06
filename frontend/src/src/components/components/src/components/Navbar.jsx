import '../style/Navbar.css';

function Navbar() {
    return (
        <nav className="Navbar">
            <div className="navbar-left">
                <h2 className= "logo">Skillforge AI</h2>
                </div>
                
                <div className="navbar-right">
                    <input
                    type="text"
                    placeholder="Search skills,courses..."
                    className="search-box"
                    />
                    <button className="portfili-btn">My Profile</button>
                    </div>
                </nav>
                
            
        
    );
}
export default Navbar
