import React from 'react';
import me2 from '../images/me2.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
					I'm Fahreza, a passionate computer engineering graduate with a focus on web development. With a solid foundation in both frontend and backend technologies, I specialize in creating dynamic and responsive applications using React.js, Node.js, and Postman API.


				</p>
				<p className='mt-4 text-md text-gray-600 dark:text-gray-300'> I am committed to continuous learning, always staying updated with the latest trends in software development. Whether working independently or as part of a team, I am driven by the challenge of solving complex problems and delivering high-quality solutions.</p>
				<a
					href="mailto:webcifar.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					fabuzard123@gmail.com
				</a>
			</div>

			<img
				src={me2}
				alt="Arfan"
				className="w-full md:w-80 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
