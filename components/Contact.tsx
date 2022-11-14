import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
     name: string;
    subject: string;
    email: string;
    message: string;
};

const Contact = () => {

    const {
      register,
      handleSubmit,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        window.location.href = `mailto:ajachintyajaiswal@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}
         ${data.message}`
    }

  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
      max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 text-gray-500 uppercase tracking-[20px] text-2xl">
        &#60;Contact/&#62;
      </h3>

      <div className="flex flex-col space-y-10 w-fit">
        <h4 className="text-md md:text-xl font-semibold text-center">
          I have got just what you need. &nbsp;
          <span className=" decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-4 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p className="text-md">+91-8299096951</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 animate-pulse" />
            <p className="text-md">ajachintyajaiswal@gmail.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-1">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput w-[50%] md:w-fit"
              type="text"
              required
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput w-[50%] md:w-fit"
              type="email"
              required
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
            required
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-3 px-10 rounded-md text-black font-bold text-sm"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
