import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const trimmedEmail =
                typeof email === "string" ? email.trim() : email;
            const response = await fetch(
                "http://localhost:8000/api/v1/users/loginUser",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email: trimmedEmail, password }),
                }
            );
            console.log(response);
            if (response.ok) {
                history("/profile"); // use history as a function
            } else {
                console.log("Something Went Wrong");
            }
        } catch (error) {
            console.error("Error occurred during login:", error);
        }
    };

    return (
        <div className="flex flex-col m-auto h-screen items-center justify-center p-4">
            <div className=" border-red-500 border-2 w-[30rem] rounded-md flex flex-col items-center p-6 justify-center gap-4 ">
                <form
                    onSubmit={handleSubmit}
                    className="flex gap-8 w-full items-center justify-center flex-col"
                >
                    <h1 className="text-2xl text-red-500 font-bold tracking-wider">
                        Login
                    </h1>
                    <input
                        className="p-2 w-full outline-none focus:ring-2 focus:ring-red-500 rounded-md dark:text-white border-red-500 text-red-500 bg-transparent border-b-2"
                        placeholder="Email"
                        type="text"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        name="email" // change name attribute to "email"
                        id="email" // change id attribute to "email"
                    />
                    <input
                        className="p-2 w-full outline-none focus:ring-2 focus:ring-red-500 rounded-md dark:text-white border-red-500 text-red-500 bg-transparent border-b-2"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        id="password"
                    />
                    <button
                        type="submit"
                        className="p-2 w-full rounded-md bg-red-500 text-white hover:text-red-500 border-2 border-red-500 duration-500 hover:bg-white"
                    >
                        Login
                    </button>
                </form>
                <p>or</p>
                <div className="flex flex-col items-center mb-5 gap-4 text-center w-full">
                    <Link
                        to={"/forgotpassword"}
                        className="p-2 w-full rounded-md border-2 border-red-500 text-red-500"
                        href="/forgetPassword"
                    >
                        Forgot Password
                    </Link>
                    <Link
                        to={"/createaccount"}
                        className="p-2 w-full rounded-md border-2 border-red-500 text-red-500"
                        href="createAccount"
                    >
                        Create An Account
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
