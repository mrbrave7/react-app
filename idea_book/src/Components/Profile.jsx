import ProfilePic from "/ProfilePic.png";
import { BsEnvelope } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
function Profile() {
    return (
        <>
            <div className="flex items-center justify-center gap-8 flex-col p-4 ">
                <div className="flex flex-col gap-4 items-center overflow-hidden md:w-[30rem] w-full relative justify-between">
                    <div className="flex items-center justify-center gap-2 flex-col">
                        <img
                            src={ProfilePic}
                            className="md:h-40 h-20 rounded-full border-2 border-neutral-950"
                            alt="This Is Profile Pic"
                        />
                        <h1 className="text-center text-2xl dark:text-neutral-50 font-bold text-neutral-900">
                            Pawan Kumar
                        </h1>
                        <h2 className="text-center text-lg dark:text-neutral-50 text-neutral-900">
                            Full Stack Frontend Developer
                        </h2>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <h1 className="flex items-center justify-start md:gap-12 gap-4 bg-neutral-200 p-2">
                            <span>
                                <BsEnvelope />
                            </span>
                            <span className="text-[12px] md:text-lg">
                                Jrpawankumar51@gmail.com
                            </span>
                        </h1>
                        <h1 className="flex items-center justify-start md:gap-12 gap-4 bg-neutral-200 p-2">
                            <span>
                                <ion-icon name="man-outline"></ion-icon>
                            </span>
                            <span className="text-[12px] md:text-lg">Male</span>
                        </h1>
                        <h1 className="flex items-center justify-start md:gap-12 gap-4 bg-neutral-200 p-2">
                            <span>
                                <SlCalender />
                            </span>
                            <span className="text-[12px] md:text-lg">
                                11/08/2004
                            </span>
                        </h1>
                    </div>
                </div>
                <hr className="w-[30rem] h-1 border-none mt-5 bg-neutral-400" />
            </div>
        </>
    );
}

export default Profile;
