"use client"
import React, { useState } from 'react';
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import UserProfileUpdateForm from "@/components/UserProfileUpdateForm";
import Image from "next/image";

const UserProfileForm = () => {
    const [sex, setSex] = useState('');
    const [country, setCountry] = useState('Bangladesh');
    const [city, setCity] = useState('Dhaka');
    const [area, setArea] = useState('Mirpur');
    const [date, setDate] = useState(Date.now());
    const [showUpdateProfile, setShowUpdateProfile] = useState(false)

    const handleFormSubmit = () => {
        console.log('Form submitted!');
        setShowUpdateProfile(!showUpdateProfile)

    };
    return (
        <div className="container">
            {showUpdateProfile ? <div className="mt-16">
                    <UserProfileUpdateForm/>
                </div>
                : <div
                    className="bg-gradient-to-b from-[#E9E9E9] to-transparent dark:from-[#2A2B2C] dark:to-[rgba(0,0,0,1)] dark:via-[rgba(0,0,0,1)] w-full h-full flex flex-col items-center absolute z-1 top-52 rounded-t-3xl gap-8 text-white shadow-inner"
                    style={{boxShadow: '0px 8px 20px rgba(0,0,0,0.5) inset'}}>
                    <div className="flex flex-col justify-center items-center flex-nowrap">
                        <Image src="/images/User/profilepic.png" alt="user" width={165} height={165}
                               className="w-[165px] h-[165px] mt-[-80px] border-2 border-[#E83431] rounded-full"/>
                        <h2 className="text-[28px] md:text-[20px] text-black dark:text-white font-semibold text-center tracking-wider pt-6"> Nabiha
                            Tahsin </h2>
                    </div>

                    <div
                        className="profile-details mt-[34px] grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-12 w-[720px] mx-auto">
                        <div className="sm:col-span-6 md:col-span-6">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[280px] h-[50px] justify-start text-left text-black dark:text-white font-medium text[16px] bg-[#E9E9E9] dark:bg-[#6D6E6E] dark:hover:bg-[#6D6E6E]",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4"/>
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0 dark:bg-[#6D6E6E] dark:hover:bg-[#6D6E6E]">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="sm:col-span-6 md:col-span-6">
                            <label htmlFor="sex"
                                   className="block text-sm font-medium leading-6 text-black dark:text-white md:text-base">
                                Sex
                            </label>
                            <div className="mt-0">
                                <div className="flex gap-x-3">
                                    <label htmlFor="male" className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            id="male"
                                            value="Male"
                                            type="radio"
                                            name="sex"
                                            className="custom-radio-for-sex"
                                            checked={sex === 'Male'}
                                            onChange={() => setSex('Male')}
                                        />
                                        <span className="text-black dark:text-white">Male</span>
                                    </label>
                                    <label htmlFor="female" className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            id="female"
                                            value="Female"
                                            type="radio"
                                            name="sex"
                                            className="custom-radio-for-sex"
                                            checked={sex === 'Female'}
                                            onChange={() => setSex('Female')}
                                        />
                                        <span className="text-black dark:text-white">Female</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3 md:col-span-4">
                            <label htmlFor="country"
                                   className="block text-sm font-medium leading-6 text-black dark:text-white md:text-base">
                                Country
                            </label>
                            <div className="mt-2 relative">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="off"
                                    className="w-full h-[50px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-black dark:text-white bg-[#E9E9E9] dark:bg-[#6D6E6E] border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 pr-10 appearance-none"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="United State of America">United State of America</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                         className="h-4 w-4 fill-current">
                                        <path
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3 md:col-span-4">
                            <label htmlFor="city"
                                   className="block text-sm font-medium leading-6 text-black dark:text-white md:text-base">
                                City
                            </label>
                            <div className="mt-2 relative">
                                <select
                                    id="city"
                                    name="city"
                                    autoComplete="off"
                                    className="w-full h-[50px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-black dark:text-white bg-[#E9E9E9] dark:bg-[#6D6E6E] border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 pr-10 appearance-none"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                >
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Chittagong">Chittagong</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                         className="h-4 w-4 fill-current">
                                        <path
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-3 md:col-span-4">
                            <label htmlFor="area"
                                   className="block text-sm font-medium leading-6 text-black dark:text-white md:text-base">
                                Area
                            </label>
                            <div className="mt-2 relative">
                                <select
                                    id="area"
                                    name="area"
                                    autoComplete="off"
                                    className="w-full h-[50px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-black dark:text-white bg-[#E9E9E9] dark:bg-[#6D6E6E] border border-gray-300 dark:border-gray-600 rounded-md py-2 px-3 pr-10 appearance-none"
                                    value={area}
                                    onChange={(e) => setArea(e.target.value)}
                                >
                                    <option value="Mirpur">Mirpur</option>
                                    <option value="Dhanmondi">Dhanmondi</option>
                                    <option value="Jatrabari">Jatrabari</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                         className="h-4 w-4 fill-current">
                                        <path
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="sm:col-span-12 md:col-span-12 md:flex md:justify-center md:items-center">
                            <button
                                type="button"
                                className="input input-bordered w-[322px] h-[50px] text-white dark:text-white text-[16px] font-semibold rounded-lg bg-[#E1342D] hover:bg-red-700 dark:bg-[##E1342D] dark:hover:bg-red-700"
                                onClick={handleFormSubmit}
                            >
                                UPDATE
                            </button>
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default UserProfileForm;
