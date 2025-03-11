const file=require('fs')
//Blocking operation or sync call
console.log('1');
const result=file.readFileSync('./contacts.txt','utf-8')
console.log(result);
console.log('2');

//output:-
/* 1
Anmol Srivastava: 11111111
Alok Singh: 22222222
2 */


//Non blocking operation or Aysnc call
console.log('1');
file.readFile('./contacts.txt','utf-8',(err,result)=>{
    console.log(result); 
})
console.log('2');

//output:-

/* 1
2
Anmol Srivastava: 11111111
Alok Singh: 22222222 */