import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main/Main'
import Sidebar from './Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <Header />
        <Sidebar />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
