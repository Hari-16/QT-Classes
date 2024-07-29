import { useEffect, useState } from "react";
function UpdateEmp()
{
    const [Id,setId] = useState('');
    const [FirstName,setFirstName] = useState('');
    const [LastName,setLastName] = useState('');
    const [Salary,setSalary] = useState('');
    const [Gender,setGender] = useState('');
    const [City,setCity] = useState('');

    
    const [message,setMessage] = useState('');
    
    function UpdateEmplyee()
    {
       setMessage('');
       let findUrl = 'http://localhost:4000/updateEmployee?Id=' + Id;
       console.log(findUrl);
       let newemp = {}
       newemp.Id = Id;
       newemp.FirstName = FirstName;
       newemp.LastName = LastName;
       newemp.Gender = Gender;
       newemp.Salary = Salary;
       newemp.City = City;
       console.log(newemp);
       var findResult = fetch(findUrl,{
                                method:"PUT",
                                headers:{"Content-Type":"application/json"},
                                body:JSON.stringify(newemp)
                             });
        findResult.then((res)=>{
            if(res.ok)
            {
                if(res.status == 200)
                {
                    console.log(res);
                    setMessage('Employee Data Updated Successfully');
                    //return res.json();
                }
                else if(res.status == 400)
                {
                    setMessage('Bad Request - Update Is Not Allowed');
                }
                else if(res.status == 204)
                {
                    setMessage('No Employee Found With The Given Id');
                }
                else 
                {
                    setMessage('Employee Update Failed');
                }
            }
            else
            {
                setMessage('Employee Update Failed');
            }
        })
        

        findResult.catch((err)=>{
            setMessage(err.message);
        })
    }
    return(
        <div>
            <h1>Employees Data From Local MongoDB</h1>
            
            <table>
            <tbody>
            <tr>
                    <th>Id</th>
                    <td>
                        <input type="text" 
                                id="Id"
                                name="Id"
                                value={Id}
                                onChange={(eventifo)=>{
                                setId(eventifo.target.value);
                        }}/>
                    </td>
            </tr>
            <tr>
                    <th>FirstName</th>
                    <td>
                        <input type="text"
                               id="FirstName"
                               name="FirstName"
                               value={FirstName}
                               onChange={(eventinfo)=>{
                                setFirstName(eventinfo.target.value);
                               }}/>
                    </td>
            </tr>
            <tr>
                <th>LastName</th>
                <td>
                    <input type="text"
                           id="LastName"
                           name="LastName"
                           value={LastName}
                           onChange={(eventifo)=>{
                            setLastName(eventifo.target.value);
                           }}/>
                </td>
            </tr>
            <tr>
                <th>Salary</th>
                <td>
                <input type="text"
                           id="Salary"
                           name="Salary"
                           value={Salary}
                           onChange={(eventifo)=>{
                            setSalary(eventifo.target.value);
                           }}/>      
                </td>
            </tr>
            <tr>
                <th>Gender</th>
                <td>
                <input type="text"
                           id="Gender"
                           name="Gender"
                           value={Gender}
                           onChange={(eventifo)=>{
                            setGender(eventifo.target.value);
                           }}/>   
                </td>
            </tr>
            <tr>
                <th>City</th>
                <td>
                <input type="text"
                           id="City"
                           name="City"
                           value={City}
                           onChange={(eventifo)=>{
                            setCity(eventifo.target.value);
                           }}/> 
                </td>
            </tr>
            <tr>
                <td>
                    <input type="button"
                        value="Clear"
                        />
                </td>               
                <td>
                        <input type="button"
                            value="Update Employee"
                            onClick={UpdateEmplyee}/>
                </td>
            </tr>
             <tr>
                <td>
                {message.length>0?message:null}
                </td>
             </tr>
            </tbody>
            </table>
    </div>
    );
}
export default UpdateEmp;