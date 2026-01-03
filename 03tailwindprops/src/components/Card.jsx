import React from "react";

// function card(props) { //* we can directly do destructuring and pass the value of props rather than using props.username in console.log
function card({username, btnText = "Visit Me", img = "https://images.pexels.com/photos/7775639/pexels-photo-7775639.jpeg"}) {
   // console.log(username);
  return (
    <div className="relative h-100 w-75 rounded-md">
      <img
        src={img}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText} →
        </button>
      </div>
    </div>
  );
}

export default card;
