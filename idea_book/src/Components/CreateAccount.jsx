import { useState } from "react";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";

function Register() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [bio, setBio] = useState("");
    const [avatar, setAvatar] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const [profession, setProfession] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("userName", userName);
            formData.append("password", password);
            formData.append("email", email);
            formData.append("fullName", fullName);
            formData.append("dateOfBirth", dateOfBirth);
            formData.append("bio", bio);
            formData.append("avatar", avatar);
            formData.append("coverImage", coverImage);
            formData.append("profession", profession);

            const response = await fetch(
                "http://localhost:5000/api/v1/users/register",
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (response.ok) {
                setMessage("User registered successfully!");
            } else {
                // Handle non-200 status codes here
                const errorMessage = await response.text();
                setMessage(errorMessage || "An error occurred.");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred. Please try again later.");
        }
    };

    const handleDropAvatar = (acceptedFiles) => {
        setAvatar(acceptedFiles[0]);
    };

    const handleDropCoverImage = (acceptedFiles) => {
        setCoverImage(acceptedFiles[0]);
    };

    return (
        <div className="p-4 flex items-center justify-center h-full mt-20">
            <div className="flex flex-col items-center py-8 px-4 justify-center rounded-md border-2 border-red-500 gap-8 w-[30rem]">
                <form
                    action="/registerUser"
                    onSubmit={handleSubmit}
                    className="flex gap-6 w-full items-center justify-center flex-col"
                >
                    <h1 className="text-2xl dark:text-neutral-50 text-red-500 font-bold tracking-wider">
                        Create An Account
                    </h1>
                    <input
                        className="p-2 w-full dark:text-white border-red-500 focus:border-b-red-500 focus:ring-0 focus:outline-none focus:text-red-500 text-neutral-900 bg-transparent border-b-2"
                        placeholder="Username"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        name="userName"
                        id="username"
                    />
                    <input
                        className="p-2 w-full dark:text-white border-red-500 focus:border-b-red-500 focus:ring-0 focus:outline-none focus:text-red-500 text-neutral-900 bg-transparent border-b-2"
                        placeholder="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                    />
                    <input
                        className="p-2 w-full dark:text-white border-red-500 focus:border-b-red-500 focus:ring-0 focus:outline-none focus:text-red-500 text-neutral-900 bg-transparent border-b-2"
                        placeholder="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                    />
                    <input
                        className="p-2 w-full dark:text-white border-red-500 focus:border-b-red-500 focus:ring-0 focus:outline-none focus:text-red-500 text-neutral-900 bg-transparent border-b-2"
                        placeholder="FullName"
                        type="text"
                        name="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        id="fullname"
                    />
                    <input
                        className="p-2 w-full dark:text-white border-red-500 focus:border-b-red-500 focus:ring-0 focus:outline-none focus:text-red-500 text-neutral-900 bg-transparent border-b-2"
                        placeholder="profession"
                        type="text"
                        name="profession"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                        id="profession"
                    />
                    <input
                        className="p-2 w-full dark:text-white border-red-500 focus:border-b-red-500 focus:ring-0 focus:outline-none focus:text-red-500 text-neutral-900 bg-transparent border-b-2"
                        placeholder="Date Of Birth"
                        type="date"
                        name="dateOfBirth"
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        id="dob"
                    />
                    <input
                        className="p-2 w-full dark:text-white border-red-500 focus:border-b-red-500 focus:ring-0 focus:outline-none focus:text-red-500 text-neutral-900 bg-transparent border-b-2"
                        placeholder="Bio"
                        type="text"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        name="bio"
                        id="bio"
                    />
                    <div className="flex flex-wrap items-center justify-center gap-4 w-full">
                        <Dropzone onDrop={handleDropAvatar} accept="image/*">
                            {({ getRootProps, getInputProps }) => (
                                <section className="p-4 bg-red-600 h-40 rounded-full flex flex-col items-center justify-center text-neutral-100 text-center cursor-pointer w-40 ">
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p className="text-4xl">
                                            <ion-icon name="camera-outline"></ion-icon>
                                        </p>
                                        <p className="text-sm">
                                            Drop Your Avatar Here
                                        </p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                        {avatar && (
                            <div>
                                <h2>Preview:</h2>
                                <img
                                    src={URL.createObjectURL(avatar)}
                                    alt="Profile Preview"
                                    className="w-32 h-32"
                                />
                            </div>
                        )}
                        <Dropzone
                            onDrop={handleDropCoverImage}
                            accept="image/*"
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section className="p-4 bg-red-600 h-40 w-40 text-neutral-100 text-center cursor-pointer flex items-center justify-center flex-col rounded-full">
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p className="text-4xl">
                                            <ion-icon name="image-outline"></ion-icon>
                                        </p>
                                        <p className="text-sm">
                                            Select Your Cover Image
                                        </p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                        {coverImage && (
                            <div>
                                <h2>Preview:</h2>
                                <img
                                    src={URL.createObjectURL(coverImage)}
                                    alt="Profile Preview"
                                    className="w-32 h-32"
                                />
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="p-2 w-full rounded-sm dark:text-neutral-900 text-neutral-50 dark:bg-neutral-50 border-red-500 border-2 hover:text-red-500 hover:bg-white duration-500 bg-red-500"
                    >
                        Create Account
                    </button>
                </form>
                <Link
                    to={"/login"}
                    className="p-2 w-full text-center hover:bg-red-500 hover:text-white duration-500 border-2 border-red-500 rounded-sm text-red-500"
                >
                    Already Have An Account
                </Link>
            </div>
        </div>
    );
}

export default Register;
