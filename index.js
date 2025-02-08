// console.log("welcome node js");
// alert("jdsflahgfslaj");
// document.write("hs,ajhl,kjshd")


// let dis=require('./app')
// console.log(dis(10,20));

// let dis=require('./app')
// console.log(dis.add(10,20));
// console.log(dis.sub(10,20));

                                                                                       
// const fs=require('fs')
// //read file

// fs.readFile('kle.txt',(err,data)=>{
//     if(err)
// {
//     console.error('error reading file',err);
//     return
// }
// console.log('File written successfully!');
// })

// //write
// fs.writeFile('kle.txt','Hello world!',(err)=>{
//     if(err){
//         console.error('err reading file',err);
//         return
//     }
//     console.log('File written successfully!');
// });

// //update--->append
// fs.appendFile('kle.txt','\nAppended text!',(err)=>{
//     if(err){
//         console.error('error appending in file',err);
//         return
//     }
//     console.error('data appended successfully');

// })

// //delet-->unlink
// fs.unlink('kl.txt',(err)=>{

// })
// const path=require('path')
// const file=path.resolve('node','kle.text')
// console.log(file);

let http=require('http') //import http

http.createServer(function(req,res){
   
    if(req.url=='/home')
    {
        res.write('home')
    }
    else if(req.url=='/about')
    {
        res.write('hgfskjhgf;jka;kjhflsa')
    }
    else{
        res.write('undefined')
    }
    res.end()

})
.listen(7000,()=>console.log('server is running in the port'))


