import logo from '../assets/Tooable-logos.jpeg'

const Sidebar: React.FC = (): JSX.Element => {
  return (
    <div className={`w-72 h-screen bg-light-grey`}>
      <div className="flex items-center flex-col w-full h-full">
        <div className="flex flex-row justify-center my-5">
          <img className="w-7 h-7 rounded-lg" src={logo} alt="mainlogo" />
          &nbsp;
          <p className="self-center font-mono">Tooable</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
