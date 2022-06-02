import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login/Login";
import Inicio from "./components/Inicio/Inicio";
import Cuerpo from "./components/Cuerpo/Cuerpo";
import Pie from "./components/Pie/Pie";
function App() {
  return (
    <>
      <link rel="stylesheet" href="https://dert98.github.io/Porfolio/global.css"></link>
      
      <Cuerpo />
      <Login />
      <Inicio />
      <Pie name="Vane"/>

    </>
  );
}

export default App;
