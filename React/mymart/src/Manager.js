function Manager(){
    const onLocationChangeHandler=(eventinfo)=>{
        console.log(eventinfo.target.name + '      ' + eventinfo.target.value);
    }
    const onChangeStatusHandler=(eventinfo)=>{
        console.log(eventinfo.target.name + '      ' + eventinfo.target.value);
    }
    const clickManagerHandler=(eventinfo)=>{
        console.log(eventinfo.target.name + '      ' + eventinfo.target.value);
        let controlname = eventinfo.target.name;
        if(controlname=='Add')
            console.log('add button clicked by user');                
        else if(controlname=='Clear')
            console.log('clear button clicked by user');
        }
        const onChangeManagerIdHandler=(eventinfo)=>{
            console.log(eventinfo.target.name + '   ' + eventinfo.target.value);
        }
        const onChangeManagerNameHandler=(eventinfo)=>{
            console.log(eventinfo.target.name + '   ' + eventinfo.target.value);
        }
    return(
        <table>
            <tbody>
                <tr>
                    <td>Enter Manager Id</td>
                    <td>
                        <input  type="text"
                                id="ManagerId"
                                name="ManagerId"
                                onChange={onChangeManagerIdHandler}/>
                    </td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>
                        <input  type="text"
                                id="ManagerName"
                                name="ManagerName"
                                onChange={onChangeManagerNameHandler}/>
                    </td>
                </tr>
                <tr>
                    <td>Location</td>
                    <td>
                        <select id="Location"
                                name="Location"
                                onChange={onLocationChangeHandler}>
                                <option value="Select Location">Select Location</option>
                                <option value="Nodia">Nodia</option>
                                <option value="Chennai" selected>Chennai</option>
                                <option value="Pune">Pune</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>
                        <input  type="checkbox"
                                id="status"
                                name="status"
                                value="Married"
                                onChange={onChangeStatusHandler}/>Married
                    </td>
                </tr>
                <tr>
                    <td>
                        <input  type="button" 
                                value="Clear"
                                name="Clear"
                                onClick={clickManagerHandler}/>
                    </td>
                    <td>
                        <input  type="button" 
                               value="Add"
                               name="Add"
                               onClick={clickManagerHandler}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
export default Manager;
