let num = document.getElementById("num");
let sub = document.getElementById("sub") 




sub.addEventListener("click",()=>{
    let number = parseInt(num.value)
    var sum=0;
    for(i=1;i<=number;i++){
        sum+=i;
    }
    total.innerHTML=`Sum of the Numbers: ${sum}`

    let price = parseInt(num.value)*270;
    ticket.innerHTML=`Your Total Tickets: ${number} & Your Bill Amount: ${price}`

    
    
    
    var num1=0;
    var num2 = 1;
    var pro = 0;
    result.innerHTML=`Your Fibonacci Number Series is: `
    // document.write('hello')
    for(i=1;i<=number;i++){
        result.append(`${num1}, `);
        pro = num1+num2 //1 2 3 5 8 13 21
        num1=num2; //1 1 2 3 5 8
        num2=pro; //1 2 3 5 8 13
        // document.write('<br>' + num1)
        // document.getElementById('result').innerHTML=num1;
        // result.innerHTML=`Your Fibonacci Number Series is:`
        // result.innerHTML=`${num1} ${num1}`;
        // result.innerHTML=`Your Fibonacci Number Series is: ${pro}`;
        // next = n1+n2;
        // n1=n2;
        // n2=next
        // fib+=i;
    }
    // result.innerHTML=`Your Fibonacci Number Series is: ${num1}`;

})