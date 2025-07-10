const VritTech = () => {
  return (
    <div className="bg-blue-800 text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="w-full flex flex-wrap md:flex-nowrap items-center">
        <div className="md:w-1/2 mt-[-120px]">
          <h1 className="text-7xl md:text-8xl font-bold leading-tight ml-18">
            Frontend <br />
            Assessment
          </h1>

          {/* Logo */}
          <div className="text-white ml-18 top-150 absolute">
            <h1 className="text-4xl font-bold tracking-tight">
              Vrit<span className="font-light">Tech</span>
            </h1>
          </div>
        </div>

        {/* Cards */}
        <div className="h-[500px] w-full relative">
          <div className="absolute top-[-100px] right-0 w-72 h-80 bg-white rounded-xl fade-in delay-1 shadow-xl">
            <img
              src="/images/task2.png"
              alt="task1"
              className="rounded-lg w-full h-full"
            />
          </div>
          <div className="absolute bottom-[-150px] right-0 w-80 h-96 bg-white rounded-xl fade-in delay-2 shadow-xl z-10">
            <img
              src="/images/task1.png"
              alt="task2"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-120 left-30 transform -translate-x-1/2 -translate-y-1/2 w-72 h-80 bg-white rounded-xl fade-in delay-3 shadow-xl">
            <img
              src="/images/task3.png"
              alt="task3"
              className="rounded-lg w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VritTech
