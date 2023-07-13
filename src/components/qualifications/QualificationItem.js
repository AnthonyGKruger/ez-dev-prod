import Link from "next/link";
import { PiCertificate } from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";
import { FaScroll } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { BiMedal } from "react-icons/bi";
import { motion } from "framer-motion";

const QualificationItem = ({
	institution,
	qualification,
	dateFrom,
	dateTo,
	comments,
	link,
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
		if (link) {
			return (
				<div
					key={idx}
					className={`md:text-xl px-3 py-2 mb-2 mr-2 inline rounded-xl border-2 border-primary-gold hover:border-primary-blue bg-primary-blue hover:bg-white text-light-gold hover:text-primary-blue duration-300`}
				>
					<Link
						// style={{ textDecoration: "none", color: "#F1D6B0" }}
						href={link}
						target="_blank"
					>
						<PiCertificate className="inline stroke-light-gold" />
						<span className="ml-3 inline">View Certificate</span>
					</Link>
				</div>
			);
		} else {
			return (
				<div
					key={idx}
					className={`col-span-1  md:text-md px-3 py-2 mb-2 mr-2 inline rounded-xl border-2 border-primary-gold bg-primary-blue  text-light-gold duration-300`}
					>
					<BiMedal className="inline" />
					<span className="ml-3 inline">{comment}</span>
				</div>
			);
		}
	});

	return (
		<motion.div
			className="card-container"
			initial="offscreen"
			whileInView="onscreen"
			viewport={{ once: true, amount: 0.8 }}
		>
			<motion.div className="card" variants={cardVariants}>
				<div
					className={`mx-auto 2xl:w-[60%] xl:w-[60%] lg:w-[80%] w-[90%] pl-2 my-14 border-l-4 border-primary-blue`}
				>
					<div className={`py-2 px-2 grid grid-cols-12 lg:grid-cols-12`}>
						<HiLocationMarker className="col-span-2 lg:col-span-1 text-3xl self-center text-red-600" />
						<span className="col-span-10 lg:col-span-11 self-center lg:text-3xl text-2xl">
							{institution}
						</span>
					</div>
					<div className={`border-b border-t border-primary-gold`}>
						
						<div className={`grid lg:grid-cols-8 grid-cols-12 py-3 `}>
						
							<div className="col-span-12 px-2 py-2 grid md:grid-cols-8 lg:grid-cols-12 grid-cols-6">
								<FaScroll className="col-span-1 md:cols-span-1 lg:col-span-1 self-center text-2xl text-primary-gold" />
								<div className="col-span-5 md:col-span-7 lg:col-span-11 self-center">
									<span className="text-sm lg:text-base">{`Qualification: ${qualification}`}</span>
								</div>
							</div>

							<div className="lg:col-span-3 col-span-6 px-2 py-2 grid md:grid-cols-8 grid-cols-3">
								<BsCalendar3 className="col-span-1 md:col-span-2 lg:col-span-2 self-center text-indigo-600 text-xl" />
								<div className="col-span-2 md:col-span-6 lg:col-span-6 self-center">
									<span className="text-sm lg:text-base">{`From: ${dateFrom}`}</span>
								</div>
							</div>

							<div className="lg:col-span-3 col-span-6 px-2 py-2 grid md:grid-cols-8 grid-cols-3">
								<BsCalendar3 className="col-span-1 md:col-span-2 lg:col-span-2 self-center text-indigo-600 text-xl" />
								<div className="col-span-2 md:col-span-6 lg:col-span-6 self-center">
									<span className="text-sm lg:text-base">{`To: ${dateTo}`}</span>
								</div>
							</div>
					
						</div>
					</div>
					<div className="pt-3 grid grid-cols-1 lg:grid-cols-2">{mappedComments}</div>{" "}
					{/* <div className="pt-3 grid grid-cols-2">{mappedComments}</div> */}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default QualificationItem;
