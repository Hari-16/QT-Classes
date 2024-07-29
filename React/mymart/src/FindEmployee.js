import { useEffect, useState } from "react";
function FindEmployee()
{
    const [Id,setId] = useState('');
    const [employees,setEmployees] = useState([]);
    const [message,setMessage] = useState('');
    var empData ='';

    function FindEmplyee()
    {
       setMessage('');
       setEmployees([]);
       let findUrl = 'http://localhost:4000/getEmployeeById?Id='+ Id
       console.log(findUrl);
       var findResult = fetch(findUrl,{
                                method:"GET"
                             });
        findResult.then((res)=>{
            if(res.ok)
            {
                if(res.status == 200)
                {
                    console.log(res);
                    return res.json();
                }
                else if(res.status == 204)
                {
                    setMessage('No Employee Found With The Given Id');
                }
            }
            else
            {
                setMessage('No Employee Found With The Given Id');
            }
        })
        .then((result)=>{
            setEmployees(result);
            
        })

        findResult.catch((err)=>{
            setMessage(err.message);
        })
    }
    return(
        <div>
            <h1>Employees Data From Local MongoDB</h1>
            Enter Employee Id
            <input type="text" 
                   id="Id"
                   name="Id"
                   value={Id}
                   onChange={(eventifo)=>{
                        setId(eventifo.target.value);
                   }}/>
            <input type="button"
                   value="Find"
                   onClick={FindEmplyee}/>
                            
            
            <table>
            <tbody>
             <tr>
                <th>Id</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Salary</th>
                <th>Gender</th>
                <th>City</th>
            </tr>
                    {message.length>0?message:employees.map((e)=>
                            <tr key={e.Id}>
                                <td>{e.Id}</td>
                                <td>{e.FirstName}</td>
                                <td>{e.LastName}</td>
                                <td>{e.Salary}</td>
                                <td>{e.Gender}</td>
                                <td>{e.City}</td>
                            </tr>)}
            </tbody>
            </table>
            
            
        </div>
    );
}
export default FindEmployee;