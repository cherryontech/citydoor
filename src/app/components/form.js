'use client'
import Heading from "./heading";

export default function Form() {
  const handleSubmit = (e) => {
    const formData = new FormData(e.target);
    console.log(...formData)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: { "form-name": "contact", formData }
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  }

  return (
    <div className="flex flex-col">
      <Heading level={1} className={"cd-desktop:text-6xl text-4xl mb-6 cd-desktop:mb-4"}>Send Us a Message</Heading>
      <div className="flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
        <form className="lg:flex-auto" name="contact" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-x-8 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
                Name <span className="text-cd-error">*</span>
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email <span className="text-cd-error">*</span>
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">
                Phone <span className="text-cd-error">*</span>
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="phone"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row">
              <div>Do you want us to call you? <span className="text-cd-error">*</span></div>
              <fieldset className="inline-flex">
                <legend className="sr-only">Request to call</legend>
                <div>
                  <input type="radio" id="yes" name="call" value="yes" />
                  <label htmlFor="yes">Yes</label>
                </div>

                <div>
                  <input type="radio" id="no" name="call" value="no" />
                  <label htmlFor="no">No</label>
                </div>
              </fieldset>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message <span className="text-cd-error">*</span>
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-cd-secondary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Submit
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-500">
            Email us directly at <a className="text-cd-primary" href='mailto:sales@citydoor.com'>sales@citydoor.com</a>
          </p>
        </form>
      </div>
    </div>
  )
}
