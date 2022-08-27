import {getAllStudents} from "./client";

import './App.css';


function App() {
    getAllStudents().then(response => response.data).then(console.log);
    return "";
}

export default App;
