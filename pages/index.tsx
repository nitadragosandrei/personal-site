import Head from "next/head";

const Home = () => (
  <div className="bg-green-100">
    <Head>
      <title>My Personal Website</title>
    </Head>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Logo</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-end">
          <a
            href="#home"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 mr-4 hover:bg-white hover:text-teal-500 rounded-full py-3 px-6"
          >
            Home
          </a>
          <a
            href="#services"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:bg-white mr-4 hover:text-teal-500 rounded-full py-3 px-6"
          >
            Services
          </a>
          <a
            href="#blog"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:bg-white mr-4 hover:text-teal-500 rounded-full py-3 px-6"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:bg-white hover:text-teal-500 rounded-full py-3 px-6"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>

    <div className="flex items-center min-h-screen">
      <div className="w-1/2 p-4">
        <p>This is where you can add your brief description.</p>
      </div>
      <div className="w-1/2">
        <img
          src="your-picture.jpg"
          alt="Your Picture"
          className="object-cover"
        />
      </div>
    </div>
  </div>
);

export default Home;
