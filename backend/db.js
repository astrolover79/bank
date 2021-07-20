const mysql=require('mysql');
const express=require('express');
const app=express();

//CREATE A CONNECTION
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'bank'
});

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Connected!");
});

//CREATE A DATABASE
app.get('/createdb',(req,res)=>{
    let sql="CREATE DATABASE bank";
    db.query(sql,(err,result)=>{
        if(err) throw err;
    });
    res.send('Database created');
})

//CREATE CUSTOMERS TABLE
app.get('/createcustomerstable',(req,res)=>{
    let sql="CREATE TABLE Customers(id INTEGER(10), Name TEXT(50), Email VARCHAR(50), Balance INTEGER(30))";
    db.query(sql, (err,result)=>{
    if(err) throw err;
    res.send("Table created!");
    });
});

//INSERT DATA INTO CUSTOMERS TABLE
app.get('/createcustomers',(req,res)=>{
    let sql= "INSERT INTO Customers(id,Name,Email,Balance) VALUES ?";
    let values=[
        [1,'Rahul','rahul123@tsf.com',50000],
        [2,'Neha','nehakul@tsf.com',28945],
        [3,'Girish','giriNess@tsf.com',4567],
        [4,'Shabana','shaban5461@tsf.com',1000],
        [5,'Dinesh','dinDHALJAYE@tsf.com',5677],
        [6,'Puja','poo1789@tsf.com',34587],
        [7,'John','johnrowling@tsf.com',1569],
        [8,'Mona','mona5678@tsf.com',45000],
        [9,'Rishabh','rish987@tsf.com',5005],
        [10,'Jessica','jessica6543@tsf.com',90023]
    ];
    db.query(sql,[values],(err,result)=>{
        if(err) throw err;
        res.send("No. of rows inserted"+ result.affectedRows);
    });
})

//CREATE TRANSFERS TABLE
app.get('/transfers',(req,res)=>{
    let sql="CREATE TABLE Transfers(sender TEXT(50), receiver TEXT(50), Amount INTEGER(100))";
    db.query(sql, (err,result)=>{
    if(err) throw err;
    res.send("Table created!");
});
})

app.listen(3000,()=>{
    console.log("Server is running!");
});