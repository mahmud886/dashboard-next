import React from 'react';
import MoviesRequest from "@/components/MoviesRequest";

const MovieRequestPage = () => {

  return (
      <div className="w-full min-h-[100vh] flex justify-center pt-24 text-white">
          <div className="w-full p-3 md:w-3/5">
              <div className="grid items-center grid-cols-12 gap-y-2 md:gap-y-6">
                  <div className="col-span-12 mb-2 md:col-span-3">
                      <label className="font-bold text-black dark:text-white text-md">Name</label>
                  </div>
                  <div className="col-span-12 mb-2 md:col-span-9">
                      <input type="text" placeholder="Enter your name"
                             className="w-full px-5 py-3 text-black placeholder-black bg-white border border-gray-500 dark:placeholder-gray-100 dark:text-white text-md bg-opacity-20 rounded-xl"
                      />
                  </div>
                  <div className="col-span-12 mb-2 md:col-span-3">
                      <label className="font-bold text-black text-md dark:text-white">Phone Number</label>
                  </div>
                  <div className="col-span-12 mb-2 md:col-span-9">
                      <input type="text" placeholder="Enter your phone number"
                             className="w-full px-5 py-3 text-black placeholder-black bg-white border border-gray-500 dark:placeholder-gray-100 dark:text-white text-md bg-opacity-20 rounded-xl"
                      />
                  </div>
                  <div className="col-span-12 mb-2 md:col-span-3"></div>
                  <MoviesRequest/>
                  <div className="col-span-12 md:col-span-3">
                      <label className="font-bold text-black dark:text-white text-md">Description</label>
                  </div>
                  <div className="col-span-12 md:col-span-9">
            <textarea type="text" placeholder="Write a message"
                      className="placeholder-black dark:placeholder-gray-100 w-full min-h-[100px] px-5 py-3 text-sm text-black dark:text-white bg-white bg-opacity-20 border border-gray-500 rounded-xl"
            ></textarea>
                  </div>
                  <div className="col-span-3"></div>
                  <div className="col-span-12 md:col-span-9">
                      <div className="grid grid-cols-12 gap-4">
                          <div className="col-span-6">
                              <button className="w-full px-6 py-4 text-white bg-red-700 border-none rounded-md">Submit
                              </button>
                          </div>
                          <div className="col-span-6">
                              <button
                                  className="w-full px-6 py-4 text-black bg-transparent border border-red-700 rounded-md dark:text-white hover:bg-red-700">Reset
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default MovieRequestPage;