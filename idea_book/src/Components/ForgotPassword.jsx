import { Link } from "react-router-dom";

function Forgot() {
    return (
        <div className="flex items-center justify-center h-screen m-auto">
            <div className="flex flex-col gap-4 items-center rounded-md p-6 border-2 w-[30rem] border-red-500 justify-center">
                <form
                    action="/login"
                    className="flex gap-8 w-full items-center justify-center flex-col"
                >
                    <h1 className="text-2xl dark:text-neutral-50 text-red-500 font-bold tracking-wider">
                        Forgot Your Password
                    </h1>
                    <input
                        className="p-2 w-full dark:text-white outline-none focus:border-red-500 text-neutral-900 bg-transparent border-b-2"
                        placeholder="Enter Your Email"
                        type="text"
                        name="email"
                        id="email"
                    />
                    <button
                        type="submit"
                        className="p-2 w-full rounded-sm dark:text-neutral-900 hover:bg-white hover:text-red-500 duration-500 border-2 border-red-500 text-neutral-50 dark:bg-neutral-50 bg-red-500"
                    >
                        Find Your Account
                    </button>
                </form>
                <p className="text-red-500">or</p>
                <div className="flex flex-col items-center justify-center gap-4 w-full">
                    <Link
                        to={"/createaccount"}
                        className="p-2 w-full rounded-sm hover:bg-red-500 hover:text-white duration-500 border-red-500 border-2 text-red-500 text-center "
                    >
                        Create An Account
                    </Link>
                    <Link
                        to={"/login"}
                        className="p-2 w-full rounded-sm hover:bg-red-500 hover:text-white duration-500 border-red-500 border-2 text-red-500 text-center "
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Forgot;
