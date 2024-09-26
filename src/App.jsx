import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
// import Autoplay from "embla-carousel-autoplay";

const testmonial = [
  { id: 4, item: "This platform transformed your studying" },
  { id: 2, item: "A must-have for professional development" },
  { id: 3, item: "The best testing platform have ever used" },
  { id: 1, item: "Creating and managing tests has never been easier" },
];

const suggestion = [
  {
    id: 1,
    item: "This platform transformed your studying",
    description: "Instant feedback and engaging tests make all the difference!",
    name: "— Sarah J.",
  },
  {
    id: 2,
    item: "A must-have for professional development",
    description: "The analytics are a game changer!",
    name: "— Mr. Thompson, Teacher",
  },
  {
    id: 3,
    item: "The best testing platform have ever used",
    description: "Instant feedback accelerates my growth!",
    name: "— David R., Marketing Specialist",
  },
  {
    id: 4,
    item: "Creating and managing tests has never been easier",
    description: "Turns assessments into real learning opportunities!",
    name: "— Emily K.",
  },
];
function App() {
  const [num, setNum] = useState(3);
  const [toggle, setToggle] = useState(false);
  const { toast } = useToast();
  const handleShowMore = () => {
    toast({
      description: "Appear more",
    });
    setNum(suggestion.length);
    setToggle(true);
  };
  const handleShowLess = () => {
    setNum(3);
    setToggle(false);
  };
  // const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <>
      <div className="w-[97vw] md:w-[100%] bg-gradient-to-t from-white from-30% to-blue-200 to-70%">
        <nav className=" h-13 md:h-18 shadow md:shadow-sm shadow-blue-65 md:shadow-blue-500/50">
          {/* <NavLink to="/"></NavLink> */}
          <div className="flex bg-white  justify-between">
            <div>
              <img
                className=" w-[75px] md:w-[95px] ml-2 md:ml-5 m-2"
                src="logos1.png"
                alt="logo"
              />
            </div>
            <div>
              <header>
                <div> </div>
                <div className="m-5 ">
                  <header>
                    <SignedOut>
                      <div className="text-black border border-black rounded-xl">
                        <SignInButton className="p-1 md:pl-3 md:pr-3 md:pt-2 md:pb-2" />
                      </div>
                    </SignedOut>
                    <SignedIn>
                      <div className="p-1  w-[40px] h-[40px]  ">
                        <UserButton />
                      </div>
                    </SignedIn>
                  </header>
                </div>
              </header>
            </div>
          </div>
        </nav>
        <div className="flex justify-between p-[5px] md:p-[50px] ">
          <div className="w-[100vw] m-[75px]  md:w-1/2">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Transforming Tests into Learning Opportunities.
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              At{" "}
              <span className="bg-gradient-to-l text-white pb-1 pt-1 rounded pl-1 pr-1 from-teal-400 to-blue-500">
                {" "}
                Questify{" "}
              </span>{" "}
              , we transform assessments into learning opportunities. Our CBT
              Test platform provides instant feedback and personalized insights,
              empowering learners to grow and succeed. Redefine your testing
              experience with us!
            </p>
            <div className="mt-5">
              <Button
                variant="secondary"
                className="border border-blue-300 shadow-md shadow-blue-200"
              >
                Get Started{" "}
                <ChevronRight className="ml-1 border-none h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="w-0 md:w-[600px]">
            <img src="template_4-removebg-preview.png" alt="logo template" />
          </div>
        </div>
        <div>
          <h2 className="text-center text-blue-700 scroll-m-20 border-b pt-4 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Step to start
          </h2>
        </div>
        <div className="grid p-4 grid-cols-1 text-center md:grid-cols-4 gap-10">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="text-blue-700 text-xl">Sign in</div>
                </CardTitle>
                <CardDescription>
                  Sign In your self to get into test
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-800">Computer Based Test </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="text-blue-700 text-xl">Choose Section</div>{" "}
                </CardTitle>
                <CardDescription>
                  Select your Test (Quiz) Section
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-800">Test sections </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="text-blue-700 text-xl">Start Test</div>{" "}
                </CardTitle>
                <CardDescription>Never forget to Submit test</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-800">Submit Test</p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="text-blue-700 text-xl">Start Test</div>{" "}
                </CardTitle>
                <CardDescription>
                  Verify your answer when test end
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-800">Evaluation</p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div>
          <h2 className="text-center pb-[30px] pt-[60px] text-blue-700 scroll-m-20 border-b pt-4 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Testimonial
          </h2>
        </div>
        <div className="flex justify-center text-center text-xl text-blue-800">
          <Carousel
            // plugins={[plugin.current]}
            className="w-full max-w-xs "
            // onMouseEnter={plugin.current.stop}
            // onMouseLeave={plugin.current.reset}
            // className="w-full max-w-xs"
          >
            <CarouselContent>
              {testmonial.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <CarouselItem className="text-blue-800">
                          {item.item}
                        </CarouselItem>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious>
              <ChevronRight className="ml-1 border-none h-4 w-4" />
            </CarouselPrevious>

            <div>
              <CarouselNext></CarouselNext>
            </div>
          </Carousel>
        </div>
        <div>
          <h2 className="text-center pt-[60px] pb-[30px] text-blue-700 scroll-m-20 border-b pt-4 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            What our users says?
          </h2>

          <div className="grid grid-cols-1  md:m-5 md:grid-cols-3 ">
            {suggestion.slice(0, num).map((item, index) => {
              return (
                <>
                  <div>
                    <div className="p-1">
                      <Card>
                        <CardHeader>
                          <CardTitle>
                            <div className="text-blue-700 text-xl">
                              {item.item}
                            </div>{" "}
                          </CardTitle>
                          <CardDescription>{item.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-800">{item.name}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="flex justify-end m-3">
            {toggle ? (
              <Button variant="outline" onClick={handleShowLess}>
                Show less review
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={() => {
                  handleShowMore();
                }}
              >
                Show more review
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
