"use client";
import Heading from "@/components/shared/Heading";
import WorkExperienceItem from "@/components/workExperience/WorkExperienceItem";
import animationData from "@/lotties/workExperience.json";
import { useState, useEffect } from "react";
import Loader from "@/components/shared/Loader";

const WorkExperienceContent = () => {
  const [mappedExperience, setMappedExperience] = useState();

  // Fetch data from the API endpoint
  const fetchData = async () => {
    const response = await fetch("/api/work-experience/");
    const data = await response.json();

    // Map the data to create individual WorkExperienceItem components
    setMappedExperience(
      data.map((job, idx) => {
        return (
          <WorkExperienceItem
            key={idx}
            company={job.company}
            role={job.role}
            summary={job.summary}
            dateFrom={job.dateFrom}
            dateTo={job.dateTo}
            comments={job.comments}
            slideFromRight={idx % 2 === 0 ? true : false}
          />
        );
      })
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Heading component to display the title and animation */}
      <Heading
        animationData={animationData}
        subtitle={"Hard Work & Perseverance"}
        content={"Check Out My Work Experience Below"}
      />

      {/* Show Loader component while fetching data */}
      {!mappedExperience && <Loader />}

      {/* Display the mapped work experience */}
      <section className="py-9 max-w-full overflow-hidden bg-light-blue dark:bg-transparent">
        {mappedExperience}
      </section>
    </>
  );
};

export default WorkExperienceContent;

