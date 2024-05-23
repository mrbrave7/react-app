import Logo from "./Images/logo.png";
import { Link } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GoBell } from "react-icons/go";
import { PiGear } from "react-icons/pi";
function Header() {
    function toggleDarkmode(e) {
        console.log(e.target.name);
        if (e.target.name === "sunny-outline") {
            document.documentElement.classList.add("dark");
            e.target.setAttribute("name", "moon-outline");
        } else {
            document.documentElement.classList.remove("dark");
            e.target.setAttribute("name", "sunny-outline");
        }
    }
    return (
        <>
            <div className="flex items-center justify-between w-full px-4 md:px-20 py-2">
                <img src={Logo} className="h-10 md:h-20" alt="This Is Image" />
                <Link
                    to={"/createpost"}
                    className="text-red-500 hover:bg-red-500 hover:text-white border-2 border-red-500 duration-500 h-10 p-2 rounded-md flex items-center justify-center gap-4 w-fit text-2xl"
                >
                    <ion-icon name="add-outline"></ion-icon>
                    <span className="hidden md:flex">Create A Post</span>
                </Link>
                <button
                    onClick={(e) => {
                        toggleDarkmode(e);
                    }}
                    className="text-red-500 border-2 border-red-500 rounded-md h-10 w-10  flex items-center justify-center p-2 text-xl"
                >
                    <ion-icon name="sunny-outline"></ion-icon>
                </button>
            </div>
            <nav className="w-full md:px-20 px-4 py-2">
                <ul className="flex items-center justify-between">
                    <li>
                        <Link
                            to={"/homepage"}
                            className="text-2xl p-2 bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-900 hover:bg-neutral-50 rounded-sm dark:text-neutral-50 flex items-center gap-2 justify-center"
                        >
                            <span className="flex items-center justify-center">
                                <ion-icon name="bulb-outline"></ion-icon>
                            </span>
                            <span className="md:flex hidden items-center justify-center">
                                Idea
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/friendpage"}
                            className="p-2 bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-900 hover:bg-neutral-50 rounded-sm text-2xl dark:text-neutral-50 flex items-center gap-2 justify-center"
                        >
                            <span className="flex items-center justify-center">
                                <IoPeopleOutline />
                            </span>
                            <span className="md:flex hidden items-center justify-center">
                                Friends
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/notificationpage"}
                            className="p-2 bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-900 hover:bg-neutral-50 rounded-sm text-2xl dark:text-neutral-50 flex items-center gap-2 justify-center"
                        >
                            <span className="flex items-center justify-center">
                                <GoBell />
                            </span>
                            <span className="md:flex hidden items-center justify-center">
                                Notifications
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/profilepage"}
                            className="p-2 bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-900 hover:bg-neutral-50 rounded-sm text-2xl dark:text-neutral-50 flex items-center gap-2 justify-center"
                        >
                            <span className="flex items-center justify-center">
                                <CgProfile />
                            </span>
                            <span className="md:flex hidden items-center justify-center">
                                Profile
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={"/settingpage"}
                            className="text-2xl p-2 bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-900 hover:bg-neutral-50 rounded-sm dark:text-neutral-50 flex items-center gap-2 justify-center"
                        >
                            <span className="flex items-center justify-center">
                                <PiGear />
                            </span>
                            <span className="md:flex hidden items-center justify-center">
                                Setting
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;
