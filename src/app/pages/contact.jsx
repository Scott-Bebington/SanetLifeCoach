"use client";

import { Typography, Divider, Button } from "@mui/material";
import { useState } from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

export default function Contact() {
  return (
    <main
      key="contact"
      id="contact"
      className="min-h-screen w-full"
    >
      <div className="hidden lg:block">
        <Desktop />
      </div>
      <div className="hidden md:block lg:hidden">
        <Tablet />
      </div>
      <div className="block md:hidden">
        <Mobile />
      </div>
    </main>
  );
}

function Desktop() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex w-full justify-evenly py-12">

        {/* Left Aside */}
        <aside className="w-3/12 min-w-[350px] flex-shrink-0">
          <img src="/images/Contact_image.png" className="aspect-video w-full rounded-lg mb-medium min-h-[250px]" />
          <Divider className="text-secondary">Contact Details</Divider>
          <Typography variant="h6" className="flex items-center my-small">
            <EmailOutlinedIcon className="mr-small text-customPrimary" />
            Email-here
          </Typography>
          <Typography variant="h6" className="flex items-center">
            <LocalPhoneOutlinedIcon className="mr-small text-customPrimary" />
            Phone-here
          </Typography>

          <Divider className="text-secondary my-small">Work Hours</Divider>
          <Typography variant="h6" className="font-bold flex items-center">
            Mon - Fri: <span className="font-normal ml-small"> 9am - 5pm</span>
          </Typography>
          <Typography variant="h6" className="font-bold flex items-center my-small">
            Sat - Sun: <span className="font-normal ml-small"> 9am - 1pm</span>
          </Typography>
          <Typography variant="h6" className="font-bold flex items-center">
            Public Holidays: <span className="font-normal ml-small"> Closed</span>
          </Typography>
        </aside>

        {/* Right Aside */}
        <aside className="w-8/12 flex-shrink-0 flex flex-col justify-between">
          <Typography variant="h4" className="text-secondary font-bold w-full mb-small">
            Feel free to get in touch
          </Typography>
          <div className="flex">
            <input
              type="Name"
              placeholder="Name"
              className="border border-gray-300 rounded-md p-2 mr-4 w-1/2"
            />
            <input
              type="Surname"
              placeholder="Surname"
              className="border border-gray-300 rounded-md p-2 w-1/2 h-14"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md p-2 w-full my-4 h-14"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-gray-300 rounded-md p-2 w-full mb-4 h-14"
          />
          <textarea
            placeholder="Message"
            className="border border-gray-300 rounded-md p-2 w-full h-40"
          />
          <Button 
            className="text-white rounded-md p-2 w-full mt-4 h-14"
            onClick={() => alert("Message sent successfully")}
          >
            Send Message
          </Button>
        </aside>
      </div>
    </div>
  );
}

function Tablet() {
  return (
    <div className="w-full py-12">

      {/* Left Aside */}
      <section className="w-full flex p-medium">
        <img src="/images/Contact_image.png" className="aspect-video rounded-lg mb-medium h-[260px]" />
        <div className="w-full pl-medium">
          <div className="w-full">
            <Divider className="text-secondary">Contact Details</Divider>
            <Typography variant="h6" className="flex items-center my-small">
              <EmailOutlinedIcon className="mr-small text-customPrimary" />
              Email-here
            </Typography>
            <Typography variant="h6" className="flex items-center">
              <LocalPhoneOutlinedIcon className="mr-small text-customPrimary" />
              Phone-here
            </Typography>
          </div>

          <div>
            <Divider className="text-secondary my-small">Work Hours</Divider>
            <Typography variant="h6" className="font-bold flex items-center">
              Mon - Fri: <span className="font-normal ml-small"> 9am - 5pm</span>
            </Typography>
            <Typography variant="h6" className="font-bold flex items-center my-small">
              Sat - Sun: <span className="font-normal ml-small"> 9am - 1pm</span>
            </Typography>
            <Typography variant="h6" className="font-bold flex items-center">
              Public Holidays: <span className="font-normal ml-small"> Closed</span>
            </Typography>
          </div>
        </div>
      </section>

      {/* Right Aside */}
      <section className="w-full flex flex-col justify-between px-medium">
        <Typography variant="h4" className="text-secondary font-bold w-full mb-small">
          Feel free to get in touch
        </Typography>
        <div className="flex">
          <input
            type="Name"
            placeholder="Name"
            className="border border-gray-300 rounded-md p-2 mr-4 w-1/2"
          />
          <input
            type="Surname"
            placeholder="Surname"
            className="border border-gray-300 rounded-md p-2 w-1/2 h-14"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2 w-full my-4 h-14"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="border border-gray-300 rounded-md p-2 w-full mb-4 h-14"
        />
        <textarea
          placeholder="Message"
          className="border border-gray-300 rounded-md p-2 w-full h-40"
        />
        <button className="bg-customPrimary text-white rounded-md p-2 w-full mt-4 h-14">
          Send Message
        </button>
      </section>
    </div>
  );
}

function Mobile() {

  return (
    <div className="w-full py-12">

      <section className="w-full flex flex-col justify-between p-medium">
        <Typography variant="h4" className="text-secondary font-bold w-full mb-small text-center">
          Get in touch
        </Typography>
        <input
          type="Name"
          placeholder="Name"
          className="border border-gray-300 rounded-md p-2 w-full h-14 mb-4"
        />
        <input
          type="Surname"
          placeholder="Surname"
          className="border border-gray-300 rounded-md p-2 w-full h-14"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md p-2 w-full my-4 h-14"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="border border-gray-300 rounded-md p-2 w-full mb-4 h-14"
        />
        <textarea
          placeholder="Message"
          className="border border-gray-300 rounded-md p-2 w-full h-40"
        />
        <button className="bg-customPrimary text-white rounded-md p-2 w-full mt-4 h-14">
          Send Message
        </button>
      </section>

      <section className="w-full p-medium">
        <div className="w-full">
          <Divider className="text-secondary">Contact Details</Divider>
          <Typography variant="h6" className="flex items-center my-small">
            <EmailOutlinedIcon className="mr-small text-customPrimary" />
            Email-here
          </Typography>
          <Typography variant="h6" className="flex items-center">
            <LocalPhoneOutlinedIcon className="mr-small text-customPrimary" />
            Phone-here
          </Typography>
        </div>

        <div>
          <Divider className="text-secondary my-small">Work Hours</Divider>
          <Typography variant="h6" className="font-bold flex items-center">
            Mon - Fri: <span className="font-normal ml-small"> 9am - 5pm</span>
          </Typography>
          <Typography variant="h6" className="font-bold flex items-center my-small">
            Sat - Sun: <span className="font-normal ml-small"> 9am - 1pm</span>
          </Typography>
          <Typography variant="h6" className="font-bold flex items-center">
            Public Holidays: <span className="font-normal ml-small"> Closed</span>
          </Typography>
        </div>
      </section>



    </div>
  );
}
