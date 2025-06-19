import React from "react";

const page = () => {

  // const navigate =;

  const handleSubmit = () => {
    // navigate('/about');
  }

  return (
    <div>
      <form action="" className="flex items-center justify-center h-screen">
        <div className="bg-blue-100 p-10 rounded-lg">
          <div>
            <input
              className="px-4 py-2 mb-5 bg-slate-50 border-orange-300 border-[1.5px] rounded-md"
              type="text"
              placeholder="Enter your name...."
            />
          </div>
          <div>
            <input
              className="px-4 py-2 mb-5 bg-slate-50 border-orange-300 border-[1.5px] rounded-md"
              type="text"
              placeholder="Enter your mobile..."
            />
          </div>
          <div>
            <button type="submit" className="bg-amber-700 text-slate-50 px-4 py-2 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default page;
