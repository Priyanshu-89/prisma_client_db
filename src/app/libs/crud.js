 'use server'

import { PrismaClient } from "@prisma/client"

// import { PrismaClient } from "@prisma/client"

// export const createUser=async()=>{
//     try {
//         const prisma=new PrismaClient();
//         const newUsers=[
//             {
//                 email:"user1@gmail.com",
//                 name:"user1",
//             },
//             {
//                 email:"user2@gmail.com",
//                 name:"user2",
//             },
//             {
//                 email:"user3@gmail.com",
//                 name:"user3",
//             },
//             {
//                 email:"user4@gmail.com",
//                 name:"user4",
//             },
//         ]
//        const createdUser= await prisma.user.createMany({
//             data:newUsers
//         })
//         console.log("Created User: ", createdUser)
//     } catch (error) {
//         console.log("Error :" ,error)
//     }
// }

export const createUser=async({username:username, email:email})=>{
    try {
        const prisma =new PrismaClient();
        const newUser={email:email, name:username};
        const createdUser=await prisma.user.create({
            data:newUser,

        });
        console.log("Created User: ", createdUser)
        return createUser;
    } catch (error) {
        console.log(error)
    }
};

export const fetchUser=async()=>{
try {
    const prisma =new PrismaClient();
    //fetch all users
    const users=await prisma.user.findMany({});
    // const userUnique=await prisma.user.findUnique({
    //     where:{
    //         email:"user1@gmail.com"
    //     }
    // })
    // console.log("Users: ", users)
    return users;
// return userUnique
} catch (error) {
    console.log(error)
    return [];
}
};


export const updateUser=async()=>{
    try {
        const prisma=new PrismaClient();
      const updatedUser=  await prisma.user.upsert({
            where:{
                email:"user123@gmail.com"
            },
            update:{
                name:"Updated User Name"
            },
            create:{
                email:"user123@gmail.com",
                name:"New User Name"
            }
          
        })
        // console.log("Updated User: ", updatedUser)
    } catch (error) {
        
    }
};

// Delete user 

export const removeUser=async()=>{
    try {
        const prisma=new PrismaClient();
        const deletedUser=await prisma.user.delete({
            where:{
                email:"user123@gmail.com"
            }
        })
        //  console.log("Deleted User: ", deletedUser)
    } catch (error) {
       console.log(error) 
    }
}