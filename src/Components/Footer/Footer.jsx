import React from 'react'
import { AiFillLinkedin, AiFillMail, AiFillTwitterSquare } from 'react-icons/ai';
import { VscGithub } from 'react-icons/vsc';

// SOCIAL MEDIAS LINKS 
const GitHub = "https://github.com/Clifftech123";
const Twitter = "https://twitter.com/Clifftech_Dev";
const Linkedin = "https://www.linkedin.com/in/isaiah-clifford-opoku-a506a51b2";

const Footer = () => {
  return (
		<>
			<div className=" bg-Secondary ">
				<div className=" mt-10 flex justify-center ">
					<a href="mailto:email@opokuisaiahclifford123.com">
						<button
							type="button"
							className="inline-flex  items-center space-x-5 rounded-md border border-transparent bg-BntColor px-4 py-2 text-sm font-medium  text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							<AiFillMail />
							<span> Send Me Email</span>{" "}
						</button>
					</a>
				</div>

				{/* SOCIAL ICONS */}
				<div className="flex flex-row text-center mt-10 justify-center space-x-4">
					<a href={Linkedin} class="" target="_blank" rel="noreferrer">
						<button>
							<AiFillLinkedin className="w-8 h-8 text-NavBar" />
						</button>{" "}
					</a>
					<a href={Twitter} class="" target="_blank" rel="noreferrer">
						<button>
							<AiFillTwitterSquare className="w-8 h-8 text-NavBar" />
						</button>
					</a>
					<a href={GitHub} class="" target="_blank" rel="noreferrer">
						<button>
							<VscGithub className="w-8 h-8 text-NavBar" />
						</button>
					</a>
				</div>
				{/* copywriter */}
				<div className="text-center  mt-5">
					<p>
						Copyright &copy; 2022 All rights reserved. Isaiah Clifford Opoku
					</p>
				</div>
			</div>
		</>
	);
}

export default Footer

