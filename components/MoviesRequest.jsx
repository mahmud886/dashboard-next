"use client"
import React, { useState } from 'react';

const MoviesRequest = () => {
    const [selectedIssue, setSelectedIssue] = useState('RequestForUpload');
    const [activeTab, setActiveTab] = useState('movies'); // Initialize with 'movies' for easier comparison
    const [inputPlaceholder, setInputPlaceholder] = useState('Movie Name');
    const [inputValue, setInputValue] = useState('');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        if (tab === 'movies') {
            setInputPlaceholder('Movie Name');
        } else if (tab === 'series') {
            setInputPlaceholder('Series Name');
        }
        setInputValue(''); // Reset input value when tab changes
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="col-span-12 mb-2 md:col-span-9">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 md:col-span-4">
                    <p className="mb-4 text-xl font-semibold text-black dark:text-white">
                        Request for
                    </p>
                    <div className="mt-2">
                        <select
                            id="issue"
                            name="issue"
                            autoComplete="country-name"
                            className="text-center select select-bordered w-full h-[50px] md:max-w-xs text-black dark:text-white bg-[#C1C1C1] dark:bg-[#6D6E6E]"
                            value={selectedIssue}
                            onChange={(e) => setSelectedIssue(e.target.value)}
                        >
                            <option value="RequestForUpload">Request For Upload</option>
                            <option value="SubtitleIssue">Subtitle Issue</option>
                            <option value="VideosIssue">Videos Issue</option>
                            <option value="WrongUpload">Wrong Upload</option>
                            <option value="AudioIssue">Audio Issue</option>
                        </select>
                    </div>
                </div>

                <div className="col-span-12 mt-2 md:col-span-4 md:mt-0" role="tablist">
                    <button
                        className={`w-full h-[50px] px-6 py-2 mb-3 text-black border-none rounded-md dark:text-white ${
                            activeTab === 'movies' ? 'bg-[#C1C1C1] dark:bg-[#6D6E6E]' : 'bg-transparent'
                        }`}
                        onClick={() => handleTabClick('movies')}
                    >
                        Movies
                    </button>

                    <button
                        className={`w-full h-[50px] px-6 py-2 text-black border-none rounded-md dark:text-white ${
                            activeTab === 'series' ? 'bg-[#C1C1C1] dark:bg-[#6D6E6E]' : 'bg-transparent'
                        }`}
                        onClick={() => handleTabClick('series')}
                    >
                        Series
                    </button>
                </div>

                <div className="col-span-12 my-2 md:col-span-4">
                    <div
                        className={`transition-opacity duration-150 ease-linear ${
                            activeTab === 'movies' || activeTab === 'series' ? 'opacity-100' : 'opacity-0'
                        }`}
                        id={activeTab === 'movies' ? 'tabs-movies1' : 'tabs-series1'}
                        role="tabpanel"
                        aria-labelledby={activeTab === 'movies' ? 'tabs-home-tab03' : 'tabs-profile-tab03'}
                    >
                        <p className="mb-2 text-xl font-semibold text-black dark:text-white">
                            {activeTab === 'movies' ? 'Movie Name' : 'Series Name'}
                        </p>
                        <input
                            type="text"
                            placeholder={inputPlaceholder}
                            className="placeholder-black dark:placeholder-gray-100 w-full h-[50px] px-2 md:max-w-xs input input-bordered text-black dark:text-white bg-[#C1C1C1] dark:bg-[#6D6E6E]"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviesRequest;
