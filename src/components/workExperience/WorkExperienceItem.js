import { FaSuitcase, FaTrophy } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsCalendar3 } from "react-icons/bs";
import { motion } from "framer-motion";

const WorkExperienceItem = ({
	company,
	role,
	summary,
	dateFrom,
	dateTo,
	comments,
	slideFromRight,
}) => {
	const cardVariants = {
		offscreen: {
			x: slideFromRight ? 4000 : -4000,
		},
		onscreen: {
			x: 0,
			// rotate: -10,
			transition: {
				type: "spring",
				bounce: 0.2,
				duration: 1.5,
			},
		},
	};

	const mappedComments = comments.map((comment, idx) => {
		return (
			<div
				key={idx}
				className={`md:text-xl px-3 py-2 mb-2 mr-2 inline rounded-xl border-2 border-primary-gold bg-primary-blue  text-light-gold duration-300`}
			>
				<FaTrophy className="inline" />
				<span className="ml-3 inline">{comment}</span>
			</div>
		);
	});

	return (
		<motion.div
			className="card-container"
			// initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
		>
			<motion.div className="card" variants={cardVariants}>
				<div
					className={`mx-auto 2xl:w-[60%] lg:w-[80%] w-[90%] pl-2 my-14 border-l-4 border-primary-blue`}
				>
					<div className={`py-2 px-2 grid grid-cols-12 `}>
						<FaSuitcase className="col-span-1 text-3xl self-center text-amber-900" />
						<span className="col-span-11 self-center lg:text-3xl text-2xl">
							{company}
						</span>
					</div>
					<div className={`border-b border-t border-primary-gold`}>
						<div className={`grid lg:grid-cols-8 grid-cols-12 py-3 `}>
							<div className="col-span-4 px-2 py-2 grid md:grid-cols-8 grid-cols-3">
								<HiOutlineSpeakerphone className="col-span-1 md:cols-span-1 self-center text-2xl text-blue-600" />
								<div className="col-span-2 md:col-span-7 self-center">
									<span className="text-sm lg:text-base">{`Role: ${role}`}</span>
								</div>
							</div>

							<div className="lg:col-span-2 col-span-4 px-2 py-2 grid md:grid-cols-8 grid-cols-3">
								<BsCalendar3 className="col-span-1 md:cols-span-1 self-center text-indigo-600 text-xl" />
								<div className="col-span-2 md:col-span-7 self-center">
									<span className="text-sm lg:text-base">{`From: ${dateFrom}`}</span>
								</div>
							</div>

							<div className="lg:col-span-2 col-span-4 px-2 py-2 grid md:grid-cols-8 grid-cols-3">
								<BsCalendar3 className="col-span-1 md:cols-span-1 self-center text-indigo-600 text-xl" />
								<div className="col-span-2 md:col-span-7 self-center">
									<span className="text-sm lg:text-base">{`To: ${dateTo}`}</span>
								</div>
							</div>
						</div>
					</div>
					{summary == null ? null : (
						<div className={`border-t flex border-primary-gold py-6`}>
							<span>{summary}</span>
						</div>
					)}
					<div className="pt-3 flex">{mappedComments}</div>{" "}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default WorkExperienceItem;
