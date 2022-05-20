module.exports=(sequelize, DataTypes)=>{
   const Users= sequelize.define("users",{
       name:{
           type:DataTypes.STRING,
        
           
       },
       email:{
           type:DataTypes.STRING,
           
       },
       address:{
           type:DataTypes.STRING,
         
       },
       description:{
           type:DataTypes.TEXT,
         
       }
   })
   return Users;
}

