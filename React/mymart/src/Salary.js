import { useRef } from "react";

function Salary(salaryInfo)
{
    const refBasicSalary = useRef('');
    const refHRA = useRef('');
    const refSpecialAllowance = useRef('');
    function updateSalary()
    {
        var totalSalary = parseInt(refBasicSalary.current.value) + 
        parseInt(refHRA.current.value) + parseInt(refSpecialAllowance.current.value);
        salaryInfo.onSalaryChanged(totalSalary); // getUpdatedSalary(totalSalary)
    }
    return(
        <table>
            <tbody>
                <tr>
                    <td>Basic Salary</td>
                    <td>
                        <input type="text"
                               defaultValue={salaryInfo.BasicSalary}
                               ref={refBasicSalary}
                               
                        />
                    </td>
                </tr>
                <tr>
                    <td>HRA</td>
                    <td>
                        <input type="text"
                               defaultValue={salaryInfo.HRA}
                               ref={refHRA}
                               />
                    </td>
                </tr>
                <tr>
                    <td>
                         Special Allowance
                    </td>
                    <td>
                        <input type="text"
                               defaultValue={salaryInfo.SpecialAllowance}
                               ref={refSpecialAllowance}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="button"
                               value="Clear" />
                    </td>
                    <td>
                        <input type="button"
                               value="Update Salary"
                               onClick={updateSalary}/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
export default Salary;
