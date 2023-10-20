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
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
      },
    },
  };

  // Map comments to JSX elements
  const mappedComments = comments.map((comment, idx) => {
    return (
      <div
        key={idx}
        className={`col-span-1 md:text-md px-3 py-2 mb-2 mr-2 inline rounded-xl border-2 dark:border border-primary-gold dark:border-light-gold bg-primary-blue dark:bg-transparent text-light-gold duration-500`}
      >
        <FaTrophy className="inline" />
        <span className="ml-3 inline">{comment}</span>
      </div>
    );
  });

  return (
    <motion.div
      className="card-container max-w-full overflow-hidden"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className="card max-w-full overflow-hidden"
        variants={cardVariants}
      >
        <div
          className={`bg-white dark:bg-transparent rounded-xl mx-auto 2xl:w-[60%] xl:w-[60%] lg:w-[80%] w-[90%] my-5 border-4 border-primary-blue dark:border-primary-gold`}
        >
          {/* Company name */}
          <div className={`py-2 px-2 grid grid-cols-12  lg:grid-cols-12`}>
            <FaSuitcase className="col-span-2 lg:col-span-1 text-3xl self-center text-amber-900" />
            <span className="col-span-10 lg:col-span-11 self-center lg:text-3xl text-2xl">
              {company}
            </span>
          </div>

          {/* Role and Date range */}
          <div className={`border-b border-t border-primary-gold`}>
            <div className={`grid lg:grid-cols-8 grid-cols-12 py-3 `}>
              {/* Role */}
              <div className="col-span-12 px-2 py-2 grid md:grid-cols-8 grid-cols-6  lg:grid-cols-12">
                <HiOutlineSpeakerphone className="col-span-1 md:cols-span-1 lg:col-span-1 self-center text-2xl text-blue-600" />
                <div className="col-span-5 md:col-span-7 lg:col-span-11 self-center">
                  <span className="text-sm lg:text-base">{`Role: ${role}`}</span>
                </div>
              </div>

              {/* Date From */}
              <div className="lg:col-span-3 col-span-6 px-2 py-2 grid md:grid-cols-8 grid-cols-3">
                <BsCalendar3 className="col-span-1 md:col-span-2 lg:col-span-2 self-center text-indigo-600 text-xl" />
                <div className="col-span-2 md:col-span-6 lg:col-span-6 self-center">
                  <span className="text-sm lg:text-base">{`From: ${dateFrom}`}</span>
                </div>
              </div>

              {/* Date To */}
              <div className="lg:col-span-3 col-span-6 px-2 py-2 grid md:grid-cols-8 grid-cols-3">
                <BsCalendar3 className="col-span-1 md:col-span-2 lg:col-span-2 self-center text-indigo-600 text-xl" />
                <div className="col-span-2 md:col-span-6 lg:col-span-6 self-center">
                  <span className="text-sm lg:text-base">{`To: ${dateTo}`}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Summary */}
          {summary == null ? null : (
            <div className={`border-t flex border-primary-gold py-6 px-3`}>
              <span>{summary}</span>
            </div>
          )}

          {/* Comments */}
          <div className="p-3 pb-0 grid grid-cols-1 lg:grid-cols-2">
            {mappedComments}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorkExperienceItem;
