//Import express module
const express=require('express');
const app=express();

app.use(express.json());//middleware to parse JSON data

//sample user data
let users=[
{
    id:1,name:"alice",email:"sasi@gmail.com"},
    {id:2,name:"rose",email:"kiru@gamil.com"}

];

//GET all users
app.get('/users',(req,res)=>{
    res.json(users);//Fixed from res.join(usres) to res.json(users)
});

//POST - Add a new user
app.post('/users',(req,res)=>{
    const newUser={id: users.length+1, ...req.body};
    users.push(newUser);
    res.status(201).json(newUser);//Added response after adding a
});

//PUT - Update a user
app.put('/users/:id',(req,res)=>{
    const user=users.find(u=>u.id===parseInt(req.params.id));
    if(!user)return res.status(404).json({message:"User not found"});

        user.name=req.body.name || user.name; //fixed incorrect property reference
        user.email=req.body.email || user.email; //fixed incorrect property refernece

        res.json(user); //Fixed from res.join(user) to res.json(user)

});

//DELET - Remove a user
app.delete('/users/:id',(req,res)=>{
    //const userExist= users.some(user =>user.id=== parseInt(req.params)
    //if (!userExists) return res.status(404).json({message:"user"})

    users=users.filter(user=>user.id !== parseInt(req.params.id))
    res.json({message:'User Deleted'});
});
//start the server
app.listen(8000,()=>console.log("Server is running on port 8000"))