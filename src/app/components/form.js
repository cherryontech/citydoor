'use client'
import Heading from "./heading";

export default function Form() {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleSubmit = (e) => {
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact-form', ...data }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };


  return (
    <div className="flex flex-col">
      <Heading level={1} className={"cd-desktop:text-6xl text-4xl mb-6 cd-desktop:mb-4"}>Send Us a Message</Heading>
      <div className="flex flex-col gap-16 sm:gap-y-20 lg:flex-row">
        <form name='contact-form' method='post' onSubmit={handleSubmit}>
          <input type='hidden' name='form-name' value='contact' />
          <p>
            <label>
              Your Name: <input type='text' name='name' />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type='email' name='email' />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name='message'></textarea>
            </label>
          </p>
          <p>
            <button type='submit'>Send</button>
          </p>
        </form>
      </div>
    </div>
  )
}
