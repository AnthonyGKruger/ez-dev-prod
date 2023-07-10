"use client";
import Lottie from "react-lottie-player";

const Heading = ({ animationData, content }) => {
	return (
		<section>
			<div className="container px-6 m-auto">
				<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
					<div className="col-span-4 md:col-span-2 lg:col-span-3">
						<Lottie
							loop
							play
							style={{ width: 150, height: 150 }}
							animationData={animationData}
							className="self-center mx-auto"
						/>
					</div>
					<div className="col-span-4 md:col-span-6 lg:col-span-9">
            <div className="flex h-full w-full">
              <h3 className="text-4xl self-center text-center md:text-left">{content}</h3>
            </div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Heading;
