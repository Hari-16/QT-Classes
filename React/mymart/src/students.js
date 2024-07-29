import Student from "./student";
var sts = [
    {Id:"9001", StudentName:"Hari", CourseName:"React", Address:"Hyd"},
    {Id:"9002", StudentName:"Krishna", CourseName:"React", Address:"Hyd"},
    {Id:"9003", StudentName:"John", CourseName:"React", Address:"Hyd"},
    {Id:"9004", StudentName:"Miller", CourseName:"React", Address:"Hyd"},
    {Id:"9005", StudentName:"Ben", CourseName:"Angular", Address:"Hyd"}
  ]
  

// sts.map((s)=><Student Id={s.Id} StudentName={s.StudentName} CourseName={s.CourseName} Address={s.Address} />);


function Students(){
    return(
        <>
         <div>
        <h3 className="headcolor">Student Data</h3>
        <table>
        <tbody>
          <tr><th>Id</th><th>Name</th><th>Course</th><th>Address</th></tr>
          {sts.map((s)=><Student key={s.Id} Id={s.Id} StudentName={s.StudentName} CourseName={s.CourseName} Address={s.Address} />)}   
             
        </tbody>
        </table>
      </div>  
        </>
    )
}

export default Students;