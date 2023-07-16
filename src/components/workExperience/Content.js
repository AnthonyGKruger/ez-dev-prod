"use client";
import Heading from "@/components/shared/Heading";
import WorkExperienceItem from "@/components/workExperience/WorkExperienceItem";
import animationData from "@/lotties/workExperience.json";
import { useState, useEffect } from "react";
import Loader from "@/components/shared/Loader";

const WorkExperienceContent = () => {
	const [mappedExperience, setMappedExperience] = useState();

	const fetchData = async () => {
		const response = await fetch("/api/work-experience/");
		const data = await response.json();

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
						slideFromRight={idx % 2 == 0 ? true : false}
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
			<Heading
				animationData={animationData}
				subtitle={"Hard Work & Perseverance"}
				content={"Check Out My Work Experience Below 💪"}
			/>

			{!mappedExperience && <Loader />}

			<section className="py-9 max-w-full overflow-hidden bg-light-blue">{mappedExperience}</section>
		</>
	);
};

export default WorkExperienceContent;
