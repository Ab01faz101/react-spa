import { useEffect, useState } from "react";
import { Link } from "react-router";
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
            <h1 className="text-white text-2xl px-4 font-bold underline">All Users</h1>
            <div className="space-y-4 mt-5 grid grid-cols-1 px-4 sm:grid-cols-2 md:grid-cols- gap-4">
                {users && users.map((user) => (
                    <div
                        key={user.id}
                        className="bg-gray-800 p-4 rounded-lg shadow"
                    >
                        <h2 className="text-lg text-gray-200 font-semibold">
                            <Link to={"/users/"+user.id}>{user.name}</Link>
                        </h2>
                        <p className="text-gray-200">
                            {user.email}
                        </p>
                        <p className="text-gray-200">
                            {user.phone}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}


export default All;
