import { useEffect, useState } from "react";

function All() {
    const [users, setUsers] = useState(null);


    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch("https://json.xstack.ir/api/v1/users");
            const data = await  res.json();
            setUsers(data.data);
        }

        fetchUsers();
    } , []);


    return (
        <>
            <h1 className="text-white text-2xl font-bold underline">all users</h1>

            <div className="space-y-4 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {users && users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-gray-800 p-4 rounded-lg shadow"
                    >
                        <h2 className="text-lg text-gray-200 font-semibold">
                            {user.name}
                        </h2>
                        <p className="text-gray-200">
                            {user.email}
                        </p>
                    </div>
                ))}
            </div>


        </>
    )
}


export default All;
