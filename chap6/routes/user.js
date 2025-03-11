const express=require("express")
const router=express.Router()
const {handleGetAllUsers,handleGetUserById,handleUpdateUserById,handleDeleteUserById,handleCreateNewUser}=require('../controllers/user')

//we see that /api/user is common we can change this  

//fetching complete JSON file
router.get('/',handleGetAllUsers)
//getting only first_name of all users in HTML format
/* router.get('/users',async(req,res)=>{
    const allUser=await User.find({})
    const html=`
    <ul>
        ${allUser.map(user=>`<li>${user.firstName} - ${user.email}</li>`).join('')}
    </ul>`
    res.send(html)
}) */

router.route('/:id') //since the path is common so merge the common route
.get(handleGetUserById
    //async(req,res)=>{ 
    //const id=Number(req.params.id) //remember json always return in string
    //const user=users.find((user)=>user.id===id)}
)
.patch(handleUpdateUserById
    //async(req,res)=>{
    /* const id=Number(req.params.id)
    const updates=req.body
    const user=users.find(user=>user.id===id)
    if(user){
        for(const key in updates){
            if(user.hasOwnProperty(key)){
                user[key]=updates[key]
            }
        }
    }
    file.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"Success"})
    }) */
    //const update=req.body//consider for lastName
    //await User.findByIdAndUpdate(req.params.id,{lastName:"Kumar"})
    //return res.json({msg:"Success"})}
)
.delete(
    handleDeleteUserById
    //async(req,res)=>{
   /* const id=Number(req.params.id)
   const userInd=users.findIndex(user=>user.id===id)
   users.splice(userInd)//used to remove element at ith index
   file.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
    res.json({status:"Deleted Successfully"})
   }) */
    //await User.findByIdAndDelete(req.params.id)
    //return res,json({msg:"Deleted Successfully"})}
    )

//appending data
router.post('/',handleCreateNewUser
    //async(req,res)=>{
/*     const body=req.body
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg:"All fields are required!"})
    } */
    /* users.push({...body,id:users.length+1})
    file.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err)=>{
        if(err){
            return res.json({status:"Error",message:"Failed to save data"})
        }
        return res.status(201).json({
            status:"Success",
            message:"User added successfully",
        })
    }) */
    /* const result=await User.create({
     firstName:body.first_name,
     lastName:body.last_name,
     email:body.email,
     gender:body.email,
     jobTitle:body.job_title
   })
   console.log("result",result);
   
   return res.status(201).json({msg:"Success"})} */

)
module.exports=router