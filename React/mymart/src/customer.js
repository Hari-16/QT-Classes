function Customer()
{
    function AddHandler()
    {
        console.log('from add button');
    }
    function ClearHandler()
    {
        console.log('from clear button')
    }
    function IdChangeHandler(eventinfo)
    {
            console.log('from IdChangeHandler');
            //console.log(eventinfo);
            console.log(eventinfo.target.id);
            console.log(eventinfo.target.name);
            console.log(eventinfo.target.value);
    }
    function NameChangeHandler(eventinfo)
    {
            console.log('from NameChangeHandler');
            console.log(eventinfo.target.id);
            console.log(eventinfo.target.name);
            console.log(eventinfo.target.value);
    }
    function EMailChangeHandler(eventinfo)
    {
            console.log('from EMailChangeHandler');
            console.log(eventinfo.target.id);
            console.log(eventinfo.target.name);
            console.log(eventinfo.target.value);
    }
    function MobileChangeHandler(eventinfo)
    {
            console.log('from MobileChangeHandler');
            console.log(eventinfo.target.id);
            console.log(eventinfo.target.name);
            console.log(eventinfo.target.value);
    }
    function onChangeHandler(eventinfo)
    {
        if(eventinfo.target.name=='CustomerId')
             console.log('From CustomerId' + eventinfo.target.value);
        else if(eventinfo.target.name=='CustomerName')
              console.log('From CustomerName' + eventinfo.target.value);
        else if(eventinfo.target.name=='EMail')
             console.log('From Email' + eventinfo.target.value);
        else if(eventinfo.target.name=='Mobile')
              console.log('From Mobile' + eventinfo.target.value);
    }
    return(
        <div>
        <table>
            <tbody>
                <tr>
                    <th>Customer Id</th>
                    <td>
                        <input type="text"
                               id="CustomerId"
                               name="CustomerId"
                               
                               onChange={onChangeHandler}/>
                    </td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>
                        <input type="text"
                               id="CustomerName"
                               name="CustomerName"
                               onChange={onChangeHandler}/>
                    </td>
                </tr>
                <tr>
                    <th>E-Mail</th>
                    <td>
                        <input type="text"
                               id="EMail"
                               name="EMail"
                               onChange={onChangeHandler}/>
                    </td>
                </tr>
                <tr>
                    <th>Mobile</th>
                    <td>
                        <input type="text"
                               id="Mobile"
                               name="Mobile"
                               onChange={onChangeHandler}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="button" 
                               value="Clear"
                               onClick={ClearHandler}/>
                    </td>
                    <td>
                        <input type="button" 
                               value="Add" 
                               onClick={AddHandler}/>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    );
}
export default Customer;
