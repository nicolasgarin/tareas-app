import TaskList from "./components/TaskList"


function App() {

  return (
    <div className="container max-w-[600px] mx-auto px-4 mt-8 text-slate-100 flex flex-col gap-8">
      <h1 className='flex justify-center text-4xl'>Tareas</h1>
      <TaskList />
    </div>
  )
}

export default App
