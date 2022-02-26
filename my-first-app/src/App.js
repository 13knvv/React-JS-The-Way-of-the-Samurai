import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Sidebar />
                <main className='App__main'>
                    <Routes>
                        <Route path='/' element={<Profile store={props.store} />} />
                        <Route path='/profile' element={<Profile store={props.store} />} />
                        <Route path='/messages/*' element={<Dialogs store={props.store} dispatch={props.dispatch} state={props.state}/>} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                    </Routes> 
                </main>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
