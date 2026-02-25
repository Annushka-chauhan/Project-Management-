import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSideBar from "./components/ProjectsSideBar";
import {useState} from 'react';
function App() {
   const [ProjectsState,setProjectsState] = useState({
    //undefined means doing nothing
    selectedProjectId: undefined,
    projects: []
   });
   function handleStartAddProject(){
    setProjectsState(prevState =>{
      return {
        //null means the signal to us that we are adding a new project 
        ...prevState,
        selectedProjectId: null,
      }
    });
   }
   function handleAddProject(projectData){
    setProjectsState(prevState=> {
      const newProject ={
       ...projectData,
       id: Math.random(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects,newProject]
      };
    })
   }
   let content;
   if(ProjectsState.selectedProjectId === null){
    content =<NewProject onAdd={handleAddProject}/>
   }else if(ProjectsState.selectedProjectId === undefined){
    content= <NoProjectSelected onStartAddProject={handleStartAddProject}/>
   }
  return (
    <main className="h-screen my-8 flex gap-8 ">
     <ProjectSideBar onStartAddProject={handleStartAddProject}/>
    {/* // <NoProjectSelected onStartAddPRoject={handleStartAddProject}/> */}
     {content}
    </main>
  );
}

export default App;
