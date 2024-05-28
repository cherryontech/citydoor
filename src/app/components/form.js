'use client'
import Heading from "./heading";
import { useState } from 'react';

export default function Form() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      setStatus('pending');
      setError(null);
      const myForm = event.target;
      const formData = new FormData(myForm);
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      });
      if (res.status === 200) {
        setStatus('ok');
      } else {
        setStatus('error');
        setError(`${res.status} ${res.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`${e}`);
    }
  };


  return (
    <div className="flex flex-col gap-y-6">
      <Heading level={2} className={"cd-desktop:text-4xl text-4xl mb-6 cd-desktop:mb-4 font-semibold"}>Send Us a Message</Heading>
      <div className="flex flex-col gap-y-6">
        <span className='text-right text-cd-error'>* Required</span>
        <form
          name="contact-form"
          onSubmit={handleFormSubmit}
          className="text-black flex flex-col gap-3 align-center">
          <input type="hidden" name="form-name" value="contact-form" />
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="block">Name<span className="text-cd-error ml-1">*</span></label>
            <div className="m-0">
              <input name="name" type="text" placeholder="Your name" required className="block border-0 rounded w-full py-1.5 px-1 ring-1 ring-inset ring-black placeholder:text-gray-400 leading-6 focus:outline-none" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="block">Email<span className="text-cd-error ml-1">*</span></label>
            <input name="email" type="email" placeholder="example@email.com" required className="block border-0 rounded w-full py-1.5 px-1 ring-1 ring-inset ring-black placeholder:text-gray-400 leading-6 focus:outline-none" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="Phone" className="block">Phone<span className="text-cd-error ml-1">*</span></label>
            <input name="phone" type="tel" placeholder="+1 (XXX) - XXX - XXXX" required className="block border-0 rounded w-full py-1.5 px-1 ring-1 ring-inset ring-black placeholder:text-gray-400 leading-6 focus:outline-none" />
          </div>
          <fieldset className="flex flex-col gap-y-1 cd-desktop:flex-row gap-x-40">
            <legend className="sr-only">Select option to be called</legend>
            <div className="block">Do you want us to call you?<span className="text-cd-error ml-1">*</span></div>
            <div className="flex gap-x-6 self-center">
              <div className="">
                <input type="radio" id="yes" name="call" value="yes" className="" />
                <label htmlFor="yes" className="ml-2">Yes</label>
              </div>
              <div>
                <input type="radio" id="no" name="call" value="no" />
                <label htmlFor="no" className="ml-2">No</label>
              </div>
            </div>
          </fieldset>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="block">Message<span className="text-cd-error ml-1">*</span></label>
            <textarea rows={5} name="message" type="text" placeholder="Enter your message here" required className="block border-0 rounded w-full py-1.5 px-1 ring-1 ring-inset ring-black placeholder:text-gray-400 leading-6 focus:outline-none" />
          </div>
          <button className="bg-cd-secondary rounded-lg drop-shadow-lg p-4 font-bold w-full cd-desktop:w-72 self-center cd-desktop:self-auto" type="submit" disabled={status === 'pending'}>
            Submit
          </button>
          <p>Email us directly at <a href="mailto:sales@citydoor.com" className="text-cd-primary">sales@citydoor.com</a></p>
          {status === 'ok' && (
            <div className="alert alert-success">
              <SuccessIcon />
              Submitted!
            </div>
          )}
          {status === 'error' && (
            <div className="alert alert-error">
              <ErrorIcon />
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

function SuccessIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
function ErrorIcon(success) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
