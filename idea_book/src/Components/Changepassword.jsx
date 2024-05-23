import axios from "axios";
import { useState } from "react";
function Changepassword() {
    const [newPassword, setNewPassword] = useState("");
    const [oldpassword, setOldPassword] = useState("");
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.patch(
                "http://localhost:8000/api/v1/users/changePassword",
                {
                    oldpassword: oldpassword,
                    newPassword: newPassword,
                }
            );
            if (response.status !== 200) {
                console.log("Something Went Wrong While Changing The password");
            } else {
                console.log("Password Changed");
            }
        } catch (error) {
            console.log("Something Went Wrong :", error);
        }
    }
    return (
        <>
            <div className="flex items-center justify-center flex-col py-4">
                <h1 className="text-red-500 uppercase text-2xl">
                    change Your Password
                </h1>
                <form
                    action="changePassword"
                    onSubmit={handleSubmit}
                    className="flex flex-col mt-10 items-start gap-2 justify-start"
                >
                    <label htmlFor="oldpassword">Old Password</label>
                    <input
                        className="text-red-500 border-2 border-red-500 rounded-md p-2 w-full"
                        onChange={(e) => setOldPassword(e.currentTarget.value)}
                        value={oldpassword}
                        type="password"
                        name="oldpassword"
                        id="oldpassword"
                    />
                    <label htmlFor="newpassword">New Password</label>
                    <input
                        className="text-red-500 border-2 border-red-500 rounded-md p-2 w-full"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        type="password"
                        name="newpassword"
                        id="newpassword"
                    />
                    <button className=" mt-5 w-full bg-red-500 h-12 text-white p-2 rounded-md">
                        Change Password
                    </button>
                </form>
            </div>
        </>
    );
}
export default Changepassword;
