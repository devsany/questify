import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const faqs = [
  {
    question: "What is the purpose of this quiz website?",
    answer:
      "Our quiz website helps users enhance their knowledge through various quizzes across different subjects.",
  },
  {
    question: "How do I create an account?",
    answer:
      "You can create an account by clicking on the 'Sign Up' button and filling out the registration form.",
  },
  {
    question: "Can I track my progress?",
    answer: "Yes, you can track your progress through your profile dashboard.",
  },
  {
    question: "Are the quizzes timed?",
    answer:
      "Some quizzes are timed, while others allow you to complete them at your own pace.",
  },
  {
    question: "How do I contact support?",
    answer: "You can contact support via the 'Help' section on our website.",
  },
  {
    question: "What types of quizzes are available?",
    answer:
      "We offer a variety of quizzes, including multiple-choice, true/false, and fill-in-the-blank formats across subjects like math, science, history, and language arts.",
  },
  {
    question: "Is there a fee to access the quizzes?",
    answer:
      "Most quizzes are free to access. However, some premium quizzes may require a subscription or one-time payment",
  },
  {
    question: "Can I retake a quiz?",
    answer:
      "Yes, you can retake any quiz as many times as you like. Your highest score will be recorded.",
  },
  {
    question: "Do you offer quizzes for specific age groups?",
    answer:
      "Yes, we have quizzes tailored for different age groups, from elementary school students to adults.",
  },
  {
    question: "How do I give feedback on a quiz?",
    answer:
      "You can provide feedback through the 'Feedback' option available at the end of each quiz or by contacting our support team.",
  },
  {
    question: "Can I create my own quizzes?",
    answer:
      "Currently, users cannot create their own quizzes, but we are planning to implement this feature in the future!",
  },
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, go to the login page and click on ‘Forgot Password?’ Follow the instructions in the email you receive to reset it.",
  },
  {
    question: "Can I create my own quizzes?",
    answer:
      "Currently, users cannot create their own quizzes, but we are planning to implement this feature in the future!",
  },
  {
    question: "What if I encounter a technical issue?",
    answer:
      "If you face any technical issues, please reach out to our support team via the 'Help' section, and we will assist you as soon as possible.",
  },
];

const User_card = [
  {
    id: 1,
    img: "download 1.png",
    name: "- Ritik Kumar",
    Rank: "1423",
    catogery: "JEE MAIN",
  },
  {
    id: 2,
    img: "download 2.png",
    name: "- Sudanshu Roy",
    Rank: "97.6%",
    catogery: "10th Board, (CBSE)",
  },
  {
    id: 3,
    img: "download 1.png",
    name: "- Riya Singh",
    Rank: "96.2%",
    catogery: "12th Board, (CBSE)",
  },
  {
    id: 4,
    img: "download 2.png",
    name: "- Shaheb Srivastava",
    Rank: "95.6%",
    catogery: "12th Board, (BSEB)",
  },
];

const Accordian = () => {
  return (
    <div>
      <div className="flex justify-center">
        <h2 className="text-center pb-[30px] pt-[60px] text-blue-700 scroll-m-20 border-b pt-4 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          User FAQ
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="m-5">
          <Accordion type="single" collapsible>
            {faqs &&
              faqs.map((item, index) => {
                return (
                  <>
                    <AccordionItem value={`item-${index + 1}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <div className="m-3 text-slate-700">{item.answer}</div>
                      </AccordionContent>
                    </AccordionItem>
                  </>
                );
              })}
          </Accordion>
        </div>
        <div>
          <h2 className="text-center   text-blue-700 scroll-m-20 border-b pt-4 pb-2 text-2xl font-semibold tracking-tight first:mt-0">
            Our Student Acchivement
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-2 md:m-1 ">
            {User_card &&
              User_card.map((item, index) => {
                return (
                  <>
                    <div
                      className="p- text-center md:m-4 m-2 border text-center rounded-sm"
                      key={index}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>
                            <div className="text-blue-700 text-xl">
                              <img src={item.img} alt="" />
                            </div>{" "}
                          </CardTitle>
                          <CardDescription>{item.name}</CardDescription>
                        </CardHeader>
                        <CardContent>{item.Rank}</CardContent>
                        <CardFooter>
                          {" "}
                          <CardDescription>
                            {item.catogery}
                          </CardDescription>{" "}
                        </CardFooter>
                      </Card>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
