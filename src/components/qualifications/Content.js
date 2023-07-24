'use client'
// Import statements
import React from "react";
import Heading from "@/components/shared/Heading";
import QualificationItem from "@/components/qualifications/QualificationItem";
import animationData from "@/lotties/Education.json";
import { useState, useEffect } from "react";
import Loader from "@/components/shared/Loader";

// QualificationsContent component
const QualificationsContent = () => {
	// State to hold the mapped qualifications
	const [mappedQualifications, setMappedQualifications] = useState();

	// Function to fetch data from the /api/qualifications/ endpoint
	const fetchData = async () => {
		const response = await fetch("/api/qualifications/");
		const data = await response.json();

		// Mapping the fetched data to QualificationItem components
		setMappedQualifications(
			data.map((qualification, idx) => {
				// Checking if a link is available for the qualification
				if (qualification.link) {
					// If link is available, pass link prop to QualificationItem
					return (
						<QualificationItem
							key={idx}
							institution={qualification.institution}
							qualification={qualification.qualification}
							dateFrom={qualification.dateFrom}
							dateTo={qualification.dateTo}
							comments={qualification.comments}
							link={qualification.link}
							slideFromRight={idx % 2 === 0 ? true : false}
						/>
					);
				} else {
					// If link is not available, render QualificationItem without link prop
					return (
						<QualificationItem
							key={idx}
							institution={qualification.institution}
							qualification={qualification.qualification}
							dateFrom={qualification.dateFrom}
							dateTo={qualification.dateTo}
							comments={qualification.comments}
							slideFromRight={idx % 2 === 0 ? true : false}
						/>
					);
				}
			})
		);
	};

	// Fetch data on component mount
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			{/* Heading component with animation */}
			<Heading
				animationData={animationData}
				subtitle={"Always Leveling Up"}
				content={"Have A Look At My Qualifications"}
			/>
			{/* Display Loader if qualifications data is not available yet */}
			{!mappedQualifications && <Loader />}
			{/* Section to display the mapped qualifications */}
			<section className="py-9 overflow-hidden max-w-full bg-light-blue dark:bg-transparent">
				{mappedQualifications}
			</section>
		</>
	);
};

export default QualificationsContent;
