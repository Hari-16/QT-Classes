import './stumarks.css';
// import './student.css';
function Stumarks(marks){
    return(
        <table className="marksTable">
            <tbody>
            <tr>
                <th>Ui</th>
                <td>{marks.Ui}</td>
                <td>{parseInt(marks.Ui)>=35?'Pass':'Fail'}</td>
            </tr>
            <tr>
                <th>JavaScript</th>
                <td>{marks.JavaScript}</td>
                <td>{parseInt(marks.JavaScript)>=35?'Pass':'Fail'}</td>
            </tr>
            <tr>
                <th>React</th>
                <td>{marks.React}</td>
                <td>{parseInt(marks.React)>=35?'Pass':'Fail'}</td>
            </tr>
            <tr>
                <th>Total</th>
                <td>{parseInt(marks.Ui)+parseInt(marks.JavaScript)+parseInt(marks.React)}</td>
                <td>{parseInt(marks.Ui)>=35 && parseInt(marks.JavaScript)>=35&& parseInt(marks.React)>=35?'Pass':'Fail'}</td>
            </tr>
            </tbody>
        </table>
    )
}
export default Stumarks;