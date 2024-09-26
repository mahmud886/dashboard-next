import React from "react";
import AvatarProfileImage from '../../../assets/images/avatar-profile.jpg';

const NewsFacebookComment = () => {
  const submitComment = () => {
    // Define your submit comment logic here
    console.log("Comment submitted");
  };

  return (

      <div className="w-full bg-white border border-gray-200 rounded-md p-6">
        <div className="header_comment border-b border-gray-300 mb-6 pb-2 flex justify-between items-center">
          <div className="count_comment font-semibold">Comments</div>
          <div className="flex items-center space-x-2">
            <button className="sort_by bg-gray-100 text-gray-700 text-sm font-bold py-1 px-2 rounded border border-gray-300">
              Sort by
            </button>
          </div>
        </div>
        <div className="body_comment space-y-6">
          <div className="flex items-start">
            <img
              src={AvatarProfileImage}
              alt="avatar"
              className="avatar_comment w-12 h-12 mr-4 rounded-full border border-2 border-red-700"
            />
            <div className="box_comment flex-grow border border-gray-300 rounded p-2 bg-white">
              <textarea
                className="commentar w-full border-none p-2 resize-none focus:outline-none"
                placeholder="Add a comment..."
              ></textarea>
            </div>
          </div>
          <div className="box_post flex justify-between items-center border-t border-gray-300 bg-gray-100 p-2">
            <div className="flex items-center space-x-2">
              <button
                className="bg-red-600 text-white py-1 px-3 rounded font-bold hover:bg-red-800"
                onClick={submitComment}
              >
                Post
              </button>
            </div>
          </div>
        </div>
        <ul className="space-y-6 my-4">
          <li>
            <div className="flex">
              <img
                src={AvatarProfileImage}
                alt="avatar"
                className="w-12 h-12 rounded-full mr-4 border border-2 border-red-700"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-semibold text-red-700">Tazul Islam</h4>
                    <p className="text-sm text-gray-500">Shanto u beauty. Just Loved you</p>
                  </div>
                  {/* <div className="text-sm text-gray-500 space-x-2">
                    <span>16h</span>
                  </div> */}
                </div>
                <div className="text-[#33333] cursor-pointer">
                  Reply 
                  {/* · <i className="fa fa-thumbs-o-up"></i> 4 · 16h */}
                </div>
              </div>
            </div>
            <ul className="space-y-4 pl-4 border-l border-dotted border-gray-300 py-2">
              <li className="flex">
                <img
                 src={AvatarProfileImage}
                  alt="avatar"
                  className="w-12 h-12 rounded-full mr-4 border border-2 border-red-700"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold text-red-700">Tahmid Hossen</h4>
                      <p className="text-sm text-gray-500">Hahaha Moja paichi Bhai! Shanto ki apnar relative naki bhai?</p>
                    </div>
                    {/* <div className="text-sm text-gray-500 space-x-2">
                      <span>16h</span>
                    </div> */}
                  </div>
                  {/* <div className="text-[#33333] cursor-pointer">
                    Reply 
                    · <i className="fa fa-thumbs-o-up"></i> 4 · 16h
                  </div> */}
                </div>
              </li>
            </ul>
            <ul className="space-y-4 pl-4 border-l border-dotted border-gray-300 py-2">
              <li className="flex">
                <img
                 src={AvatarProfileImage}
                  alt="avatar"
                  className="w-12 h-12 rounded-full mr-4 border border-2 border-red-700"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold text-red-700">Tahmid Hossen</h4>
                      <p className="text-sm text-gray-500">Hahaha Moja paichi Bhai! Shanto ki apnar relative naki bhai?</p>
                    </div>
                    {/* <div className="text-sm text-gray-500 space-x-2">
                      <span>16h</span>
                    </div> */}
                  </div>
                  {/* <div className="text-[#33333] cursor-pointer">
                    Reply 
                    · <i className="fa fa-thumbs-o-up"></i> 4 · 16h
                  </div> */}
                </div>
              </li>
            </ul>
          </li>
        </ul>
        <button className="show_more w-full bg-red-600 text-white py-2 rounded font-bold hover:bg-red-800">
          Load 10 more comments
        </button>
      </div>

  );
};

export default NewsFacebookComment;
