const App: React.FC = (): JSX.Element => {
  return (
    <div className="flex">
      <div className={`w-72 h-screen bg-light-grey`}>Sidebar</div>
      <div className="p-7 text-2x1 font-semibold flex-1 h-screen">
        <h1>HomePage</h1>
      </div>
    </div>
  )
}

export default App
