import './App.css';
import { browserRouter, Routes, Route, BrowserRouter} from "react-router-dom" //refrencias a rutas
import { Login } from './Componentes/login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element ={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
