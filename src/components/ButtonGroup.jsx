export default function ButtonGroup({changeHairStyle}) {
  return (
    <div className="flex flex-col gap-4 ">
         <div>
         <h1 className="text-xs font-bold mb-2">ACCESSORIZE THE ALPACA</h1>
         <div className="grid grid-cols-3 px-2 gap-2 ">
            <button className="text-white bg-blue-800 font-bold border rounded-full px-4 py-1 border-blue-400 ">
              Hair
            </button>
            <button className="text-blue-400 border rounded-full px-4 py-1 border-blue-400">
              Ears
            </button>
            <button className="text-blue-400 border rounded-full px-4 py-1 border-blue-400">
              Eyes
            </button>
            <button className="text-blue-400 border rounded-full px-4 py-1 border-blue-400">
              Mouth
            </button>
            <button className="text-blue-400 border rounded-full px-4 py-1 border-blue-400">
              Neck
            </button>
            <button className="text-blue-400 border rounded-full px-4 py-1 border-blue-400">
              Leg
            </button>
          </div>
          <div className="flex px-2 gap-2 mt-2">
          <button className="text-blue-400 border rounded-full px-4 py-1 border-blue-400">
              Accessories
            </button>
            <button className="text-blue-400 border rounded-full px-4 py-1 border-blue-400">
              background
            </button>
          </div>
         </div>

         <div>
         <h1 className="font-bold text-xs">STYLE</h1>
         <div className="grid grid-cols-3 px-2 gap-2">
            <button onClick={()=> changeHairStyle("quiff")} className="text-blue-400 border rounded-full px-4 py-1 border-blue-400 hover:bg-blue-800 hover:text-white">
            quiff
            </button>
            <button onClick={()=> changeHairStyle("default")} className="text-blue-400 border rounded-full px-4 py-1 border-blue-400 hover:bg-blue-800 hover:text-white">
             default
            </button>
            <button onClick={()=> changeHairStyle("bang")} className="text-blue-400 border rounded-full px-4 py-1 border-blue-400 hover:bg-blue-800 hover:text-white">
             bang
            </button>
            <button onClick={()=> changeHairStyle("curls")} className="text-blue-400 border rounded-full px-4 py-1 border-blue-400 hover:bg-blue-800 hover:text-white">
            curls
            </button>
            <button onClick={()=> changeHairStyle("elegant")} className="text-blue-400 border rounded-full px-4 py-1 border-blue-400 hover:bg-blue-800 hover:text-white">
            elegant
            </button>
            <button onClick={()=> changeHairStyle("short")} className="text-blue-400 border rounded-full px-4 py-1 border-blue-400 hover:bg-blue-800 hover:text-white">
            short
            </button>
          </div>
         </div>

        </div>
  )
}
