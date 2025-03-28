'use client';
import { createUser, fetchUser, removeUser, updateUser } from "@/app/libs/crud"
import { useEffect, useState } from "react"

const CreatePage = () => {
    ;

    const [username, setusername] = useState("")
    const [email, setemail] = useState("");
    const [userData, setUserData] = useState([])

    const handleFormData = async (e) => {
        e.preventDefault()
        await createUser({ username: username, email: email })
    };
    useEffect(() => {
        const getAllUsers = async () => {
            const userData = await fetchUser();
            setUserData(userData)
            console.log("get all users")
        };
        getAllUsers()
    }, [])
    return (
        <div className='max-w-sm mx-auto flex flex-col gap-10 justify-center items-center min-h-screen'>
            <h1 className='text-4xl text-gray-800'>Creating New user</h1>
            <div>
                <form onSubmit={handleFormData}>
                    <div className="mb-6">
                        <label htmlFor="">username</label>
                        <input type="text"
                            onChange={(e) => setusername(e.target.value)}
                            name="username" className="block px-2 py-1 border border-slate-800 w-full " />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="">email</label>
                        <input type="text"
                            name="email" onChange={(e) => setemail(e.target.value)}
                            className="block px-2 py-1 border border-slate-800 w-full "
                        />
                    </div>
                    <button type='submit' className='px-8 py-1 border border-slate-700 rounded-md'>Create User</button>
                </form>
            </div>
            {/* Read User  */}
            {
                userData.length >= 1 ? userData.map((user, idx) => {
                    return (
                        <div key={idx} className="flex gap-3 p-2 border border-slate-800 text-black rounded-md">
                            <p>username: {user.name}</p>
                            <p>email: {user.email}</p>
                        </div>
                    )
                }) :
                    <idv>
                        {
                            userData.name
                        } - {userData.email}
                    </idv>
            }

            {/* update user */}
           <div className="flex gap-3 w-full">
           <div>
                <form action="">
                    <button type="submit" className="px-8 py-2 bg-slate-700 text-slate-50 rounded-md" formAction={updateUser}>Update User</button>
                </form>
            </div>

            {/* Delete user  */}

            <div>
                <form action="">
                    <button type="submit" className="px-8 py-2 rounded-md bg-rose-700 text-slate-50" formAction={removeUser}>Delete User</button>
                </form>
            </div>
           </div>
        </div>


    )
}

export default CreatePage
