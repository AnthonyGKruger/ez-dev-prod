'use client'
import useDownloader from "react-use-downloader";
import { redirect } from "next/navigation";

const ResumeRequest = () => {
	const { download } = useDownloader();

	const saveFile = () => {
		download(
			"/media/Anthony_Gordon_Kruger.pdf",
			"Anthony_Gordon_Kruger_Resume.pdf"
		);
		redirect("/thank-you");
	};

	return (
		<div className={`py-9 `}>
			<h2 className={`text-xl `}>
				Want to skip through all of this? Download my resume below:
			</h2>
			<button
				className={`mt-5 mx-auto text-center font-base border-2 border-alternative-gold hover:border-primary-blue rounded-xl px-5 py-3  pointer bg-primary-blue hover:bg-white text-[#f1d6b0] hover:text-primary-blue transition-all duration-500"`}
				onClick={saveFile}
			>
				Download Resume
			</button>
		</div>
	);
};

export default ResumeRequest;
