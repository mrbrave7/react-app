import React from "react";
import ProfilePictureSelector from "./ProfilePictureSelector";

function Register() {
  return (
    <div className="flex flex-col items-center p-6 justify-center gap-2 w-full">
      <form
        action="/userSubmit"
        className="flex gap-8 p-8 items-center justify-center flex-col"
      >
        <h1 className="text-2xl dark:text-neutral-50 font-bold tracking-wider">
          Your Detail
        </h1>
        <input
          className="p-2 dark:text-white text-neutral-900 bg-transparent border-b-2"
          placeholder="FullName"
          type="text"
          name="fullName"
          id="fullname"
        />
        <input
          className="p-2 dark:text-white text-neutral-900 bg-transparent border-b-2"
          placeholder="Date Of Birth"
          type="text"
          name="email"
          id="email"
        />
        <input
          className="p-2 dark:text-white text-neutral-900 bg-transparent border-b-2"
          placeholder="Bio"
          type="text"
          name="bio"
          id="bio"
        />
        <fieldset className="flex items-center justify-center gap-4">
          <legend className="py-2">Choose Your Gender</legend>
          <select name="gender" id="gender">
          <option value="male">Male</option>
          <option value="male">Female</option>
          <option value="male">Others</option>
        </select>
        </fieldset>
        <fieldset>
          <legend>Upload Your Profile Pic</legend>
          <input type="file" name="profile" id="profile" />
        </fieldset>
        <button
          type="submit"
          className="p-2 w-full rounded-sm dark:text-neutral-900 text-neutral-50 dark:bg-neutral-50 bg-neutral-900"
        >
          Create User
        </button>
      </form>
    </div>
  );
}

export default Register;
