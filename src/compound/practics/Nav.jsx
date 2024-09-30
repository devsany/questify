// App.js
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Navbar = () => {
  const handleScrollTo = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    // setTimeout(() => {
    //   // Scroll up by 100px after scrolling into view
    //   window.scrollBy({
    // top: -100,
    //     behavior: "smooth",
    //   });
    // }, 1000);
  };

  return (
    <nav className=" h-[75vh] overflow-y-auto">
      <ul>
        <li className="p-4 text-sm bg-gray-50 m-1 rounded-lg ">
          <a className="text-black" href="#mission" onClick={handleScrollTo}>
            Introduction
          </a>
        </li>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              <li className="pl-4 pr-2 ml-5 pb-2 pt-2 text-sm bg-gray-50 m-1 rounded-lg ">
                <a
                  className="text-black pl-2"
                  href="#vision"
                  onClick={handleScrollTo}
                >
                  Our Vision
                </a>
              </li>
              <li className="pl-4 pr-2 ml-5 pb-2 pt-2 text-sm bg-gray-50 m-1 rounded-lg ">
                <a
                  className="text-black pl-2"
                  href="#vision1"
                  onClick={handleScrollTo}
                >
                  Our Thought
                </a>
              </li>
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem> */}
          {/* <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
        <li className="p-4 text-sm bg-gray-50 m-1 rounded-lg ">
          <a className="text-black" href="#login" onClick={handleScrollTo}>
            User Login
          </a>
        </li>

        <li className="p-4 text-sm bg-gray-50 m-1 rounded-lg ">
          <a className="text-black" href="#dashboard" onClick={handleScrollTo}>
            Dashboard Overview
          </a>
        </li>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Taking a Test</AccordionTrigger>
            <AccordionContent>
              <li className="pl-4 pr-2 ml-5 pb-2 pt-2 text-sm bg-gray-50 m-1 rounded-lg ">
                <a
                  className="text-black pl-2"
                  href="#test"
                  onClick={handleScrollTo}
                >
                  Test Duration Options:
                </a>
              </li>
              <li className="pl-4 pr-2 ml-5 pb-2 pt-2 text-sm bg-gray-50 m-1 rounded-lg ">
                <a
                  className="text-black pl-2"
                  href="#test1"
                  onClick={handleScrollTo}
                >
                  How to Start a Test
                </a>
              </li>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <li className="p-4 text-sm bg-gray-50 m-1 rounded-lg ">
          <a className="text-black" href="#overview" onClick={handleScrollTo}>
            Application Overview
          </a>
        </li>
        <li className="p-4 text-sm bg-gray-50 m-1 rounded-lg ">
          <a className="text-black" href="#support" onClick={handleScrollTo}>
            Contact Support
          </a>
        </li>
        <li className="p-4 text-sm bg-gray-50 m-1 rounded-lg ">
          <a className="text-black" href="#faq" onClick={handleScrollTo}>
            FAQs
          </a>
        </li>
        <li className="p-4 text-sm bg-gray-50 m-1 rounded-lg ">
          <a className="text-black" href="#ai" onClick={handleScrollTo}>
            Al & Chatbot
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
