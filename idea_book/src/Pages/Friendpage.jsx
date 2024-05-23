import { useState } from "react";
import axios from "axios";
function Friendpage() {
    const [friends, setFriends] = useState();
    const [friend, setFriend] = useState();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.get(
                "http://localhost:8000/api/v1/users/changePassword",
                {
                    friend: friend,
                }
            );
            if (response.status !== 200) {
                console.log("Can't Find Friend");
            }
            const friendData = response.json();
            setFriends(friendData);
        } catch (error) {
            console.log("Something Went Wrong :", error);
        }
    }
    return (
        <div className="w-full flex items-center justify-center flex-col">
            <h1 className="p-8 text-red-500 text-4xl">Find Your Friends</h1>
            <form
                action="#"
                onSubmit={handleSubmit}
                className="flex items-center gap-2 justify-center"
            >
                <input
                    value={friend}
                    type="text"
                    onChange={(e) => setFriend(e.target.value)}
                    className="p-2 h-12 border-red-500 outline-none rounded-md border-2"
                    placeholder="Find..."
                />
                <button className="flex items-center h-12 w-12 text-4xl justify-center p-2 hover:text-white hover:bg-red-500 duration-500 border-2 rounded-md border-red-500 text-red-500">
                    <ion-icon name="search-circle-outline"></ion-icon>
                </button>
            </form>
            <div></div>
        </div>
    );
}

export default Friendpage;
