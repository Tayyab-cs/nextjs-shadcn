"use client";
import { Button } from "@/components/ui/button";
import DarkMode from "@/components/common/dark-mode";

function HomePage() {
  // Declarations...

  // Event functions...
  const onClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <div className="p-4 flex flex-row justify-end">
        <DarkMode/>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 h-[100vh]">
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Registration Form
        </h2>
        <Button
          className="btn1"
          variant={"default"}
          size={"lg"}
          onClick={onClick}
        >
          Shadcn Btn
        </Button>
      </div>
    </div>
  );
}

export default HomePage;
