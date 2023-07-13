import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="py-28">
			<div className="container px-6 m-auto">
				<div className="grid grid-cols-4 gap-6 md:grid-cols-4 lg:grid-cols-12">
					<div className="col-span-4 lg:col-span-5">
						<div className="w-full h-full flex">
							<Image
								src={"/media/AnthonyIllustrated.jpeg"}
								alt="Anthony Kruger"
								className="rounded-full shadow-lg border self-center mx-auto"
								width={400}
								height={400}
							/>
						</div>
					</div>
					<div className="col-span-4 lg:col-span-7">
						<h1 className="text-4xl text-alternative-gold md:font-extrabold text-center lg:text-left">
							Hi There!
						</h1>
						{/* <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl">
						We help startups to grow and make money
					</h2> */}
						<p className="text-lg tracking-wide mt-5 ">
							I'm an ambitious and determined individual with a Bachelor's
							degree in information technology and three years of experience in
							web development. As a successful retail branch manager, I've honed
							my management and sales skills, which will be valuable to my
							future employer in information technology. I'm seeking a role that
							leverages my interaction skills, operational experience, and
							positive attitude.
						</p>
						<p className="text-lg tracking-wide mt-5">
							I'm highly motivated, a fast learner, and a collaborative team
							player who thrives in dynamic and fast-paced environments. When
							not coding, I'm exploring new technologies or enjoying my time
							with family and friends. I'm excited about the opportunities ahead
							and look forward to connecting with like-minded professionals.
						</p>
						<div className="pt-9">
							<button className="hover:scale-105 mx-auto text-center  border-2 border-alternative-gold hover:border-primary-blue rounded-xl px-5 py-4  pointer bg-primary-blue hover:bg-white text-[#f1d6b0] hover:text-primary-blue duration-300">
								<Link href="/contact-me" className="font-base text-lg tracking-wide ">Let's Chat!</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
