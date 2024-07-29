import Stumarks from "./Stumarks";
function Stu(studentDetails){
    return(
        <div>
            <h1>Student Details</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>{studentDetails.Name}</td>
                    </tr>
                    <tr>
                        <th>Standard</th>
                        <td>{studentDetails.Standard}</td>
                    </tr>
                    <tr>
                        <td colspan={2}><Stumarks   Ui={studentDetails.Ui}
                                                    JavaScript={studentDetails.JavaScript}
                                                    React={studentDetails.React}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Stu;