import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div className="App">
        <Header />
        <Sidebar />
        <main className='App_main'>
           <Profile />
        </main>
        
        <Footer />
    </div>
  );
}

export default App;
