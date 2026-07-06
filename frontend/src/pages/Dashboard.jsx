import '../styles/Dashboard.css';

function Dashboard() {
    return(
    <div className="dashboard">
        <div className="dashboard-header">
            <h1>Welcome to Skillforge AI</h1>
            <p>Your personalized AI-powered student skill development portal.</p>
        </div>
        <div className="dashboard-cards">
            <div className='dashoad card'>
                <h3>Total Skills</h3>
                <P>12</P>
            </div>
            <div className='dashboard-card'>
                <h3>Completed Courses</h3>
                <p>5</p>
            </div>
        <div className='dashboard-card'>
            <h3>Current XP</h3>
            <p>1240</p>
        </div>
        
        <div className='dashboard-card'>
            <h3>Badges Earned</h3>
            <p>8</p>
        </div>
  </div>

    
    
  <div className='dashboard-section'>
        <h2>Recommended Skills</h2>
        <div className='recommendation-list'>
            <div className='recommendation-card'>React DEvelopment</div>
            <div className='recommendation-card'>Dsa Mastery</div>
            <div className='recommendation-card'>UI/UX Fundamentals</div>
            </div>
        </div>
    </div>
);
} 
export default Dashboard;