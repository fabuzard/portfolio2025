import React from 'react';

import { LuComputer } from "react-icons/lu";
import { GrTest } from "react-icons/gr";
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Frontend Development',
		icon: <VscCode className="w-full h-full" />,
		description:
			'Building responsive, dynamic, and user-friendly interfaces using React.js, HTML, CSS, and JavaScript. I focus on performance, accessibility, and smooth user experiences.',
	},
	{
		title: 'Backend Development',
		icon: <LuComputer className="w-full h-full" />,
		description:
			'Designing and developing RESTful APIs and server-side applications using Node.js and Express. Ensuring scalability, security, and efficient data management with databases like MongoDB and PostgreSQL.',
	},
	{
		title: 'Quality Assurance and testing',
		icon: <GrTest className="w-full h-full" />,
		description:
			'Implementing automated and manual testing strategies, including UI testing with Selenium and API testing using Postman. I aim to deliver bug-free, reliable software with thorough test coverage.',
	},
];
