import React from 'react';
import Image from "next/image";
const UserProfileUpdateForm = () => {
    return (
        <div
            className="bg-gradient-to-b from-[#E9E9E9] to-transparent dark:from-[#2A2B2C] dark:to-[rgba(0,0,0,1)] dark:via-[rgba(0,0,0,1)] absolute flex flex-col items-center w-full h-full gap-8 text-white z-1 top-52 rounded-t-3xl"
            style={{boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.5) inset'}}>
            <form noValidate action="" className="ng-untouched ng-pristine ng-valid">
                <div className="flex flex-col justify-center items-center flex-nowrap">
                    <Image src="/images/User/profilepic.png" alt="user" width={165} height={165}
                           className="w-[165px] h-[165px] mt-[-80px] border-2 border-[#E83431] rounded-full"/>
                    <input type="file" id="myfile" style={{display: 'none'}}/>
                    <label htmlFor="myfile"
                           className="w-[36px] h-[36px] bg-[#E83431] rounded-full flex justify-center items-center absolute top-[3rem] ml-[100px] cursor-pointer">
                        <i className="fa-solid fa-camera-retro text-[22px]" aria-hidden="true"></i>
                    </label>
                </div>
                <div className="space-y-12">
                    <div className="pb-8">
                        <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 md:grid-cols-12">
                            <div className="sm:col-span-3 md:col-span-6">
                                <label htmlFor="first-name"
                                       className="block text-sm font-medium leading-6 text-black dark:text-white md:text-base">First
                                    name</label>
                                <div className="mt-2">
                                    <input type="text" name="first-name" id="first-name" autoComplete="given-name"
                                           placeholder="Enter your first name"
                                           className="w-full h-[50px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-black dark:text-white bg-[#E9E9E9] dark:bg-[#6D6E6E] border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 pr-10 appearance-none"
                                           defaultValue="Enter your First Name"/>
                                </div>
                            </div>
                            <div className="sm:col-span-3 md:col-span-6">
                                <label htmlFor="last-name"
                                       className="block text-sm font-medium leading-6 text-black dark:text-white md:text-base">Last
                                    name</label>
                                <div className="mt-2">
                                    <input type="text" name="last-name" id="last-name" autoComplete="family-name"
                                           placeholder="Enter your last name"
                                           className="w-full h-[50px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-black dark:text-white bg-[#E9E9E9] dark:bg-[#6D6E6E] border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 pr-10 appearance-none"/>
                                </div>
                            </div>
                            <div className="sm:col-span-6 md:col-span-6">
                                <label htmlFor="date"
                                       className="block text-sm font-medium leading-6 text-black dark:text-white md:text-base">Date
                                    of Birth</label>
                                <div className="relative mt-2 text-black cursor-pointer dark:white">
                                    <input type="date" id="date" name="date" placeholder="Select date"
                                           className="w-full h-[50px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-black dark:text-white bg-[#E9E9E9] dark:bg-[#6D6E6E] border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 pr-10 appearance-none"/>
                                </div>
                            </div>
                            <div className="sm:col-span-6 md:col-span-6 h-[50px] mt-4">
                                <label htmlFor="sex"
                                       className="block text-sm font-medium leading-6 text-black dark:text-white md:text-base">Sex</label>
                                <div className="mt-2">
                                    <div className="flex gap-x-3">
                                        <label className="flex items-center space-x-2 cursor-pointer">
                                            <input id="male" value="Male" type="radio" name="sex"
                                                   className="custom-radio-for-sex"/>
                                            <span className="text-black dark:text-white">Male</span>
                                        </label>
                                        <label className="flex items-center space-x-2 cursor-pointer">
                                            <input id="female" value="Female" type="radio" name="sex"
                                                   className="custom-radio-for-sex"/>
                                            <span className="text-black dark:text-white">Female</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-3 md:col-span-4">
                                <label htmlFor="country"
                                       className="block text-sm font-medium leading-6 text-black dark:text-white md:text-base">Country</label>
                                <div className="mt-2 relative">
                                    <select id="country" name="country" autoComplete="off"
                                            className="w-full h-[50px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-black dark:text-white bg-[#E9E9E9] dark:bg-[#6D6E6E] border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 pr-10 appearance-none">
                                        <option value="Bangladesh" selected>Bangladesh</option>
                                        <option value="United State of America">United State of America</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                    </select>
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             className="h-4 w-4 fill-current">
                                            <path
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-3 md:col-span-4">
                                <label htmlFor="city"
                                       className="block text-sm font-medium leading-6 text-black dark:text-white md:text-base">City</label>
                                <div className="mt-2 relative">
                                    <select id="city" name="city" autoComplete="off"
                                            className="w-full h-[50px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-black dark:text-white bg-[#E9E9E9] dark:bg-[#6D6E6E] border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 pr-10 appearance-none">
                                        <option value="Dhaka" selected>Dhaka</option>
                                        <option value="Chittagong">Chittagong</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                    </select>
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             className="h-4 w-4 fill-current">
                                            <path
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="sm:col-span-3 md:col-span-4">
                                <label htmlFor="area"
                                       className="block text-sm font-medium leading-6 text-black dark:text-white md:text-base">Area</label>
                                <div className="mt-2 relative">
                                    <select id="area" name="area" autoComplete="off"
                                            className="w-full h-[50px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-black dark:text-white bg-[#E9E9E9] dark:bg-[#6D6E6E] border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 pr-10 appearance-none">
                                        <option value="Mirpur" selected>Mirpur</option>
                                        <option value="Dhanmondi">Dhanmondi</option>
                                        <option value="Jatrabari">Jatrabari</option>
                                    </select>
                                    <div
                                        className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             className="h-4 w-4 fill-current">
                                            <path
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sm:col-span-12 md:col-span-12 md:flex md:justify-center md:items-center">
                        <button
                            type="button"
                            className="input input-bordered w-[322px] h-[50px] text-white dark:text-white text-[16px] font-semibold rounded-lg bg-[#E1342D] hover:bg-red-700 dark:bg-[##E1342D] dark:hover:bg-red-700"
                        >
                            Done
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserProfileUpdateForm;