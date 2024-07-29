const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const connectionStringUrl = "mongodb://0.0.0.0:27017/";
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


const client = new MongoClient(connectionStringUrl);
const dbName = 'onlinemart';

app.get("/getAllEmployees", async (req, res)=>{ 
   
    try
    {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('employees');

        const findResult = await collection.find({}).toArray();
        res.status(200).send(JSON.stringify(findResult));
        //res.send(findResult).status(200);
    }
    catch(err)
    {
        console.log(err.message);
        res.status(500).send('Internal Server Error : ' + err.message);
    }

    });
//http://localhost:4000/getEmployeeById?Id=1
//http://localhost:4000/getEmployeeById?Id=33&Name=Sara
//http://localhost:4000/getEmployeeById/1
app.get('/getEmployeeById', async (req,res)=>{

    try
    {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('employees');
        //const Id = req.params.Id;
        const Id = req.query.Id;
        const getResult = await collection.find({Id:Id}).toArray();
        if(getResult.length == 1)
        {
            res.status(200).send(JSON.stringify(getResult));
        }
        else if(getResult.length == 0)
        {
            res.status(204).send('With The Given Id No Employee Found ' + Id);
        }
        
    }
    catch(error)
    {
        res.status(500).send('Internal Server Error ' + error.message);
    }

});

app.put('/updateEmployee',async (req,res)=>{

    try
    {
        await  client.connect();
        const db = client.db(dbName);  // select db
        const collection = db.collection('employees'); // select collection
        const qId = req.query.Id;
        const Id = req.body.Id;
        const FirstName = req.body.FirstName;
        const LastName = req.body.LastName;
        const Salary = req.body.Salary;
        const Gender = req.body.Gender;
        const City = req.body.City;
        if(qId == Id)
        {
            const findResult = await collection.find({Id:Id}).toArray();
            console.log(Id + "  " + findResult.length);
            if(findResult.length == 1)
            {
                const updateResult = await collection.updateOne({Id:Id},{$set:{FirstName:FirstName,LastName:LastName,Gender:Gender,City:City,Salary:Salary}});
                if(updateResult.matchedCount == 1 && updateResult.modifiedCount == 1)
                    res.status(200).send('Employee Data Updated Successfully');
                else
                    res.status(400).send('Bad Request Check Data Once' + updateResult);

            }
            else if(findResult.length == 0)
            {
                res.status(204).send('With The Given Id No Employee Found ' + Id);
            }
        }
        else
        {
            res.status(400).send('Bad Request - Please Check Data');
        }

    }
    catch(error)
    {
        res.status(500).send('Internal Server Error ' + error.message);
    }

});

app.delete('/deleteEmployeeById',async (req,res)=>{

    try
    {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('employees');
        const Id = req.query.Id;
        const getResult = await collection.find({Id:Id}).toArray();
        if(getResult.length == 1)
        {
            //res.status(200).send(getResult);
            const delResult =  await collection.deleteOne({Id:Id});
            res.status(200).send(delResult);
        }
        else if(getResult.length == 0)
        {
            res.status(204).send('With The Given Id No Employee Found ' + Id);
        }
        
    }
    catch(error)
    {
        res.status(500).send('Internal Server Error ' + error.message);
    }
});
app.post("/addNewEmployee",async (req,res)=>{
    try
    {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('employees');
        const Id =  req.body.Id;
        const FirstName = req.body.FirstName;
        const LastName = req.body.LastName;
        const Salary = req.body.Salary;
        const Gender = req.body.Gender;
        const City = req.body.City;
        let employee = {};
        employee.Id = Id;
        employee.FirstName = FirstName;
        employee.LastName = LastName;
        employee.Salary = Salary;
        employee.Gender = Gender;
        employee.City = City;
        console.log(employee);
        /*await collection.insertOne(
            {
            "Id":"7",
            "FirstName":"Vignesh",
            "LastName":"Sivan",
            "Salary":"9000",
            "Gender":"Male",
            "City":"Chennai"
            }); */
        await collection.insertOne(employee);
        
        res.status(201).send('New Employee Added Successfully');
    }
    catch(error)
    {
        if (error instanceof MongoServerError) {
            console.log(`Error worth logging: ${error}`); 
            // special case for some reason
            res.status(500).send(error.message);
          }
    }
});




app.listen(4000,()=>{console.log('express server started at port '+4000);})
