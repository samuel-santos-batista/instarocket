import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import './global.css'
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
