import logo from "./logo.svg";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import SearchBar from "./components/screens/SearchBar";
import NotesListPage from "./components/screens/notes/NotesListPage";
import { BrowserRouter } from "react-router-dom";
import MainRouters from "./routers/MainRouters";

function App() {
  return (
    <BrowserRouter>
      <MainRouters />
    </BrowserRouter>
  );
}

export default App;
