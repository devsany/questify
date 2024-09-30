import {
  SignedIn,
  SignedOut,
  SignInButton,
  useAuth,
  UserButton,
} from "@clerk/clerk-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NavigationBar from "./NavigationBar";
import NavigationBarSignedIn from "./NavigationBarSignedIn";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NavigationBar1 from "./NavigationBar1";
import NavigationBarSignedIn1 from "./NavigationBarSignedIn1";
import { ChevronRight } from "lucide-react";

import Contact from "./Contact";

const cara = [
  {
    id: 1,
    containt: "Comprehensive Test Preparation",
    description:
      "Our platform provides an extensive library of multiple-choice questions tailored for JEE Main and JEE Advanced, helping students practice and assess their knowledge effectively.",
  },
  {
    id: 2,
    containt: "User-Friendly Dashboard",
    description:
      "Navigate through a well-designed interface that allows easy access to questions, tests, and progress tracking.",
  },
  {
    id: 3,
    containt: "Documentation Section",
    description:
      " Access a wealth of resources, including study guides, tips, and best practices to enhance your preparation.",
  },
  {
    id: 4,
    containt: "Regular Updates",
    description:
      "We continually update our question bank and resources to reflect the latest exam patterns and syllabi, ensuring our users are always well-prepared.",
  },
];

const Team = [
  {
    id: 1,
    name: "Sunny Sharma – Co-Founder & CEO: With over 4 years in educational technology, Sunny is dedicated to creating impactful learning solutions.",
    avt: "download 1.png",
  },
  {
    id: 2,
    name: "Vandana Sharma – Head of Content: A former educator, Vandana Sharma curates and develops high-quality questions and study materials.",
    avt: "download 2.png",
  },
  {
    id: 3,
    name: "Ritu Sharma – Chief Technology Officer: Ritu Sharma leads our tech team, ensuring the platform runs smoothly and securely.",
    avt: "download 2.png",
  },
];

const Documentation = () => {
  const [toggle, setToggle] = useState(false);
  const { isSignedIn } = useAuth();
  const handleToggel = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="w-[100vh] h-[100vh] md:w-[100%] bg-gradient-to-t from-white from-30% to-orange-100 to-70%">
        <nav className=" h-13 w-[100vw] md:h-18 shadow md:shadow-sm shadow-blue-65 md:shadow-orange-500/50">
          {/* <NavLink to="/"></NavLink> */}
          <div className="flex bg-white  justify-between">
            <div>
              <NavLink
                to="/"
                className="flex items-center space-x-3 rtl:space-x-reverse"
              >
                <img
                  // className="h-8"
                  className=" w-[75px] md:w-[95px] ml-2 md:ml-5 m-2"
                  src="logos1.png"
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="button">
              <button
                onClick={handleToggel}
                data-collapse-toggle="navbar-default"
                type="button"
                className=" absolute ml-[120px] mt-4 items-center p-2 w-10 h-10  text-sm text-gray-500 rounded-lg   md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div>
              <header>
                <div className="m-5 ">
                  {toggle ? (
                    <header>
                      <div className="block">
                        <SignedOut>
                          <div className="block">
                            <div>
                              <NavigationBar1 />
                            </div>
                            <div className="text-black  ">
                              <SignInButton className="p-1 ml-4 md:m-0 md:pl-3 md:pr-3 md:pt-2 md:pb-2" />
                            </div>
                          </div>
                        </SignedOut>
                        <SignedIn>
                          <div className="p-1 block   justify-between md:w-[500px] h-[40px]  ">
                            <div>
                              <NavigationBarSignedIn1 />
                            </div>
                            <div className=" m-4 ">
                              <UserButton />
                            </div>
                          </div>
                        </SignedIn>
                      </div>
                    </header>
                  ) : (
                    <header>
                      <div className="hidden md:block">
                        <SignedOut>
                          <div className="flex">
                            <div>
                              <NavigationBar />
                            </div>
                            <div className="text-black border border-black rounded-lg">
                              <SignInButton className="p-1  md:pl-3 md:pr-3 md:pt-2 md:pb-2" />
                            </div>
                          </div>
                        </SignedOut>
                        <SignedIn>
                          <div className="p-1 flex justify-between md:w-[500px] h-[40px]  ">
                            <div>
                              <NavigationBarSignedIn />
                            </div>
                            <div className="border rounded-3xl">
                              <UserButton />
                            </div>
                          </div>
                        </SignedIn>
                      </div>
                    </header>
                  )}
                </div>
              </header>
            </div>
          </div>
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2  mt-20 p-5">
          <div className="md:mt-7 md:ml-20 p-10">
            <h2 className="text-4xl font-bold bg-gradient-to-r md:pb-2 from-orange-500 to-purple-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Our Mission
            </h2>

            <h3 className="text-slate-600 text-lg">
              At Questify, our mission is to revolutionize the way students
              prepare for competitive exams like JEE Main and JEE Advanced. We
              strive to provide an accessible, user-friendly platform that
              empowers learners to achieve their academic goals through
              innovative technology and personalized learning experiences.
            </h3>
            <div className="mt-5">
              <Button
                variant="secondary"
                className="border border-orange-300 shadow-md shadow-orange-200"
              >
                {isSignedIn ? (
                  <NavLink to="/dashboard" className="text-orange-900">
                    Get Started
                  </NavLink>
                ) : (
                  <NavLink to="https://leading-wallaby-6.accounts.dev/sign-in#/?redirect_url=http%3A%2F%2Flocalhost%3A5174%2F">
                    Get Started
                  </NavLink>
                )}

                <ChevronRight className="ml-1 border-none h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className=" flex  w-0 md:w-[400px]   justify-center">
            <img
              className=" md:ml-[200px]"
              src="logos1-removebg-preview.png"
              alt="logo"
            />
          </div>
        </div>
        <div>
          <h2 className="text-4xl text-center md:mt-32 font-bold bg-gradient-to-r md:pb-2 from-orange-500 to-purple-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Our Vision
          </h2>
          <div className="text-center flex justify-center">
            <div className="grid grid-cols-2">
              <div>
                <img
                  className="p-10  hover:shadow-md"
                  src="ourVision_about_us_page.jpg"
                  alt=""
                />
              </div>
              <div>
                <h3 className="p-10 mt-20 text-center  text-slate-600 font-thin text-xl">
                  We envision a world where every student has the tools and
                  resources they need to succeed in their academic journey. By
                  leveraging technology, we aim to create a seamless learning
                  environment that fosters growth, understanding, and confidence
                  in tackling challenging subjects.
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-4xl text-center md:mt-32 font-bold bg-gradient-to-r md:pb-2 from-orange-500 to-purple-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Who We Are
            </h2>
          </div>

          <div>
            <div className="grid  grid-cols-2">
              <div className="mt-[80px]">
                <h3 className="   ">
                  <div className=" p-10 text-center  text-slate-600 font-thin text-xl">
                    Questify is a dedicated team of educators, technologists,
                    and designers passionate about education and technology. Our
                    diverse backgrounds enable us to create a comprehensive web
                    application that caters to students' needs across various
                    branches of study.
                  </div>
                </h3>
              </div>
              <div className="p-10 hover:shadow-md">
                <img src="about_us_who_we_are_image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-4xl text-center md:mt-32 font-bold bg-gradient-to-r md:pb-2 from-orange-500 to-purple-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              What We Offer
            </h2>
          </div>
          <div className="flex justify-center">
            <div className="ml-25 mr-25 mt-10">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-[100%]"
              >
                <CarouselContent>
                  {cara.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card className="w-[250px] h-[360px] bg-orange-100">
                          {/* <CardHeader>
                            <CardTitle>Create project</CardTitle>
                            <CardDescription>
                              Deploy your new project in one-click.
                            </CardDescription>
                          </CardHeader> */}
                          <CardHeader>
                            <CardTitle className="flex aspect-square items-center justify-center p-6">
                              <span className="text-lg text-center font-semibold">
                                {item.containt}
                              </span>
                            </CardTitle>
                            <CardDescription>
                              {item.description}
                            </CardDescription>
                          </CardHeader>
                          {/* <CardElement></CardElement> */}
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
        <h2 className="text-4xl text-center md:mt-32 font-bold bg-gradient-to-r md:pb-2 from-orange-500 to-purple-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Our Values
        </h2>
        <div className="md:grid md:grid-cols-2 ">
          <div className="flex justify-center items-center">
            <div className="md:w-[400px] w-[400px] m-4 md:m-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Integrity</AccordionTrigger>
                  <AccordionContent>
                    We are committed to providing high-quality, reliable content
                    that students can trust.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Innovation</AccordionTrigger>
                  <AccordionContent>
                    YWe embrace the latest educational technologies to enhance
                    the learning experience.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Inclusivity</AccordionTrigger>
                  <AccordionContent>
                    We believe that education should be accessible to everyone,
                    regardless of their background or resources.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Community</AccordionTrigger>
                  <AccordionContent>
                    We foster a supportive community of learners where students
                    can collaborate, share knowledge, and motivate each other.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div className="p-10">
            <h2 className="text-center text-orange-700 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
              Join Us on This Journey
            </h2>
            <div>
              <h3 className="   ">
                <div className=" p-10 text-center  text-slate-600 font-thin text-xl">
                  We invite you to be a part of our Questify community. Whether
                  you’re a student preparing for your exams or an educator
                  looking for innovative tools to support your students,
                  Questify is here to help you achieve your goals. Together,
                  let’s make learning a rewarding experience!
                </div>
              </h3>
            </div>
          </div>
        </div>
        <h2 className="text-4xl text-center md:mt-32 font-bold bg-gradient-to-r md:pb-2 from-orange-500 to-purple-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Meet Our Team
        </h2>
        <div className="m-20">
          <div className="md:grid md:grid-cols-3 grid grid-cols-1 gap-10">
            {Team.map((item, index) => {
              return (
                <>
                  <div
                    className="flex rounded-md shadow-xl  border p-3"
                    key={index}
                  >
                    <div className="">
                      <img
                        className="w-[500px] rounded-lg shadow-lg"
                        src={item.avt}
                        alt=""
                      />
                    </div>
                    <div className="ml-4 text-center flex  items-center text-slate-600 font-thin text-xl">
                      <h2>{item.name}</h2>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <h2 className="text-4xl text-center md:mt-32 font-bold bg-gradient-to-r md:pb-2 from-orange-500 to-purple-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Join Us on This Journey
        </h2>
        <div className="md:grid md:grid-cols-2">
          <div>
            <img className="p-4" src="aboutUs_journeyimage.jpg" alt="" />
          </div>
          <div className="mt-[80px]">
            <h3 className="   ">
              <div className=" p-10 text-center  text-slate-600 font-thin text-xl">
                Questify is a dedicated team of educators, technologists, and
                designers passionate about education and technology. Our diverse
                backgrounds enable us to create a comprehensive web application
                that caters to students' needs across various branches of study.
              </div>
            </h3>
          </div>
        </div>
        <div>
          <h2 className="text-4xl text-center md:mt-32 font-bold bg-gradient-to-r md:pb-2 from-orange-500 to-purple-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1">
            <div>
              <Contact />
            </div>
            <div>
              <div className=" p-10 text-center  text-slate-600 font-thin text-xl">
                We’d love to hear from you! If you have any questions, feedback,
                or suggestions, please reach out to us at
                sunnyrajbodhgaya13@gmail.com. Follow us on{" "}
                <a href="https://www.instagram.com/sunny_sharma8540/">
                  Instagram
                </a>{" "}
                for updates, tips, and inspiration.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-4xl text-center md:mt-32 font-bold bg-gradient-to-r md:pb-2 from-orange-500 to-purple-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Our Commitment to Privacy
            </h2>
          </div>
          <div className=" p-10 text-center  text-slate-600 font-thin text-xl">
            At Questify, we value your privacy and are committed to protecting
            your personal information. Our platform is designed with your
            security in mind, ensuring that your data is safe and confidential.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
