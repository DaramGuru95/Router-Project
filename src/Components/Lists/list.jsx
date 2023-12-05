import './lists.css';

function Lists() {

    let languages = ["HTML", "CSS", "JavaScript", "React JS", "BootStrap", "Material UI", "Node JS", "SQL"]
    const studentDetails = [
        {
            id: 1,
            name: "Daram",
            collegeName: "KSRM College of Engineering",
            email: "daram@gmail.com"
        },

        {
            id: 2,
            name: "Daram Guru",
            collegeName: "KSRM College of Engineering",
            email: "daramguru@gmail.com"
        },

        {
            id: 3,
            name: "Daram Malliswari",
            collegeName: "KLM College of Engineering",
            email: "daramml@gmail.com"
        }
    ]
    return (
        <div>
            <h1>Lists and Keys</h1>
            {languages.map(elemant => {
                return (
                    <ul className="languages" >
                        <li>{elemant}</li>
                    </ul>
                )
            })}

            {studentDetails.map(eachStudent => {
                return (
                    <ul className="studentDetails">
                        <li key={eachStudent.id}>{eachStudent.name}</li>
                        <li key={eachStudent.id}>{eachStudent.collegeName}</li>
                        <li key={eachStudent.id}>{eachStudent.email}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default Lists;