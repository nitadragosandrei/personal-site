import { Console } from "console";
import Head from "next/head";
import Navigation from "../components/Navigation";
import Grid from "../components/Grid";

const Home = () => (
  <div className="bg-green-100">
    <Head>
      <title>My Personal Website</title>
    </Head>
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">.dragosN</span>
      </div>
      <Navigation />
    </nav>
    {/* <div className="flex items-center min-h-screen">
      <div className="w-1/2 p-4">
        <p>
          As a Scrum Master and software engineer, I am passionate about the
          people side of the software engineering process. I enjoy taking a
          holistic view of a system and finding ways to improve it. I am not
          afraid to challenge the status quo and am always looking for new and
          innovative ways to drive progress. In my role, I strive to create a
          collaborative and inclusive environment where all team members feel
          valued and supported. With a strong background in both technical and
          interpersonal skills, I am well-equipped to lead and support
          high-performing software development teams
        </p>
      </div>
      <div className="w-1/2">
        <img
          src="your-picture.jpg"
          alt="Your Picture"
          className="object-cover"
        />
      </div>
    </div> */}
    <Grid />
  </div>
);

export default Home;
