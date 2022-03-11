import './App.css'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Sidebar from './Components/Sidebar/Sidebar';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';

function App(props) {
    return (
            <div className="App">
                <Header />
                <Sidebar />
                <main className='App__main'>
                    <Routes>
                        <Route path='/' element={<ProfileContainer />} />
                        <Route path='/profile/' element={<ProfileContainer />} />
                        <Route path='/profile/:userId' element={<ProfileContainer />} />
                        <Route path='/messages/*' element={<DialogsContainer />} />
                        <Route path='/news' element={<News />} />
                        <Route path='/music' element={<Music />} />
                        <Route path='/settings' element={<Settings />} />
                        <Route path='/users' element={<UsersContainer />} />
                    </Routes> 
                </main>
                <Footer />
            </div>
    );
}

export default App;
