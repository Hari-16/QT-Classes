let Name = document.getElementById("name");
let rollno = document.getElementById("rollno");
let tel = document.getElementById("tel");
let hin = document.getElementById("hin");
let eng = document.getElementById("eng");
let mat = document.getElementById("mat");
let sci = document.getElementById("sci");
let soc = document.getElementById("soc");
let result = document.getElementById("result");

function add(){
    event.preventDefault()
    sum = 0;
    roll =0;
    student = Name.value;
    if(tel.value>=35 && hin.value>=35 && eng.value>=35 && mat.value>=35 && sci.value>=35 && soc.value>= 35)
    {          
        roll = roll +parseInt(rollno.value);
        sum = sum + parseInt(tel.value) + parseInt(hin.value) + parseInt(eng.value) + parseInt(mat.value) + parseInt(sci.value) + parseInt(soc.value);
        result.innerHTML = `${student} Bearing Roll Number: ${roll} has Passed with ${sum} out of 600`;
    }
    else
    {
        roll = roll +parseInt(rollno.value);
        result.innerHTML = `${student} Bearing Roll Number: ${roll} has Failed`;
    }

}
