import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

type Props = {};

function ContactMe({}: Props) {
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
        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              type="text"
              className="contactInput"
              placeholder="Name"
            ></input>
            <input
              type="text"
              className="contactInput"
              placeholder="Contact"
            ></input>
          </div>
          <input
            type="text"
            className="contactInput"
            placeholder="E-mail Address"
          ></input>
          <textarea className="contactInput" placeholder="Message"></textarea>
          <button className="bg-muted-blue p-5 hover:bg-font-blue hover:text-bg-blue">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
