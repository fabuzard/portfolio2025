import React from 'react';
import meImg from "../images/me.jpg";

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20 md:flex-row md:items-center m-0">
			<div className="text-center md:w-1/2 md:text-left md:space-y-10 my-4">
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
					Hello, My name is Fahreza Abuzard
				</h1>
				<p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
					A computer engineering graduate with a passion for technology and problem-solving. Continuously learning and growing in programming, I am skilled in both frontend and backend development
				</p>
				<a
					href="#works"
					className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md"
				>
					See Works
				</a>
			</div>


			<div className="flex justify-center w-full md:w-1/2">
				<img src={meImg} alt="Fahreza" className="max-w-xs w-full h-auto rounded-lg" />
			</div>
		</div>
	);
}

export default HeroSection;
