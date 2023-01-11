import { useState, useEffect, useRef } from "react";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { HashLink } from "react-router-hash-link";

const Nav = () => {
	const [mobileNavOpen, setMobileNavOpen] = useState(false);
	// useRef function to close the navbar when your click out the navbar
	let menuRef = useRef();
	useEffect(() => {
		let handler = (e) => {
			if (!menuRef.current.contains(e.target)) {
				setMobileNavOpen(false);
				console.log(menuRef.current);
			}
		};

		document.addEventListener("mousedown", handler);

		return () => {
			document.removeEventListener("mousedown", handler);
		};
	} );
	// SOCIAL IOCNS 

	const GitHub = "https://github.com/Clifftech123";
	const Twitter = "https://twitter.com/Clifftech_Dev";
	const Linkedin =
		"https://www.linkedin.com/in/isaiah-clifford-opoku-a506a51b2";

	return (
		<>
			<nav>
				{/* Page Header */}
				<header
					id="page-header"
					className=" flex flex-none items-center fixed top-0 left-0 right-0  duration-100  bg-NavBar  shadow-xl  z-50"
				>
					<div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
						<div className="flex justify-between py-4">
							{/* Left Section */}
							<div className="flex items-center">
								{/* Logo */}
								<button className="group inline-flex items-center space-x-2 font-bold text-xl tracking-wide ">
									<svg
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
										className="opacity-90   text-white transform transition group-hover:scale-110 hi-solid hi-cube-transparent inline-block w-5 h-5"
									>
										<path
											fillRule="evenodd"
											d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
											clipRule="evenodd"
										/>
									</svg>
									<span className="text-white font-Poppins text-5xl italic">
										CI{" "}
									</span>{" "}
									<span className="text-BntColor text-5xl">.</span>
								</button>
								{/* END Logo */}
							</div>

							{/* END Left Section */}

							{/* Right Section */}
							<div className="flex items-center space-x-1 lg:space-x-5">
								{/* Desktop Navigation */}
								<nav className="hidden lg:flex lg:items-center lg:space-x-2">
									{/* HOME */}
									<button
										type="button"
										className=" flex  hover:transition-colors hover:duration-200 border-BntColor border-l   hover:bg-BntColor items-center space-x-2 px-3 py-2 rounded   font-medium text-lg font-Poppins  tracking-wide text-gray-50 "
									>
										Home
									</button>
									{/* ABOUT */}
									<HashLink smooth to="/#about">
										<button
											type="button"
											className="font-medium  hover:transition-colors hover:duration-200  border-BntColor border-l   hover:bg-BntColor text-lg font-Poppins  tracking-wide flex items-center space-x-2 px-3 py-2 rounded  text-gray-50     "
										>
											<span>About </span>
										</button>
									</HashLink>

									{/* PROJECTS project */}
									<HashLink smooth to="/#project">
										<button
											type="button"
											className="font-medium  hover:transition-colors hover:duration-200 border-BntColor border-l   hover:bg-BntColor text-lg font-Poppins  tracking-wide flex items-center space-x-2 px-3 py-2 rounded  text-gray-50  "
										>
											<span> Projects </span>
										</button>
									</HashLink>

									{/* SKILLS */}
									<HashLink smooth to="/#skills">
										<button
											type="button"
											className="font-medium transition-colors duration-200 border-BntColor border-l  hover:bg-BntColor text-lg font-Poppins  tracking-wide flex items-center space-x-2 px-3 py-2 rounded   text-gray-50    "
										>
											Skills
										</button>
									</HashLink>

									{/*  CONTACT    */}
									<button
										type="button"
										className="font-medium transition-colors duration-200 border-BntColor border-l   hover:bg-BntColor text-lg font-Poppins  tracking-wide flex items-center space-x-2 px-3 py-2 rounded   text-gray-50  "
									>
										<span> Contact </span>
									</button>
									<div className=" flex justify-end  shadow-xl ml-60">
										<button className=" font-Poppins  text-xl items-center bg-BntColor space-x-11 h-12 px-6 font-medium tracking-wide text-white  transition duration-200 rounded shadow-sm  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
											Resume
										</button>
									</div>
								</nav>

								{/* END Desktop Navigation */}

								{/* Toggle Mobile Navigation */}
								<div className="xl:hidden">
									<button
										type="button"
										className="flex transition  duration-400 justify-center items-center space-x-2  font-semibold focus:outline-none px-3 py-2 bg-white hover:bg-BntColor leading-6 rounded hover:border-gray-300  hover:text-white focus:ring-opacity-25 active:bg-white  active:shadow-none"
										onClick={() => setMobileNavOpen(!mobileNavOpen)}
									>
										{mobileNavOpen ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-6 h-6 "
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
													clipRule="evenodd"
												/>
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-6 h-6"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												strokeWidth={2}
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													d="M4 6h16M4 12h16M4 18h16"
												/>
											</svg>
										)}
									</button>
								</div>
								{/* END Toggle Mobile Navigation */}
							</div>
							{/* END Right Section */}
						</div>

						{/* Mobile view Navigation This section will show on only mobile devices */}
						<div
							ref={menuRef}
							className={`   bg-NavBar shadow-2xl    fixed top-0 z-50  w-3/4 h-screen  lg:hidden flex flex-col gap-10  text-medium  p-7 pt-10 right-0  duration-500 xl:hidden ${
								mobileNavOpen ? "right- text-center" : "right-[-100%]"
							}`}
						>
							{/* Toggle Mobile Navigation  on small device */}
							<div className="lg:hidden  ">
								{/* close the navbar icons  */}
								<button
									type="button"
									className="flex  transition  duration-400 justify-center items-center space-x-2  font-semibold focus:outline-none px-3 py-2 leading-6 rounded    text-white    focus:ring focus:ring-gray-200 focus:ring-opacity-25 "
									onClick={() => setMobileNavOpen(!mobileNavOpen)}
								>
									{mobileNavOpen ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6   dark:text-white"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									)}
								</button>
							</div>
							{/* END OF TOGGLE ICON */}

							<nav className="flex  justify-center text-center  transition duration-300  flex-col space-y-2 py-4    ">
								{/* HOME */}
								<div className="w-full  hover:transition-colors hover:duration-200 hover:bg-BntColor hover:text-color-white hover:rounded-md">
									<button
										type="button"
										className="text-white font-medium text-lg text-center font-Poppins  tracking-wide  flex items-center space-x-2 px-3 py-2 rounded "
									>
										<span> Home </span>
									</button>
								</div>

								<hr className="  border-BntColor" />
								{/* ABOUT */}
								<HashLink smooth to="/#about">
									<div className="w-full hover:bg-BntColor hover:text-color-white  hover:transition-colors hover:duration-200 hover:rounded-md">
										<button
											type="button"
											className="font-medium text-lg font-Poppins  tracking-wide   flex items-center space-x-2 px-3 py-2 rounded   text-white  "
										>
											About
										</button>
									</div>
								</HashLink>

								{/* PROJECTS */}
								<hr className="  border-BntColor" />
								<HashLink smooth to="/#project">
									<div className="w-full  hover:transition-colors hover:duration-200 hover:bg-BntColor hover:text-color-white hover:rounded-md">
										<button
											type="button"
											className="   font-medium text-lg font-Poppins  tracking-wide  flex items-center space-x-2 px-3 py-2 rounded   text-white  "
										>
											Projects
										</button>
									</div>
								</HashLink>

								{/* SKILLS */}
								<hr className="  border-BntColor" />
								<HashLink smooth to="/#skills">
									<div className="w-full  hover:transition-colors hover:duration-200  hover:bg-BntColor hover:text-color-white hover:rounded-md">
										<button
											type="button"
											className="font-medium text-lg font-Poppins  tracking-wide  flex items-center space-x-2 px-3 py-2 rounded   text-white  "
										>
											Skills
										</button>
									</div>
								</HashLink>

								<hr className="  border-BntColor" />
							</nav>
							{/* RESUME BUTTON */}
							<button className=" font-Poppins justify-end  text-xl items-center bg-BntColor space-x-11 h-12 px-6 font-medium tracking-wide text-white  transition duration-200 rounded shadow-sm  hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
								Resume
							</button>

							{/* SOCIAL ICONS */}
							{/* SOCIAL ICONS */}
							<div className="flex flex-row text-center mt-10 justify-center space-x-4">
								<a href={Linkedin} class="" target="_blank" rel="noreferrer">
									<button>
										<AiFillLinkedin className="w-8 h-8 text-white" />
									</button>{" "}
								</a>
								<a href={Twitter} class="" target="_blank" rel="noreferrer">
									<button>
										<AiFillTwitterSquare className="w-8 h-8 text-white" />
									</button>
								</a>
								<a href={GitHub} class="" target="_blank" rel="noreferrer">
									<button>
										<VscGithub className="w-8 h-8 text-white" />
									</button>
								</a>
							</div>
						</div>
						{/* END Mobile Navigation */}
					</div>
				</header>
				{/* END Page Header */}
			</nav>
		</>
	);
};

export default Nav;
