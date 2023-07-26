"use client";

import Lottie from "react-lottie-player"; // Importing the Lottie player component
import animationData from "@/lotties/404.json"; // Importing the animation data (Lottie JSON file)

// NotFoundContent component representing the content of the "404 Not Found" page
const NotFoundContent = () => {
    const lottieDimensions = 300; // Setting the dimensions for the Lottie animation

    return (
        <>
            <section className="py-14">
                <div className="">
                    {/* Render the Lottie animation */}
                    <Lottie
                        loop
                        play
                        style={{
                            width: lottieDimensions,
                            height: lottieDimensions,
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                        animationData={animationData}
                    />
                    <p className="text-center text-2xl px-5">
                        Sorry, we can&#39;t find the page you are looking for.
                    </p>
                </div>
                <p className="text-center italic font-thin mt-5 px-5">
                    Try using the navigation above to find the page you are looking for.
                </p>
            </section>
        </>
    );
};

export default NotFoundContent;
