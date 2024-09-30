const Containt = () => {
  return (
    <div>
      <section id="mission">
        <h2 className="text-4xl text-center font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Our Mission
        </h2>
        <p>
          <h2 className="text-xl mt-[10px] text-left font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent scroll-m-20  font-extrabold tracking-tight lg:text-5xl">
            Introduction
          </h2>
        </p>
        <div>
          <ul>
            <li>Overview:</li>
            <div className=" p-2 text-left  text-slate-600 font-thin text-xl">
              <div className=" p-2 text-left  text-slate-600 font-thin text-xl">
                At Questify, we value your privacy and are committed to
                protecting your personal information. Our platform is designed
                with your security in mind, ensuring that your data is safe and
                confidential.
              </div>
            </div>
            <li>Test Durations:</li>
            <div className=" p-2   text-left  text-slate-600 font-thin text-xl">
              <div className=" p-2 text-left  text-slate-600 font-thin text-xl">
                Students can choose between two test durations:
              </div>
            </div>
            <div>
              <ul>
                <li className="p-2 text-left  text-slate-600 font-thin text-xl">
                  <strong>3 Hours:</strong> Ideal for full-length practice
                  tests, simulating the actual JEE exam experience.
                </li>
                <li className="p-2 text-left  text-slate-600 font-thin text-xl">
                  <strong>1 Hour 30 Minutes:</strong>{" "}
                  <span className="p-2 text-left  text-slate-600 font-thin text-xl">
                    Suitable for shorter practice sessions, focusing on specific
                    subjects or topics.
                  </span>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </section>
      <section id="vision">
        <h2 className="text-xl mt-[155px] text-left font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent scroll-m-20  font-extrabold tracking-tight lg:text-5xl">
          Our Vision
        </h2>
        <li className="p-2 mt-5 text-left  text-slate-600 font-thin text-xl">
          <strong>Empowering Students:</strong> <br />
          <span className="p-2 text-left  text-slate-600 font-thin text-xl">
            At Questify, we envision a world where every student has access to
            high-quality resources and tools that empower them to achieve their
            academic goals. Our mission is to revolutionize the way students
            prepare for competitive exams, providing them with the technology
            and support needed to excel.
          </span>
        </li>
        <li className="p-2 mt-5 text-left  text-slate-600 font-thin text-xl">
          <strong>Accessible Education:</strong> <br />
          <span className="p-2 text-left  text-slate-600 font-thin text-xl">
            We believe in breaking down barriers to education. Our goal is to
            make top-tier preparation materials accessible to all students,
            regardless of their location or background.
          </span>
        </li>
      </section>
      <section id="vision1">
        <h2 className="text-xl mt-[155px] text-left font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent scroll-m-20  font-extrabold tracking-tight lg:text-5xl">
          Our Thought
        </h2>
        <li className="p-2 mt-5 text-left  text-slate-600 font-thin text-xl">
          <strong>Innovative Learning:</strong> <br />
          <span className="p-2 text-left  text-slate-600 font-thin text-xl">
            We aim to leverage advanced technologies, such as AI and data
            analytics, to personalize the learning experience. By understanding
            individual strengths and weaknesses, we can provide tailored
            resources that enhance student performance.
          </span>
        </li>
        <li className="p-2 mt-5 text-left  text-slate-600 font-thin text-xl">
          <strong>Building a Community:</strong> <br />
          <span className="p-2 text-left  text-slate-600 font-thin text-xl">
            Questify is more than just a platform; it’s a community of learners
            and educators. We strive to create an environment where students can
            collaborate, share knowledge, and support each other on their
            academic journeys.
          </span>
        </li>
      </section>
      <section id="login">
        <h2 className="text-xl mt-[155px] text-left font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent scroll-m-20  font-extrabold tracking-tight lg:text-5xl">
          Login and Logout Scenarios
        </h2>

        <li className="p-2 mt-5 text-left  text-slate-600 font-thin text-xl">
          <strong>Login Process:</strong> <br />
          <p className="ml-4">
            To access the Computer-Based Tests (CBT), students must log in:
          </p>
          <div className="ml-7">
            <li>
              {" "}
              <strong>Navigate to Login:</strong>Click on the (Login) button
              from the Home or Dashboard page.
            </li>
            <li>
              {" "}
              <strong>Enter Credentials:</strong>Input your registered email and
              password.
            </li>
            <li>
              {" "}
              <strong>Forgot Password:</strong>If you forget your password,
              click on the “Forgot Password?” link to initiate a password reset.
            </li>
            <li>
              {" "}
              <strong>Access Granted: </strong>Upon successful login, students
              will be redirected to the Dashboard page,where they can select
              tests and access resources.
            </li>
          </div>
        </li>

        <li className="p-2 mt-5 text-left  text-slate-600 font-thin text-xl">
          <strong>Logout Process:</strong> <br />
          <p className="ml-4">
            When students have finished using the application, they should log
            out:
          </p>
          <div className="ml-7">
            <li>
              {" "}
              <strong>Click Logout:</strong>Locate the (Logout) button on the
              dashboard or navigation menu.
            </li>
            <li>
              {" "}
              <strong>Session Ended:</strong>After logging out, students will be
              redirected to the Home page, and their session will end, ensuring
              that their account remains secure.
            </li>
          </div>
        </li>
      </section>
      <section id="contact">
        <h2>Get in Touch</h2>
        <p>We’d love to connect with you...</p>
      </section>
    </div>
  );
};

export default Containt;
