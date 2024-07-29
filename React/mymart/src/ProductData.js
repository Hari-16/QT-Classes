import { useEffect, useState} from "react";
function ProductData(){
    const [products,setProducts] = useState([]);
  function GetProducts(){
     var req = fetch('https://fakestoreapi.com/products',{
        method:'GET'
      });
      req.then((res)=>{
        //console.log(res);
        //console.log(res.ok);
        //console.log(res.status);
        //console.log(res.json());
        if(res.ok){
           return res.json()
        }
      }).then((data)=>{
        console.log(data);
        setProducts(data);
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
return(
    <div>
      <h1>Products Data</h1>
      <table>
        <tbody>
          {rowsdata}
        </tbody>
      </table>
    </div>
)
}

export default ProductData;