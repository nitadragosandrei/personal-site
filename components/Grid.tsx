// components/Grid.tsx
import React from "react";

const Grid = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full text-left md:flex-row">
        <h1 className="text-2xl font-bold mb-4">Welcome to my page!</h1>
        <p className="text-gray-600">
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
      <div className="hidden md:block">
        <img
          style={{ width: "100%", height: "100%" }}
          src="https://via.placeholder.com/1000"
          alt="placeholder"
        />
      </div>
    </div>
  );
};

export default Grid;
