import Button from "./Button";

export default function ProjectSideBar({onStartAddProject}){
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <Button onCLick={onStartAddProject}>+Add Projects</Button>
      </div>
    </aside>
  );
}

//px is used to have padding left and right py is used to have padding bottom and top w-1/3 means have width by one third md: means for fixed screen have this dimensions for bigger screen to have smaller or bigger text we use text-xs or text-xl, rounded to have rounded corners along with for what we want bg stone refers to the background color and text-stone refers to the text color