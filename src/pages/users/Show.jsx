import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Show() {
    const [user, setUser] = useState(null);

    const { id } = useParams();



    useEffect(() => {
        const fetchUser = async () => {
            await fetch("https://json.xstack.ir/api/v1/user/" + id).then((res) => {
                if (!res.ok) throw new Error("cant get user");
                return res.json();
            }).then((data) => {
                setUser(data[0]);
            }).catch((error) => {
                console.log(error);
            });
        }
        fetchUser();
    }, []);





    return (
        <>
            <h1 className="text-white px-4 text-2xl font-bold underline mb-6">
                Show User
            </h1>

            <div className="px-4">
                {user ? (
                    <div
                        className="bg-gray-800 px-4 p-4 rounded-lg shadow"
                    >
                        <h2 className="text-lg text-gray-200 font-semibold">
                            {user.name}
                        </h2>
                        <p className="text-gray-400">
                            {user.email}
                        </p>
                    </div>
                ) : (
                    <p className="text-gray-400">Loading...</p>
                )}
            </div>
        </>
    )
}

export default Show;