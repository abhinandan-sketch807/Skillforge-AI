import './styles/App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="main-layout">
        <Sidebar />

        <div className="page-content">
          <Dashboard />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;