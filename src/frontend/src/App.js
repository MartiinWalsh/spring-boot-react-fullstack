import {useEffect, useState} from "react";
import {getAllStudents} from "./client";

import './App.css';


function App() {
    const [students, setStudents] = useState([]);

    const fetchStudents = () =>
        getAllStudents()
            .then(response => response.data)
            .then(student_data => {
                console.log(student_data)
                setStudents(student_data)
            });

    useEffect(() => {
        console.log("component is mounted");
        fetchStudents();
    }, []);

    if (students.length <= 0) {
        return 'No data';
    } else {
        return students.map((student, index) => {
            return <p key={index}>{student.id} {student.name}</p>
        })
    }
}

export default App;
