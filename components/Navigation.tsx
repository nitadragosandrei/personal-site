import React, { useState } from "react";

function Navigation() {
  // State to track whether the buttons are shown or hidden
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div className="block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="block flex-grow lg:flex lg:items-center lg:w-auto justify-end float-right pr-4">
        <button
          className="lg:hidden float-right pr-4"
          onClick={() => {
            // Show or hide the buttons when the button is clicked
            setShowButtons(!showButtons);
          }}
        >
          {showButtons ? (
            // Show an X icon if the buttons are shown
            <svg
              className="fill-current h-3 w-3 text-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Close</title>
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          ) : (
            // Show the sandwich icon if the buttons are hidden
            <svg
              className="fill-current h-3 w-3 text-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          )}
        </button>
        {showButtons && (
          // Show the buttons if the state is true
          <div className=" lg:hidden lg:mt-0 text-teal-200 hover:text-white mr-4 float-right">
            <a className="px-4 " href="#Home">
              Home
            </a>
            <br />
            <a className="px-4" href="#Services">
              Services
            </a>
            <br />
            <a className="px-4" href="#Blog">
              Blog
            </a>
            <br />
            <a className="px-4" href="#Contact">
              Contact
            </a>
          </div>
        )}
      </div>
      <div className="hidden lg:block text-teal-200 hover:text-white mr-4 float-right">
        <a className="px-4 " href="#Home">
          Home
        </a>
        <a className="px-4" href="#Services">
          Services
        </a>
        <a className="px-4" href="#Blog">
          Blog
        </a>
        <a className="px-4" href="#Contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navigation;
