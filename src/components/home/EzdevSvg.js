import React, { useLayoutEffect, useState } from "react";

// EzdevSvg component displays an animated SVG.
const EzdevSvg = () => {
	const [layoutLoaded, setLayoutLoaded] = useState(false);

	// useLayoutEffect runs after the component renders but before painting the screen.
	// In this case, it sets a timeout to update the state variable "layoutLoaded" after 4000ms (4 seconds).
	useLayoutEffect(() => {
		setTimeout(() => {
			setLayoutLoaded(true);
		}, 4000);
	}, []);

	return (
		// Render the SVG element.
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className="stroke-[1.5rem] stroke-white mx-auto transition duration-[4000ms] "
			viewBox="0 0 917 432"
			width="458.5000000pt"
			height="216.000000pt"
			preserveAspectRatio="xMidYMid meet"
		>
			{/* Group element containing all the paths of the SVG. */}
			<g
				transform="translate(0.000000,432.000000) scale(0.100000,-0.100000)"
				fill={`${layoutLoaded ? "#ffffff" : "#00000000"}`}
				stroke="white"
			>
				{/* Path 1 */}
				<path
					className="transition duration-[4000ms]"
					id="path1"
					d="M410 3284 l0 -635 45 3 46 3 2 580 2 580 4080 0 4080 0 2 -580 2 -580 46 -3 45 -3 0 635 0 636 -4175 0 -4175 0 0 -636z"
				/>

				{/* Path 2 */}
				<path
					className="transition duration-[4000ms]"
					id="path2"
					d="M1549 3027 c-21 -14 -39 -37 -47 -61 -9 -29 -12 -230 -10 -904 l3 -867 1053 0 1053 0 -1 888 c0 555 -4 896 -10 907 -5 10 -25 28 -44 39 -33 21 -37 21 -998 21 l-965 0 -34 -23z m1969 -69 c7 -7 12 -42 12 -85 l0 -73 -980 0 -980 0 0 73 c0 43 5 78 12 85 17 17 1919 17 1936 0z m10 -965 l2 -723 -980 0 -980 0 0 725 0 725 978 -2 977 -3 3 -722z"
				/>

				{/* Path 3 */}
				<path
					className="transition duration-[4000ms]"
					id="path3"
					d="M2693 2528 c-10 -12 -54 -116 -176 -418 -70 -171 -85 -208 -101 -245 -7 -16 -37 -90 -67 -163 -56 -140 -58 -163 -11 -170 25 -4 29 3 86 146 48 118 132 323 208 507 125 305 132 323 118 340 -15 18 -44 20 -57 3z"
				/>

				{/* Path 4 */}
				<path
					className="transition duration-[4000ms]"
					id="path4"
					d="M2010 2204 c-80 -46 -153 -90 -162 -99 -37 -31 -22 -48 107 -120 28 -15 84 -47 126 -71 42 -24 83 -44 92 -44 19 0 39 33 32 52 -3 8 -59 45 -125 82 -66 37 -120 71 -120 74 0 4 55 38 121 76 67 38 123 76 127 84 7 20 -11 47 -34 49 -10 1 -84 -36 -164 -83z"
				/>

				{/* Path 5 */}
				<path
					className="transition duration-[4000ms]"
					id="path5"
					d="M2908 2276 c-26 -19 -22 -42 11 -65 16 -12 31 -21 34 -21 9 0 176 -101 182 -109 3 -5 -49 -40 -115 -77 -119 -68 -143 -92 -120 -119 19 -23 37 -18 119 29 42 24 99 56 126 71 123 69 136 82 117 112 -7 11 -321 193 -332 193 -3 0 -13 -7 -22 -14z"
				/>

				{/* Path 6 */}
				<path
					className="transition duration-[4000ms]"
					id="path6"
					d="M4405 2428 c-3 -7 -4 -155 -3 -328 l3 -315 195 0 195 0 0 25 0 25 -160 5 -160 5 0 120 0 120 140 5 140 5 0 25 0 25 -142 3 -143 3 0 109 0 110 153 0 c83 0 158 4 165 9 8 4 12 19 10 32 l-3 24 -193 3 c-149 2 -194 0 -197 -10z"
				/>

				{/* Path 7 */}
				<path
					className="transition duration-[4000ms]"
					id="path7"
					d="M4980 2425 c-10 -13 -9 -19 6 -36 17 -18 29 -20 187 -19 93 1 171 -1 174 -3 2 -3 -39 -63 -93 -134 -306 -399 -315 -413 -304 -433 10 -19 22 -20 249 -20 199 0 241 2 251 15 7 8 10 22 6 30 -4 13 -36 15 -201 15 -126 0 -195 4 -195 10 0 6 55 84 123 173 298 391 288 377 277 398 -10 18 -24 19 -239 19 -192 0 -231 -2 -241 -15z"
				/>

				{/* Path 8 */}
				<path
					className="transition duration-[4000ms]"
					id="path8"
					d="M6025 2427 c-3 -7 -4 -154 -3 -327 l3 -315 154 -3 c183 -3 231 8 293 70 69 69 83 114 83 258 0 116 -2 129 -27 175 -34 65 -92 120 -147 140 -57 20 -349 22 -356 2z m343 -71 c71 -37 112 -111 119 -216 8 -106 -15 -180 -70 -236 -51 -50 -112 -66 -238 -62 l-84 3 -3 263 -2 262 125 0 c89 0 134 -4 153 -14z"
				/>

				{/* Path 9 */}
				<path
					className="transition duration-[4000ms]"
					id="path9"
					d="M6762 2428 c-17 -17 -17 -619 0 -636 8 -8 66 -12 194 -12 148 0 184 3 194 15 7 8 10 21 7 30 -5 12 -36 15 -169 17 l-163 3 0 120 0 120 137 3 c105 2 139 6 148 17 10 12 10 18 0 30 -9 11 -43 15 -148 17 l-137 3 -3 108 -3 107 155 0 c127 0 157 3 170 16 19 19 20 26 4 42 -8 8 -66 12 -193 12 -127 0 -185 -4 -193 -12z"
				/>

				{/* Path 10 */}
				<path
					className="transition duration-[4000ms]"
					id="path10"
					d="M7297 2434 c-16 -16 -4 -57 57 -199 35 -83 89 -213 121 -290 32 -77 64 -146 70 -154 30 -32 49 -3 144 221 52 123 104 246 116 273 52 118 56 155 17 155 -23 0 -33 -12 -54 -65 -8 -22 -52 -131 -97 -241 -44 -111 -81 -207 -81 -213 0 -20 -29 -11 -36 12 -3 12 -14 40 -24 62 -9 22 -23 54 -30 70 -139 333 -156 370 -176 373 -11 2 -23 0 -27 -4z"
				/>

				{/* Path 11 */}
				<path
					className="transition duration-[4000ms]"
					id="path11"
					d="M5634 2196 c-29 -29 -34 -41 -34 -83 0 -55 17 -86 60 -108 70 -36 162 7 176 81 15 80 -39 144 -121 144 -40 0 -52 -5 -81 -34z"
				/>

				{/* Path 12 */}
				<path
					className="transition duration-[4000ms]"
					id="path12"
					d="M410 986 l0 -636 4175 0 4175 0 0 636 0 635 -45 -3 -46 -3 -2 -580 -2 -580 -4080 0 -4080 0 -2 580 -2 580 -46 3 -45 3 0 -635z"
				/>
			</g>
		</svg>
	);
};

export default EzdevSvg;
