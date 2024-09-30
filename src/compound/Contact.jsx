import { useForm, ValidationError } from "@formspree/react";

function Contact(props) {
  const [state, handleSubmit] = useForm("xdknqzko");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div
      className="form"
      style={{ display: "felx", justifyContent: "center", width: "100%" }}
    >
      <div className=" mt-10 md:flex md:justify-center md:mt-10 md:mb-10 text-center block">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {/* {props} */}
        </h2>
      </div>

      <div
        className="main_form_field justify-center"
        style={{ display: "flex" }}
      >
        <div className="md:m-0 ml-10 mt-10 border md:pl-4 md:pt-4 rounded-md md:mb-4 shadow-lg">
          <form onSubmit={handleSubmit} style={{ width: "30rem" }}>
            <div className="inputField1 ">
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                className="w-[250px] md:w-[300px] border "
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
            <label className="mt-5" htmlFor="message">
              {" "}
              Message
            </label>
            <div className="inputField1">
              <textarea
                className="border"
                style={{ padding: "5px", margin: "5px" }}
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={5}
                cols={37}
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
              className="button-41 shadow-lg"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="md:block hidden">
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
