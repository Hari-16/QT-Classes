// ----------------------------
// 9th May 2024
// ---------------------------
//   execute the same code using Html
// index.html
// -----------------------------
// <!DOCTYPE html>
// <html>
// <head>
//     <meta charset="utf-8" />
//     <title></title>
// </head>
// <body>
//     <script>
//         console.log(this); // Window
//         function f1()
//         {
//             console.log(this);  // Window

//         }
//         f1();
//     </script>
// </body>
// </html>
// -------------------------
// execute the above html file , Press Ctrl+Shift+i - Check in the 'Console' tab for output
// here this out is 'Window' object.
// -------------------------------
// Check the following code
var product1 ={
    Id:1001, 
    Name:'Apple',
    Quantity:'1Kg',
    Price:199

};

function ShowProduct(p)
{
    console.log(p.Id + ' ' + p.Name + '  ' + p.Quantity + '  ' + p.Price);
}

ShowProduct(product1);

// ---------------------------------------
var product1 ={
    Id:1001, 
    Name:'Apple',
    Quantity:'1Kg',
    Price:199

};

var Services = {
    DisplayProduct:function ShowProduct(p)
    {
        console.log(p.Id + ' ' + p.Name + '  ' + p.Quantity + '  ' + p.Price);
    }
}

Services.DisplayProduct(product1);
// --------------------------------------
// Modify the above code as follows
// Encapsulation: data + functions together as one unit
var product1 ={
    Id:1001, 
    Name:'Apple',
    Quantity:'1Kg',
    Price:199,
    DisplayProduct:function ShowProduct()
    {
        console.log(Id + ' ' + Name + '  ' + Quantity + '  ' + Price);
    }

};

product1.DisplayProduct();
// Note : ReferenceError: Id is not defined
// -------------------------------------------------
// this : this inside the method refers to owner of the method
var product1 ={
    Id:1001, 
    Name:'Apple',
    Quantity:'1Kg',
    Price:199,
    DisplayProduct:function ShowProduct()
    {
        console.log(this); // this inside the method refers to owner of the method
        console.log(this.Id + ' ' + this.Name + '  ' + this.Quantity + '  ' + this.Price);
    }

};

// ---------------------------------------------------------------------------------------
var product1 ={
    Id:1001, 
    Name:'Apple',
    Quantity:'1Kg',
    Price:199,
    DisplayProduct:function ()
    {
        console.log(this); // this inside the method refers to owner of the method
        console.log(this.Id + ' ' + this.Name + '  ' + this.Quantity + '  ' + this.Price);
    }

};
// ------------------------------------------
var product1 ={
    Id:1001, 
    Name:'Apple',
    Quantity:'1Kg',
    Price:199,
    DisplayProduct:()=>
    {
        console.log(this); // this unable to refer product1
        console.log(this.Id + ' ' + this.Name + '  ' + this.Quantity + '  ' + this.Price);
    }

};
