import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function ProdData(){
  const [products,setProducts] = useState([]);
  const [errmessge,setErrorMessage] = useState('');
  function GetProducts(){
    axios.get('https://fakestoreapi.com/products')
    .then((res)=>{
      setProducts(res.data);
      //console.log(res.data);
    })
    .catch((errobj)=>{
      console.log(errobj.message);
      setErrorMessage(errobj.message);
    })
 
  }

  useEffect(()=>{
     GetProducts();   
  },[])
  
  var rowsdata = products.map((p)=> <tr>
    <td> {p.id}</td>
    <td>{ p.title }</td>
    <td>{ p.price}</td>
    <td>
      <img src={p.image} alt={p.title} width={100} height={100} />
    </td>
  </tr>);
  
  return (
    <div>
      <h1>Products Data</h1>
      <table>
        <tbody>
          {errmessge.length>0?errmessge:rowsdata}
        </tbody>
      </table>
    </div>
  )
   
}
export default ProdData;
