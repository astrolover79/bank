const express=require("express");
const mysql=require("mysql");
const app=express();
const cors=require("cors");
const PORT= 3001;

app.use(cors());
app.use(express.json())

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bank"
});

app.post('/transaction',(req,res)=>{
    const sender = req.body.sender;
    const receiver= req.body.receiver;
    const balance= req.body.balance;
    if(balance>0){
        con.query("INSERT INTO Transfers(Sender, Receiver, Amount) VALUES (?,?,?)",
        [sender,receiver,balance],(err,result)=>{
            if(err){
                console.log(err)
            }
            else{
                res.send("Values inserted!")
            }
        }
        )
    }
});

app.get('/customers',(req,res)=>{
    con.query("SELECT * FROM Customers",(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
});

app.put('/update',(req,res)=>{
    const receiver=req.body.receiver;
    const balance=req.body.balance;
    con.query("UPDATE Customers SET Balance=? WHERE Name=?",
    [balance,receiver],
    (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    }
    )
});

app.listen(process.env.PORT || PORT,()=>{
    console.log('Server running on port ${PORT}');
});
