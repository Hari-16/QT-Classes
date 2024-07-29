import { useEffect, useState } from "react";
function ShowEmployees()
{
    const [employees,setEmployees] = useState([]);
    const [message,setMessage] = useState('');
    useEffect(()=>{
     let result =   fetch('http://localhost:4000/getAllEmployees',
                    {
                        method:'GET'
                    });
        result.then((res)=>{
            if(res.ok)
            {
               return res.json();
            }
            else
            {
                setMessage('No Employee Data');
            }
           
        })
        .then((result)=>{
            console.log(result);
            setEmployees(result);
        })
        result.catch((err)=>{
            setMessage(err.message);
            console.log(err)
        })

    },[])

    var empRows  = employees.map((e)=>
        <tr>
            <td>{e.Id}</td>
            <td>{e.FirstName}</td>
            <td>{e.LastName}</td>
            <td>{e.Salary}</td>
            <td>{e.Gender}</td>
            <td>{e.City}</td>
        </tr>)

    var empData = <table>
    <tbody>
        <tr>
            <th>Id</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Salary</th>
            <th>Gender</th>
            <th>City</th>
        </tr>
            {empRows}
    </tbody>
</table>;
    return(
        <div>
            <h1>Employees Data From Local MongoDB</h1>
            {
                message.length>0?message:empData
            }
            
        </div>
    );
}
export default ShowEmployees;
