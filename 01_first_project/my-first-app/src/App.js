import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Footer />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

function Header() {
    return (
        <div>
            <h1>header</h1>
            <ul>
                <li><a href='#'>Главная</a></li>
                <li><a href='#'>Заказ</a></li>
                <li><a href='#'>Аккаунт</a></li>
                <li><a href='#'>Настройки</a></li>
            </ul>
        </div>
    )
}

function Main() {
    return (
        <div>
            <h1>Main</h1>
            <img src={logo}></img>
        </div>
    )
}

function Footer() {
    return (
        <div>
            <h1>footer</h1>
            <ul className='App-ul'>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}


export default App;
