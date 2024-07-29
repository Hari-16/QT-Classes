import { useState } from "react";
import Salary from "./Salary";

function MyEmployee(employeInfo)
{
  
    const [updatedSalary,setUpdatedSalary] =useState(0);
    function getUpdatedSalary(salary)
    {
        setUpdatedSalary(salary);
       
    }
    return(
        <table>
            <tbody>
            <tr>
                <td>Id</td>
                <td>{employeInfo.Id}</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>{employeInfo.Name}</td>
            </tr>
            <tr>
                <td>Location</td>
                <td>{employeInfo.Location}</td>
            </tr>
            <tr>
                <td>Salary</td>
                <td>{employeInfo.Salary}</td>
            </tr>
            <tr>
                <td>Updated Salary</td>
                <td>{updatedSalary}</td>
            </tr>
            <tr>
                <td colSpan={2}>
                <Salary BasicSalary={employeInfo.BasicSalary}
                        HRA={employeInfo.HRA}
                        SpecialAllowance={employeInfo.SpecialAllowance}
                        onSalaryChanged={getUpdatedSalary}/>

                </td>
            </tr>

            </tbody>
        </table>
    )

}
export default MyEmployee;
