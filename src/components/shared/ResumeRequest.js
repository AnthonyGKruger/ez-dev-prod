'use client'
import useDownloader from "react-use-downloader";
import { redirect } from "next/navigation";

const ResumeRequest = () => {
  // Use the useDownloader hook to enable downloading files
  const { download } = useDownloader();

  // Function to initiate the download and redirect the user
  const saveFile = () => {
    download("/media/Anthony_Gordon_Kruger.pdf", "Anthony_Gordon_Kruger_Resume.pdf");
    redirect("/thank-you");
  };

  return (
    <div className={`py-9 `}>
      {/* Heading */}
      <h2 className={`text-xl `}>
        Want to skip through all of this? Download my resume below:
      </h2>
      {/* Download Button */}
      <button
        className={`mt-5  font-base  cursor-pointer mx-auto text-center font-base border-2 border-alternative-gold
				dark:border-light-gold hover:border-primary-blue rounded-xl px-5 py-3 bg-primary-blue
				dark:bg-transparent hover:bg-white dark:hover:bg-light-gold text-[#f1d6b0] dark:text-white
				 hover:text-primary-blue dark:hover:text-black transition-all duration-500`}
        onClick={saveFile}
      >
        Download Resume
      </button>
    </div>
  );
};

export default ResumeRequest;

