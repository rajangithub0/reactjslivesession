import { useState } from "react";

function SortingData() {
    const [sortBy, setSortBy] = useState("name")
    const students = [
        {
            id: 1,
            name: "rohit",
            grade: 78
        },
        {
            id: 2,
            name: "rajan",
            grade: 98
        },
        {
            id: 3,
            name: "ricky",
            grade: 87
        }
    ]

    const sortedStudent = [...students].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name)
        } else if (sortBy === "grade") {
            return a.grade - b.grade
        }
        return 0;

    })
    return (
        <div>
            <h1 className="mt-3 p-3 text-center text-bg-success">student list</h1>
            <button className="btn btn-primary w-50" onClick={() => setSortBy('name')}>sort by name</button>
            <button className="btn btn-primary w-50" onClick={() => setSortBy('grade')}>sort by grade</button>
            <ul className="list-group">
                {
                    sortedStudent.map(user => (
                        <li key={user.id}>{user.name}{user.grade}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default SortingData;