const file=require('fs')
const os=require('os')

//SyncWrite call....  sync will always return something
//const res=file.writeFileSync('./test.txt','Hello World')

//AsyncWrite call... this will not return anything rther it will have callback function which will either error or result
//file.writeFile('./test.txt',"Hello world Async",(err)=>{})

//SyncRead call...
/* const res=file.readFileSync('./contacts.txt','utf-8')
console.log(res);
 */

//AsyncRead call..
/* file.readFile('./contacts.txt','utf-8',(err,result)=>{
    if(err){
        console.log('Error',err);
    } else{
        console.log(result);
        
    }
}) */

//syncAppend call...
//file.appendFileSync('./test.txt',`\nHey There ${Date.now()}`)

//copying file..
//file.cpSync('./test.txt','./copy.txt')

//deleting file
//file.unlinkSync('./copy.txt')

console.log(os.cpus().length);
