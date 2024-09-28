import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xdknqzko");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div
      className="form"
      style={{ display: "felx", justifyContent: "center", width: "100%" }}
    >
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Contact to Developer
      </h2>

      <div className="main_form_field" style={{ display: "flex" }}>
        <div>
          <form onSubmit={handleSubmit} style={{ width: "30rem" }}>
            <div className="inputField1 ">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                style={{ padding: "5px", margin: "5px" }}
                id="email"
                type="email"
                name="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="error">
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="inputField1">
              <label htmlFor="message"> Message</label>
              <textarea
                style={{ padding: "5px", margin: "5px" }}
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={10}
              />
            </div>
            <div className="error">
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="button-41"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
        <div>
          <img
            style={{ width: "28.5rem", marginLeft: "20px" }}
            src="https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg"
            alt="Contact Form image"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
