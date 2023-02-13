import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:vithya.shankar@outlook.sg?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };
  return (
    <div className="h-screen flex relative flex-col text-center max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="sectionHeader">Contact</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4-xl text-center text-font-blue">
          Let's build something{" "}
          <span className="font-bold underline decoration-highlight-blue/50">
            great together
          </span>
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              type="text"
              className="contactInput"
              placeholder="Name"
            ></input>
            <input
              {...register("email")}
              type="email"
              className="contactInput"
              placeholder="E-mail Address"
            ></input>
          </div>
          <input
            {...register("subject")}
            type="text"
            className="contactInput"
            placeholder="Subject"
          ></input>
          <textarea
            {...register("message")}
            className="contactInput"
            placeholder="Message"
          ></textarea>
          <button className="bg-muted-blue p-5 rounded-md font-bold text-lg hover:bg-font-blue hover:text-bg-blue ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
