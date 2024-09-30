import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import NavigationBar from "../../NavigationBar";
import NavigationBarSignedIn from "../../NavigationBarSignedIn";
// import Nav from "./Nav";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import NavigationBar1 from "../../NavigationBar1";
import NavigationBarSignedIn1 from "../../NavigationBarSignedIn1";
import { jeemain_sample_1 } from "../../../JSON/JEEMAIN/jeemain";
import { RightOutlined } from "@ant-design/icons";

const SamplePaper1 = () => {
  //   const [selectedOption, setSelectedOption] = useState(null);
  //   const [BackColor, setBackColor] = useState(null);
  const [toggle, setToggle] = useState(false);
  //   const [question, setQuestion] = useState(jeemain_sample_1);
  //   const [question1, setQuestion1] = useState(jeemain_sample_1);
  //   const [initial, setInitial] = useState(0);
  //   const [userAnswer, setUserAnswer] = useState("");
  //   const [userAnswerID, setUserAnswerID] = useState("");

  //   componet start answer

  const [questions, setQuestion] = useState(jeemain_sample_1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(60);
  const [finalTimer, setFinalTimer] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 30,
    seconds: 0,
  });

  const handleToggel = () => {
    setToggle(!toggle);
  };

  //   const handleClick_and_selected = (option, optionID) => {
  //     console.log(option);
  //     console.log(optionID);
  //     setUserAnswer(option);
  //   };
  //   const handelNext = () => {
  //     setInitial((p) => p + 1);
  //     console.log(question);
  //     setQuestion1((question1.answer = userAnswer));
  //     console.log(question1);
  //   };

  //   component start function

  const handleSubmit = (ans) => {
    if (ans === answer) {
      setScore(score + 1);
    }

    setCurrentQuestion((p) => p + 1);
  };
  const handleSubmitTest = (ans) => {
    if (ans === answer) {
      setScore(score + 1);
    }
    setShowScore(true);
    setFinalTimer(timer);
  };

  //   timer useeffect

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => {
        const totalSeconds =
          prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds;

        if (totalSeconds <= 0) {
          clearInterval(timerId);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        setFinalTimer(totalSeconds);
        const newTotalSeconds = totalSeconds - 1;

        return {
          hours: Math.floor(newTotalSeconds / 3600),
          minutes: Math.floor((newTotalSeconds % 3600) / 60),
          seconds: newTotalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(timerId); // Cleanup the timer on unmount
  }, []);
  // time use effect end
  //   useEffect(() => {
  //     const time = setInterval(() => {
  //       if (timer > 0) {
  //         setTimer(timer - 1);
  //       } else {
  //         setFinalTimer(timer);
  //
  //       }
  //     }, 1000);
  //     return () => {
  //       clearInterval(time);
  //     };
  //   }, [timer]);

  //   pagination to particular wustion

  const handleClickToGetId = (id, it) => {
    setCurrentQuestion(id - 1);
    console.log(it);
  };
  return (
    <div>
      <div className="w-[100vw] h-[100vh] md:w-[100%] bg-gradient-to-t from-white from-30% to-green-100 to-70%">
        <nav className=" h-13 w-[100vw] md:h-18 shadow md:shadow-sm shadow-blue-65 md:shadow-green-500/50">
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
                              <SignInButton className="p-1 md:pl-3 md:pr-3 md:pt-2 md:pb-2" />
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

        <NavLink className="p-4 mt-2" to="/dashboard">
          Back to dashboard
        </NavLink>

        {/* <div className=" grid grid-cols-12 gap-2">
          <div className="md:border-l-2 md:col-span-8 m-3 p-4   ">
            <h2 className="text-2xl ">
              <strong> Q. {question[initial].id}</strong>
            </h2>
            <h2 className="text-lg font-mono border">
              {question[initial].question}
            </h2>
            <div className="grid grid-cols-2">
              {question[initial].options.map((item, index) => {
                return (
                  <>
                    <div key={index}>
                      {" "}
                      <button
                        className={`bg-${BackColor} border w-[200px] mt-4 mb-4 p-2`}
                        onClick={() => {
                          handleClick_and_selected(item.option, item.option_id);
                        }}
                      >
                        {item.option}
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
            <div className=" flex justify-end   ">
              <div className="mr-3">
                {initial > 0 ? (
                  <>
                    <button
                      onClick={() => {
                        setInitial((p) => p - 1);
                      }}
                    >
                      Previous
                    </button>
                  </>
                ) : null}
              </div>
              <div className=" ">
                {initial == question.length - 1 ? (
                  <button>Submit</button>
                ) : (
                  <button onClick={handelNext}>Next</button>
                )}
              </div>
            </div>
          </div>
          <div className="md:border-l-2 md:col-span-4 m-3">{}</div>
        </div> */}

        {showScore ? (
          <div className=" grid mt-[90px] justify-center text-center">
            <div className="w-[400px] p-4  bg-purple-600 shadow-lg text-white rounded-lg">
              <div style={{ fontSize: "25px" }}>Your total Score is</div>
              <div style={{ fontSize: "20px", padding: "1rem" }}>
                {score} {score <= 2 ? "🎆" : "🎇"}
              </div>
              <div style={{ padding: "0rem" }}>
                {score} correct answers out of {questions.length}
              </div>
              <div style={{ marginTop: "7rem", fontSize: "13px" }}>
                {(score / questions.length) * 100} % -- Congratulations
              </div>
              <div style={{ fontSize: "13px" }}>
                {score <= 2
                  ? "Work Hard next time do better"
                  : "You are a spelling champion"}
              </div>
            </div>
          </div>
        ) : (
          <div className="question_field ">
            <div className="question_field_content" key={questions.id}>
              <div className="grid grid-cols-2 ">
                <div className=" m-2 p-4 bg-white rounded-lg shadow-lg">
                  <div className="flex  justify-end text-center ">
                    <div className="flex ">
                      <div className="mr-3">
                        <Drawer>
                          <DrawerTrigger className="shadow-lg border bg-purple-300">
                            Finish Text
                          </DrawerTrigger>
                          <DrawerContent>
                            <DrawerHeader>
                              <DrawerTitle>
                                Are you sure want to submit the test?
                              </DrawerTitle>
                              <DrawerDescription>
                                The Result will be evaluated till the question
                                you have done
                              </DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                              <div className="flex justify-center">
                                <Button
                                  onClick={() =>
                                    handleSubmitTest(
                                      questions[currentQuestion].answer
                                    )
                                  }
                                >
                                  Submit
                                </Button>
                              </div>
                              <div className="flex justify-center">
                                <DrawerClose>
                                  <Button variant="destructive">Cancel</Button>
                                </DrawerClose>
                              </div>
                            </DrawerFooter>
                          </DrawerContent>
                        </Drawer>
                      </div>
                      <div className="text-2xl font-mono mt-2 ">
                        <strong>
                          {String(timeLeft.hours).padStart(2, "0")}:
                          {String(timeLeft.minutes).padStart(2, "0")}:
                          {String(timeLeft.seconds).padStart(2, "0")}
                        </strong>
                      </div>
                      <p className=" text-gray-600 ml-2 mt-[14px]">
                        <strong>Min</strong>
                      </p>
                    </div>
                  </div>
                  <div className="field_question ">
                    <h2 className="text-xl">
                      <strong>Q. ({currentQuestion + 1}) </strong>
                    </h2>
                    <h2 className="text-xl  w-[600px] h-[100px] overflow-x-auto">
                      {questions[currentQuestion].question}
                    </h2>
                  </div>
                  <div className="grid grid-cols-2 ">
                    {questions[currentQuestion].options.map((item) => {
                      return (
                        <>
                          <div className="question_option">
                            <button
                              className="button-26 m-2 w-[250px] shadow-lg bg-green-300"
                              onClick={() => setAnswer(item)}
                            >
                              {item}
                            </button>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className=" flex float-end">
                    {currentQuestion === 0 ? null : (
                      <button
                        className="button-37 mr-3 shadow-lg bg-fuchsia-200"
                        onClick={() => setCurrentQuestion((p) => p - 1)}
                      >
                        Previous
                      </button>
                    )}
                    {currentQuestion === questions.length - 1 ? (
                      <button
                        className="button-62 shadow-lg bg-orange-300"
                        onClick={() =>
                          handleSubmitTest(questions[currentQuestion].answer)
                        }
                      >
                        Submit
                      </button>
                    ) : (
                      <button
                        className="button-38 shadow-lg bg-yellow-200"
                        onClick={() =>
                          handleSubmit(questions[currentQuestion].answer)
                        }
                      >
                        Next 
                      </button>
                    )}
                  </div>
                </div>
                <div>
                  {questions[currentQuestion].Image ? (
                    <div className="question_image flex justify-center">
                      <img
                        className="w-[400px]   m-2 p-4 shadow-xl  border  rounded-lg"
                        src={questions[currentQuestion].Image}
                        alt="question "
                      />
                    </div>
                  ) : null}
                </div>
              </div>
              <hr />
              <div className="">
                {questions &&
                  questions.map((item, index) => {
                    return (
                      <>
                        <button
                          className="m-1 shadow-lg bg-slate-300"
                          onClick={() => {
                            handleClickToGetId(item.id, item);
                          }}
                        >
                          {item.id}
                        </button>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SamplePaper1;
