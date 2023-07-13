"use client";
import Heading from "@/components/shared/Heading";
import QualificationItem from "@/components/qualifications/QualificationItem";
import animationData from "@/lotties/Education.json";
import { useState, useEffect } from "react";

const QualificationsContent = () => {
	const [mappedQualifications, setMappedQualifications] = useState();

	const fetchData = async () => {
		const response = await fetch("/api/qualifications/");
		const data = await response.json();

		setMappedQualifications(
			data.map((qualification, idx) => {
				if (qualification.link) {
					return (
						<QualificationItem
							key={idx}
							institution={qualification.institution}
							qualification={qualification.qualification}
							dateFrom={qualification.dateFrom}
							dateTo={qualification.dateTo}
							comments={qualification.comments}
							link={qualification.link}
							slideFromRight={idx % 2 == 0 ? true : false}
						/>
					);
				} else {
					return (
						<QualificationItem
							key={idx}
							institution={qualification.institution}
							qualification={qualification.qualification}
							dateFrom={qualification.dateFrom}
							dateTo={qualification.dateTo}
							comments={qualification.comments}
              slideFromRight={idx % 2 == 0 ? true : false}
						/>
					);
				}
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
				subtitle={"Always Leveling Up"}
				content={"Have A Look At My Qualifications 👇"}
			/>
			<section className="py-9">{mappedQualifications}</section>
		</>
	);
};

export default QualificationsContent;
