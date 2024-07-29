function Student(inputdata){
    return(
        <tr>
            <td>{inputdata.Id}</td>
            <td>{inputdata.StudentName}</td>
            <td>{inputdata.CourseName}</td>
            <td>{inputdata.Address}</td>
        </tr>
        
);
}

export default Student;