"use client";
import Heading from "@/components/shared/Heading";
import WorkExperienceItem from "@/components/workExperience/WorkExperienceItem";
import animationData from "@/lotties/workExperience.json";
import { useState, useEffect } from "react";

const WorkExperience = () => {
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
				content={"Hard Work & Perseverance, Check Out My Work Experience Below 💪"}
			/>
			<section className="py-9">{mappedExperience}</section>
		</>
	);
};

export default WorkExperience;
