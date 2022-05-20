const db=require("../models/index")

// create main model

const Users=db.users


// main
//1 create user Adding users

const addUser= async (request,response)=>{
    
    let info={
        name: request.body.name,
        email:request.body.email,
        address:request.body.address,
        description:request.body.description
    }

    const users= await Users.create(info)
    response.status(200).send(users)
}

//2 getting all users

const getAllUsers= async (request,response)=>{
    let users= await Users.findAll({})
    
    response.status(200).send(users)
   
}


//3 update users

const updateUsers= async (request,response)=>{
   let id= request.params.id
   const user= await Users.update(request.body,{where:{id: id}})
   /* response.status(200).send("user updated") */
   response.status(200).send(user)

}

// 4 delete user

const deleteUsers= async (request,response)=>{
    let id= request.params.id
    /*  const user= await Users.delete(request.body,{where:{id: id}}) */    //another way to delete user

    await Users.destroy({where:{id: id}})
    response.status(200).send("user deleted")
 }


module.exports={
    addUser,
    getAllUsers,
    updateUsers,
    deleteUsers
}