import { AiOutlinePlus } from 'react-icons/ai'

const Today: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1 className="text-3xl">Today</h1>

      <div className="flex flex-row mt-10 p-2 bg-light-grey items-center hover:text-slate-500 w-fit rounded-md">
        <span className="pr-2">
          <AiOutlinePlus />
        </span>
        <button>Add Task</button>
      </div>
    </div>
  )
}

export default Today
