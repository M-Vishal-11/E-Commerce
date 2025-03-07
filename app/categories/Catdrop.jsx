import Card from "../Card.jsx"

const CatDrop= ({idkey,name})=>{
    return (
        <div className="w-full max-w-full mx-auto mt-0">
          <div className="border-b max-w-full border-gray-300">
            <input type="checkbox" id={idkey} className="hidden peer" />
            <label htmlFor={idkey} className="w-full text-left p-4 font-semibold bg-green-600 text-white hover:bg-green-800 hover:text-white peer-checked:bg-green-800 peer-checked:text-white block cursor-pointer">
              {name}
              <svg
            className="w-5 h-5 float-right"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
            </label>
            <div className="bg-linear-to-br from-lime-300 to-green-700 ml-auto mr-auto max-h-0 overflow-hidden opacity-0 transition-all duration-200 peer-checked:max-h-full peer-checked:opacity-100 peer-checked:p-4">
              <div className="ml-auto mr-auto max-w-fit">
                <Card/> 
                <Card/>
                <Card/>
                <Card/>
              </div>
              <div className="ml-auto mr-auto max-w-fit">
                <Card/> 
                <Card/>
                <Card/>
                <Card/>
              </div>
            </div>
          </div>
        </div>
  );
}
export default CatDrop;