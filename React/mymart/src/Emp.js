import { useEffect, useRef } from "react";

function Emp()
{
    useEffect(()=>{
        alert('i am from useEffect - before the display of component');
        // console.log('i am from useEffect -  before the display component');
        refEmpName.current.focus();
    })
    const refEmpName = useRef();
    function onClickGetDataHandler(){
        console.log(refEmpName.current.value);
    }
    function onClickSetDataHandler(){
        refEmpName.current.value = ' i am from SetData';
    }
    return(
        <div>
            <h5>using useEffect and useRef</h5>
            <table>
                <tbody>
                    <tr>
                        <th>Enter Employee Name</th>
                        <td>
                            <input  type="text"
                                    id="empName"
                                    name="empName"
                                    ref={refEmpName}
                                    />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button id="btnGetData"
                                    name="btnGetData"
                                    value="GetDAta"
                                    onClick={onClickGetDataHandler}
                                >GetData
                            </button>
                        </td>
                        <td>
                            <button id="btnSetData"
                                    name="btnSetData"
                                    value="SetData"
                                    onClick={onClickSetDataHandler}
                                    >SetData
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Emp;
