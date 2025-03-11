const User=require('../models/user')

async function handleGetAllUsers(req,res){
    const allDbUsers=await User.find({})
    return res.json(allDbUsers)
}

async function handleGetUserById(req,res){
    const user=await User.findById(req.params.id)
    if(!user) return res.status(404).json({msg:"Not Found"})
    return res.json(user)
}

async function handleUpdateUserById(req,res){
    const update=req.body//consider for lastName
    await User.findByIdAndUpdate(req.params.id,{lastName:"Kumar"})
    return res.json({msg:"Success"}) 
}

async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id)
    return res,json({msg:"Deleted Successfully"})
}

async function handleCreateNewUser(req,res){
    const body=req.body
    if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        return res.status(400).json({msg:"All fields are required!"})
    }
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
    const result=await User.create({
     firstName:body.first_name,
     lastName:body.last_name,
     email:body.email,
     gender:body.email,
     jobTitle:body.job_title
   })
   console.log("result",result);
   
   return res.status(201).json({msg:"Success",id:result._id})
}


module.exports={
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
}
