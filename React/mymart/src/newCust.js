import { useState } from "react";

function Cust(){
    const [customerId,setCustomerId] = useState('');
    const [fullName,setFullName] = useState('');
    const [mobile,setMobile] = useState('');
    const [email,setEmail] = useState('');

    function onChangeCustomerIdHandler(inputData){
        console.log('onchangeCustomerId ' + inputData.target.value);
        setCustomerId(inputData.target.value);
        console.log(customerId);
    }
    function onChangeFullNameHandler(inputData){
        console.log('onChangeFullNameId ' + inputData.target.value);
        setFullName(inputData.target.value);
        console.log(mobile);
    }
    function onChangeMobileHandler(inputData){
        console.log('onChangeMobile ' + inputData.target.value);
        setMobile(inputData.target.value);
        console.log(fullName);
    }
    function onChangeEmailHandler(inputData){
        console.log('onChangeEmail ' + inputData.target.value);
        setEmail(inputData.target.value);
        console.log(email);
    }
    function onClickSaveHandler(){
        console.log(customerId + ' ' + fullName + ' ' + email + ' ' + mobile);
    }
    return(
        <div>
            <h3>Enter Customer Data</h3>
            <form>
            <table>
                <tbody>
                    <tr>
                        <th>Enter Customer Id</th>
                        <td>
                            <input type="text"
                                   id="customerId"
                                   name="customerId"
                                   value={customerId}
                                   onChange={onChangeCustomerIdHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Full Name</th>
                        <td>
                            <input type="text"
                                   id="fullName"
                                   name="fullName"
                                   value={fullName}
                                   onChange={onChangeFullNameHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <th>Mobile</th>
                        <td>
                            <input type="text"
                                   id="mobile"
                                   name="mobile"
                                   value={mobile}
                                   onChange={onChangeMobileHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <th>E-Mail</th>
                        <td>
                            <input type="text"
                                   id="email"
                                   name="email" 
                                   value={email}
                                   onChange={onChangeEmailHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button"
                                   value="Reset"/>
                        </td>
                        <td>
                            <input type="button"
                                   value="Save"
                                   onClick={onClickSaveHandler}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            </form>
        </div>
    );
}
export default Cust;
