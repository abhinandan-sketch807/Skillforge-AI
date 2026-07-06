import'../styles/Sidebar.css';

function Sidebar () {
    return (
        <aside className="sidebar">
            <h3 className="sidebar-title">Dashboard Menu</h3>

            <ul className="sidebar-menu">
                <li>Home</li>
                <li>Dashboard</li>
                <li>Skills</li>
                <li>Assement</li>
                <li>Roadmap</li>
                <li>Interview</li>
                <li>Achievements</li>
                <li>Profile</li>
                <li>Resume Analysis</li>
            </ul>
        </aside>
    );
}
export default Sidebar;