import { FormikProvider, useFormik } from "formik";
import * as yup from 'yup';

function MyProduct(){
    // function validateProduct(product){ //for validation using Formik code start
    //     const errors = {};
    //     if(!product.Id){ // empty
    //         errors.Id = 'Empty Product Id Is Not Allowed';
    //     }
    //     else if(!/^[A-Z]{3,3}[0-9]{3,3}$/.test(product.Id)){
    //         errors.Id='Product Id Format is Invalid';
    //     }

    //     if(!product.Name){
    //         errors.Name = 'Empty Product Name Is Not Allowed';
    //     }
    //     else if(product.Name.length > 30){
    //         errors.Name = 'Product Name Size Should Not Be Greater Than 30';
    //     }

    //     if(!product.Description){
    //             errors.Description = 'Empty Product Description Is Not Allowed';
    //         }
    //     else if(product.Description.length > 50){
    //         errors.Description = 'Product Description Size Should Not Be Greater Than 30';
    //     }

    //     if(!product.Price){
    //         errors.Price = 'Empty Product Price Is Not Allowed';
    //     }
    //     else if(product.Price <=0){
    //         errors.Price = 'Product Price Should Not Be Non Zero and Non Negative';
    //     }
        
    //     return errors;
    // }  // using Formik code end
    const formik = useFormik({
        initialValues:{
            Id:'',
            Name:'',
            Description:'',
            Price:''
        },
        // validate:validateProduct, //For Submit Using Formik
        // onSubmit:productdata=>{ alert(JSON.stringify(productdata));
        //     console.log(productdata);
        // } // Formik code end
        validationSchema:yup.object({  //Validation Using Yup code start
            Id:yup.string()
            .min(6)
            .max(6)
            .required('Product Id Should Not Be Empty')
            .matches(/^[0-9]{6}$/,'Product Id Should Be 6 Digits'),
            Name:yup.string()
            .min(8,'Product Name Should Not Be Less Than 8 Letters')
            .max(30,'Name Should Not Be Greater Than 30 Letters')
            .required('Empty Product Name Not Allowed'),
            Description:yup.string()
            .min(15,'Description Should Not Be Less Than 30 Letters')
            .max(60,'Description Should Not Be Greater Than 60 Letters')
            .required('Empty Description Not Allowed'),
            Price:yup.number().min(1).required('Empty Price Is Not Allowed')
        }),
        onSubmit:productdata=>{ alert(JSON.stringify(productdata));
            console.log(productdata);
        } //Upto submit Using Yup code end 
       });
    return(
        <div>
            <form onSubmit={formik.handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Enter Product Id</td>
                            <td>
                                <input type="text"
                                       id="Id"
                                       name="Id"
                                       value={formik.values.Id}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       />
                            </td>
                            <td>
                                {
                                    formik.touched.Id && formik.errors.Id
                                    ?<span style={{color:'red'}}>{formik.errors.Id}</span>
                                    :null
                                }
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Product Name
                            </td>
                            <td>
                                <input type="text"
                                       id="Name"
                                       name="Name"
                                       value={formik.values.Name}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       />
                            </td>
                            <td>
                                {
                                    formik.touched.Name && formik.errors.Name
                                    ?<span style={{color:'red'}}>{formik.errors.Name}</span>
                                    :null
                                }
                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Description
                            </td>
                            <td>
                                <input type="text"
                                       id="Description"
                                       name="Description"
                                       value={formik.values.Description}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       />
                            </td>
                            <td>
                                {
                                    formik.touched.Description && formik.errors.Description
                                    ?<span style={{color:'red'}}>{formik.errors.Description}</span>
                                    :null

                                }
                                
                            </td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>
                                <input type="text"
                                        id="Price"
                                        name="Price"
                                        value={formik.values.Price}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        />
                            </td>
                            <td>
                                {
                                    formik.touched.Price && formik.errors.Price
                                    ?<span style={{color:'red'}}>{formik.errors.Price}</span>
                                    :null
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button"
                                       value="Clear"/>
                            </td>
                            <td>
                                <input type="submit"
                                       value="Save Product"
                                       />
                            </td>
                        </tr>
                    </tbody>
                </table>
        </form>
        </div>
    );
}
export default MyProduct;
