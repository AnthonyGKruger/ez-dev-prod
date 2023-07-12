
import Image from "next/image";


const Companies = () => {


	const companies = [
		{ id: "c1", logo: "/media/logos/ds-logo.png", name: "Digital Stream" },
		{ id: "c2", logo: "/media/logos/DPTS.png", name: "DPTS" },
		{ id: "c3", logo: "/media/logos/mumbi-logo.png", name: "Mumbi Trust Administrators" },
		{ id: "c4", logo: "/media/logos/Mumbi_Financial_Services_Pty_Logo-removebg-preview.png", name: "Mumbi Financial Services" },
		{ id: "c5", logo: "/media/logos/av-logo.png", name: "Addventures" },
	];

const imageSize = 50;

	const companyLogos = companies.map((company) => {
		return (
			<div
				className="col-span-2 md:col-span-2 flex align-items-center justify-center p-4 "
				key={company.name}
			>
				<Image
					src={company.logo}
					alt={company.name}
					width={imageSize}
					height={imageSize}
          // style={{objectFit: 'contain'}}
					// fill
					unoptimized
					className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 object-contain hover:scale-125 transition-all duration-300 w-auto"
				/>
			</div>
		);
	});

	return (
		<section className="bg-white lg:py-28">
			<div className="text-center mb-14">
				<h2 className="text-primary-blue font-extrabold text-3xl my-3 px-9">
					Some Of The Awesome Companies That I Have Worked With
				</h2>
			</div>

			<div className="container px-6 m-auto flex justify-center ">
				<div className="grid grid-cols-4 gap-6 md:grid-cols-6 lg:grid-cols-10 w-[80vw] transition-all duration-300">
					{companyLogos}
				</div>
			</div>
		</section>
	);
};

export default Companies;
