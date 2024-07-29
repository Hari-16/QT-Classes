import { useState } from "react";

function FoodItem()
{
    const [foodItemName,setFoodItemName] = useState('');
    const [foodItemImagePath,setFoodItemImagePath] = useState('');
    function onChangeFoodItemNameHandler(eventInfo)
    {
        console.log(eventInfo.target.value);
       setFoodItemName(eventInfo.target.value);
    }
    function onChangeFoodItemImageHandler(eventInfo)
    {
            //eventInfo.target.value
         setFoodItemImagePath(URL.createObjectURL(eventInfo.target.files[0]));
    }
    return(
    <div>
        <h4>Version 2</h4>
        <form>
        <table>
            <tbody>
                <tr>
                    <th>Enter Name</th>
                    <td>
                        <input type="text"
                               id="foodItemName"
                               name="foodItemName"
                               value={foodItemName}
                               onChange={onChangeFoodItemNameHandler}
                               />
                    </td>
                </tr>
                <tr>
                    <td>Image</td>
                    <td>
                        <img src={foodItemImagePath}
                             alt="Food Item Image"
                             />
                    </td>
                </tr>
                <tr>
                    <th>Select Image</th>
                    <td>
                        <input type="file"
                                id="FoodItemImage"
                                name="FoodItemImage"
                                onChange={onChangeFoodItemImageHandler}
                                />
                    </td>
                </tr>
                <tr>
                   <td>
                        <input type="button"
                               value="Reset"/>
                   </td>
                   <td>
                        <input type="submit"
                               value="Add"
                               />
                   </td>
                </tr>
            </tbody>
        </table>
        </form>
    </div>
    );
}
export default FoodItem;
