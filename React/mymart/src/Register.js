import { useState } from "react";

export  default function Register(){
    const [FirstName,setFirstName]   = useState('');
    const [LastName,setLastName] = useState('');
    const [Address,setAddress] = useState('');
    const [EMail,setEMail] = useState('');
    const [MobileNumber,setMobileNumber] = useState('');
    const [DateOfBirth,setDateOfBirth] = useState('');
    const [Age,setAge] = useState('');
    const [ImagePath,setImagePath] = useState('');
    const [Photo,setPhoto] = useState('');
    const [UserId,setUserId] = useState('');
    const [Password,setPassword] = useState('');

    // var imageUrl = URL.createObjectURL(ImagePath);
    const onChangeFirstNameHandler=(eventinfo)=>{
        console.log(eventinfo.target.value);
        setFirstName(eventinfo.target.value);
    }
    const onChangeLastNameHandler=(eventinfo)=>{
        console.log(eventinfo.target.value);
        setLastName(eventinfo.target.value);
    }
    const onChangeAddressHandler=(eventinfo)=>{
        console.log(eventinfo.target.value);
        setAddress(eventinfo.target.value);
    }
    const onChangeEMailHandler=(eventinfo)=>{
        console.log(eventinfo.target.value);
        setEMail(eventinfo.target.value);
    }
    const onChangeMobileNumberHandler=(eventinfo)=>{
        console.log(eventinfo.target.value);
        setMobileNumber(eventinfo.target.value);
    }
    const onChangeDateOfBirthHandler=(eventinfo)=>{
        console.log(eventinfo.target.value);
        setDateOfBirth(eventinfo.target.value);
    }
    const onChangeAgeHandler=(eventinfo)=>{
        console.log(eventinfo.target.value);
        setAge(eventinfo.target.value);
    }
    const onChangePhotoHandler=(eventinfo)=>{
        console.log(eventinfo.target.value);
        setPhoto(eventinfo.target.value);
        setImagePath(URL.createObjectURL(eventinfo.target.files[0]));
    }
    const onChangeUserIdHandler=(eventinfo)=>{
        console.log(eventinfo.target.value);
        setUserId(eventinfo.target.value);
    }
    const onChangePasswordHandler=(eventinfo)=>{
        console.log(eventinfo.target.value);
        setPassword(eventinfo.target.value);
    }
    const onSubmitRegisterHandler=(eventinfo)=>{
        eventinfo.preventDefault();
        console.log('from submit event handler');
        // setImagePath(URL.createObjectURL(eventinfo.target.Photo.files[0]));
        const user = {};
        user.FirstName = FirstName;
        user.LastName = LastName;
        user.Address = Address;
        user.Age = Age;
        user.DateOfBirth = DateOfBirth;
        user.EMail = EMail;
        user.MobileNumber = MobileNumber;
        user.Password = Password;
        user.UserId = UserId;
        user.Photo = Photo;
        console.log(user);
        console.log(JSON.stringify(user));
    }
    return(
        <div>
            <h1>Register Form</h1>
            <form method="post" onSubmit={onSubmitRegisterHandler}>
            <table>
                <tbody>
                    <tr>
                        <td>Enter First Name</td>
                        <td>
                            <input type="text"
                                   id="FristName"
                                   name="FirstName"
                                   value={FirstName}
                                   onChange={onChangeFirstNameHandler}
                                   required/>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter Last Name</td>
                        <td>
                            <input type="text"
                                   id="LastName"
                                   name="LastName"
                                   value={LastName}
                                   onChange={onChangeLastNameHandler}
                                   required/>
                        </td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>
                            <input type="text"
                                   id="Address"
                                   name="Address"
                                   value={Address}
                                   onChange={onChangeAddressHandler}
                                   required/>
                        </td>
                    </tr>
                    <tr>
                        <td>E-Mail</td>
                        <td>
                            <input type="email"
                                   id="EMail"
                                   name="EMail"
                                   value={EMail}
                                   onChange={onChangeEMailHandler}
                                   required/>
                        </td>
                    </tr>
                    <tr>
                        <td>Mobile Number</td>
                        <td>
                            <input type="tel"
                                   id="MobileNumber"
                                   name="MobileNumber"
                                   value={MobileNumber}
                                   onChange={onChangeMobileNumberHandler}
                                   required/>
                        </td>
                    </tr>
                    <tr>
                        <td>Date Of Birth</td>
                        <td>
                            <input type="date"
                                   id="DateOfBirth"
                                   name="DateOfBirth"
                                   value={DateOfBirth}
                                   onChange={onChangeDateOfBirthHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>
                            <input type="range"
                                   id="Age"
                                   name="Age"
                                   min="22"
                                   max="30"
                                   value={Age}
                                   onChange={onChangeAgeHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Photo</td>
                        <td>
                            <img id="UserPhoto"
                                  name="UserPhoto"
                                  alt="UserPhoto"
                                  src={ImagePath}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Select Photo</td>
                        <td>
                            <input type="file"
                                   id="Photo"
                                   name="Photo"
                                   onChange={onChangePhotoHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <td>User Id</td>
                        <td>
                            <input type="text"
                                   id="UserId"
                                   name="UserId"
                                   value={UserId}
                                   onChange={onChangeUserIdHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type="password"
                                   id="Password"
                                   name="Password"
                                   value={Password}
                                   onChange={onChangePasswordHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="button"
                                   value="Clear"/>
                        </td>
                        <td>
                            <input type="submit"
                                   value="Register"/>
                        </td>
                    </tr> 
                </tbody>
            </table>
            </form>
        </div>
    );
}
