import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { Home } from "./pages/Home";
import { TodoList } from "./pages/TodoList";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/todos' element={<TodoList />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
