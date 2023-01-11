import React from 'react'
import CliffordOpokuIsaiah from '../.././assets/CliffordOpokuIsaiah.png'

function Content() {
  return (
		<section id='about' className="   bg-NavBar py-20  ">
			<div className=" px-10 xl:container mx-auto flex  py-24 md:flex-row flex-col items-center">
				{/* HERE CONTENT IMAGE */}
				<div className="xl:max-w-lg xl:w-full md:w-1/2  mb-10 md:mb-0">
					<img
						className="object-cover object-center rounded"
						alt="Clifford"
						src={CliffordOpokuIsaiah}
					/>
				</div>
				<div className="lg:flex-col md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
					{/* HEADING NAME  */}
					<h1 className=" font-Poppins xl:text-4xl  sm:text-4xl text-3xl mb-4 font-medium ">
						<h1 className="text-white">Hi! I am </h1>{" "}
						<span className=" text-BntColor"> Isaiah Clifford Opoku</span>
					</h1>
					<p className="mb-8 leading-8 font-Poppins lg:text-xl xl:text-xl text-white">
						Welcome to my portfolio website! I am a Full Stack JavaScript
						Developer with a strong focus on the MERN stack. I specialize in
						creating powerful web applications and solving complex problems. My
						passion for coding drives me to constantly learn and improve my
						skills, and I am excited to share my work with you. Please take a
						look around and see the projects I've built and the technologies
						I've used. Thank you for visiting!
					</p>
				</div>
			</div>
		</section>
	);
}

export default Content
