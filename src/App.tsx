import Sidebar from './components/Sidebar'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7 text-2x1 font-semibold flex-1 h-screen">
        <h1>HomePage</h1>
      </div>
    </div>
  )
}

export default App
