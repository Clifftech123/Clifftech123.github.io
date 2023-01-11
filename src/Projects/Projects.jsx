import React from "react";
import { FaInternetExplorer } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Aquamet from "../assets/Projects/Aquamet.png";

import FindMentor from "../assets/Projects/findMentor.png";
import ReactCommerceImage from "../assets/Projects/HIGHKING.png";
import GhanaStroge from "../assets/Projects/GhanaStroge.png";
import JavaScriptQouteGenratorImage from "../assets/Projects/javascript.png";
import EducationalWebsite from "../assets/Projects/EductionalWebsite.png";
import JavascriptScrolIMage from "../assets/Projects/JavaScriptScroll.png";
import Hero from "./Hero";
import Footer from "../Components/Footer/Footer";

// PROJECTS HOST LINKS
const aquametWebsiteLinks = "https://aquamettechnologies.com/";
const FindMnetorWeblink =
	"https://find-twitter-mentor-lxwzync6f-clifftech123.vercel.app/";
const ReactCommerce = "https://e-commerce-1eckke2o5-clifftech123.vercel.app/";
const GhanaStrogeWeLink =
	"https://ghana-storage-facility-tepa-branch-dr65r3e37-clifftech123.vercel.app/#Branches";
const JavaQuoteGenerator = "https://clifftech123.github.io/js_quote-generator/";
const EductionalWebsiteWebLink = "https://educationalwebsites.vercel.app/";
const JavascriptScroll =
	"https://clifftech123.github.io/js_Infinite_Image_Scroll/";

// PROJECTS GITHUB LINKS
const aquametGithubLinks = "https://github.com/Aquamet-Technologies";
const FindMentorGithubLinks =
	"https://github.com/Clifftech123/find-twitter-mentor";
const reactCommerce = "https://github.com/Clifftech123/react-ecommerce_website";
const GhanaStrogeGithubLink =
	"https://github.com/Clifftech123/ghana_storage_facility_tepa_branch";
const JavaQuoteGeneratorGithubLink =
	"https://github.com/Clifftech123/js_quote-generator";
const EducationalWebsiteGitHubLink =
	"https://github.com/Clifftech123/educationalwebsites";
const JavascriptScrollGithubLink =
	"https://github.com/Clifftech123/js_Infinite_Image_Scroll";
const NodeApi = " https://github.com/Clifftech123/node_word_richest_list_api";

const Projects = () => {
	return (
		<>
			{/* THIS IS THE HERO SECTION IN THE PAGE CONTAIN THE WELCOME MASSAGE  */}
			<Hero />
			<div className="  bg-Secondary " id="project">
				<div className="container px-6 py-10 mx-auto">
					<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
						{/*  ========= FIRST PROJECT AQUMATE   =========*/}
						<section id=" AQUMATE">
							{/* AQUAMET IMAGE */}
							<div class="max-w-2xl  h-[35rem] lg:h-[40rem]  relative overflow-hidden  bg-NavBar rounded-lg shadow-lg ">
								<img
									class="object-cover w-full h-fll hover:scale-110 transition duration-300 ease-in-out bg-transparent"
									src={Aquamet}
									alt="Aquamet"
								/>
								{/* AQUAMET TEXT  */}
								<div class="p-6">
									<div>
										<p class="block mt-2 font-Poppins  text-2xl font font-semibold  text-gray-50">
											Aquamet Technologies
										</p>
										<p class="mt-2 text-sm text-gray-100 ">
											I worked on aquamettechnologies.com which deals with the
											field of Agriculture. The goal of the website is to
											empower fish farmers in Ghana with advanced technology to
											enhance their productivity and help meet the country's
											fish demand and reduce the fish deficit.
										</p>
									</div>
									{/* EXTERNAL LINKS  */}
									<div className="flex mt-5 space-x-5 flex-row justify-start  ">
										<small className="text-blue-800"></small>
										<a
											//   AQUAMET WEBSITE LINK
											href={aquametWebsiteLinks}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400  "
											target={"_blank"}
											rel="noreferrer"
										>
											<FaInternetExplorer />
										</a>
										<a
											//   AQUAMET GITHUB LINK
											href={aquametGithubLinks}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400 "
											target={"_blank"}
											rel="noreferrer"
										>
											<AiFillGithub />
										</a>
									</div>
								</div>
								{/* TECH STACK BEEN USED  */}
								<h1 className="text-center font-semibold  text-NavBar">
									Teach Stack Been Used{" "}
								</h1>
								<div className="flex flex-row sm:space-x-5 s justify-between sm:justify-center  font-Poppins   text-BntColor justify-between px-20 mt-5 ">
									<small> Javascript</small>
									<small> React </small>
									<small> Tailwind </small>
								</div>
							</div>
						</section>
						{/* END OF AQUAMET */}
						{/* //////////////////////////////////////
						  Find mentor  PROJECT
						 
						  //////////////////////////////////
						 
						 */}
						<section id="findMentorProject" className="">
							{/*  FindMentor IMAGE */}
							<div class="max-w-2xl h-[37rem] lg:h-[40rem] relative overflow-hidden  bg-NavBar rounded-lg shadow-lg ">
								<img
									class="object-cover w-full h-fll hover:scale-110 transition duration-300 bg-white ease-in-out "
									src={FindMentor}
									alt="FindMentor"
								/>
								{/*   FindMentor  */}
								<div class="p-6">
									<div>
										<p class="block mt-2 font-Poppins  text-2xl font font-semibold  text-gray-50">
											FindMentor
										</p>
										<p class="mt-2 text-sm text-gray-100 ">
											Find Mentor that aims to provide support for both beginner
											and advanced developers. The website offers easy access to
											resources and mentorship to help them understand technical
											stacks and how to focus on one. The purpose of this
											website is to make the experience of becoming a developer
											less challenging.
										</p>
									</div>
									{/*  FindMentor EXTERNAL LINKS  */}
									<div className="flex mt-5 space-x-5 flex-row justify-start  ">
										<small className="text-blue-800"></small>
										<a
											//   FindMentor WEBSITE LINK
											href={FindMnetorWeblink}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400  "
											target={"_blank"}
											rel="noreferrer"
										>
											<FaInternetExplorer />
										</a>
										<a
											//    FindMentor GITHUB LINK
											href={FindMentorGithubLinks}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400 "
											target={"_blank"}
											rel="noreferrer"
										>
											<AiFillGithub />
										</a>
									</div>
								</div>
								{/* TECH STACK BEEN USED  */}
								<h1 className="text-center font-semibold  text-NavBar">
									Teach Stack Been Used{" "}
								</h1>
								<div className="flex flex-row  sm:space-x-5  justify-between sm:justify-center font-Poppins   text-BntColor justify-between px-20 mt-5 ">
									<small> Javascript</small>
									<small> React </small>
									<small> Tailwind </small>
								</div>
							</div>
						</section>
						{/* END OF THE FIND MENTOR  */}

						{/* //////////////////////////////////////
						  React and firebase E-commerce
						 
						  //////////////////////////////////
						 
						 */}

						<section id="ReactCommerce" className="">
							{/*  main*/}
							<div class="max-w-2xl  h-[35rem] lg:h-[40rem]  relative overflow-hidden bg-NavBar rounded-lg shadow-lg ">
								<img
									class="object-cover w-full h-fll hover:scale-110 transition duration-300 bg-white ease-in-out "
									src={ReactCommerceImage}
									alt="ReactCommerceImage"
								/>
								{/*    React and firebase E-commerce  */}
								<div class="p-6">
									<div>
										<p class="block mt-2 font-Poppins  text-2xl font font-semibold  text-gray-50">
											HIGHKING
										</p>
										<p class="mt-2 text-sm text-gray-100 ">
											With this e-commerce platform, users are required to
											create an account using their Google email and password.
											Once logged in, they will have access to a wide range of
											products and the ability to view their dashboard and
											product pages.
										</p>
									</div>
									{/*  React and firebase E-commerce EXTERNAL LINKS  */}
									<div className="flex mt-5 space-x-5 flex-row justify-start  ">
										<small className="text-blue-800"></small>
										<a
											//    React and firebase E-commerce WEBSITE LINK
											href={ReactCommerce}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400  "
											target={"_blank"}
											rel="noreferrer"
										>
											<FaInternetExplorer />
										</a>
										<a
											//   React and firebase E-commerce  GITHUB LINK
											href={reactCommerce}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400 "
											target={"_blank"}
											rel="noreferrer"
										>
											<AiFillGithub />
										</a>
									</div>
								</div>
								<div className="flex lg:flex-row sm:flex-row font-Poppins   text-BntColor  space-x-5 s justify-between sm:justify-center px-20 mt-5 ">
									<small> Javascript</small>
									<small> React </small>
									<small> Tailwind </small>
									<small> firebase </small>
								</div>
							</div>
						</section>
						{/* END OF  React and firebase E-commerce */}

						{/* //////////////////////////////////////
						  GHANA STORAGE 
						 
						  //////////////////////////////////
						 
						 */}
						<section id="GhanaStroge" className="">
							{/*  main*/}
							<div class="max-w-2xl  h-[35rem] lg:h-[40rem]  relative overflow-hidden bg-NavBar rounded-lg shadow-lg ">
								<img
									class="object-cover w-full h-fll hover:scale-110 transition duration-300 bg-white ease-in-out "
									src={GhanaStroge}
									alt="GhanaStroge"
								/>
								{/*    React and firebase E-commerce  */}
								<div class="p-6">
									<div>
										<p class="block mt-2 font-Poppins  text-2xl font font-semibold  text-gray-50">
											GhanaStorage
										</p>
										<p class="mt-2 text-sm text-gray-100 ">
											The GhanaStorage website is built with the goal of
											assisting individuals who wish to store their gold. This
											website allows users to easily access and manage their
											stored gold, giving them peace of mind and secure storage
											options.
										</p>
									</div>
									{/*  React and firebase E-commerce EXTERNAL LINKS  */}
									<div className="flex mt-5 space-x-5 flex-row justify-start  ">
										<small className="text-blue-800"></small>
										<a
											//    React and firebase E-commerce WEBSITE LINK
											href={GhanaStrogeWeLink}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400"
											target={"_blank"}
											rel="noreferrer"
										>
											<FaInternetExplorer />
										</a>
										<a
											//   React and firebase E-commerce  GITHUB LINK
											href={GhanaStrogeGithubLink}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400"
											target={"_blank"}
											rel="noreferrer"
										>
											<AiFillGithub />
										</a>
									</div>
								</div>
								<div className="flex lg:flex-row sm:flex-row font-Poppins   text-BntColor  space-x-5 s justify-between sm:justify-center px-20 mt-5 ">
									<small> Javascript</small>
									<small> React </small>
									<small> Tailwind </small>
								</div>
							</div>
						</section>
						{/* END OF GHANA STORAGE */}

						{/* //////////////////////////////////////
						 JavaQuoteGenerator
						 
						  //////////////////////////////////
						  
						 
						 */}
						<section id="javascript Quote Generator" className="">
							{/*  main*/}
							<div class="max-w-2xl  h-[37rem] lg:h-[40rem]  relative overflow-hidden bg-NavBar rounded-lg shadow-lg ">
								<img
									class="object-cover w-full h-fll hover:scale-110 transition duration-300 bg-white ease-in-out "
									src={JavaScriptQouteGenratorImage}
									alt="JavaScriptQouteGenratorImage"
								/>
								{/*    javaScript QuoteGenerator  */}
								<div class="p-6">
									<div>
										<p class="block mt-2 font-Poppins  text-2xl font font-semibold  text-gray-50">
											JavaScript Quote Generator
										</p>
										<p class="mt-2 text-sm text-gray-100 ">
											This JavaScript quote generator app uses the FIT API to
											generate random quotes from famous authors and speakers.
											The app allows users to browse through a selection of
											quotes and select their favorite, or generate a random
											quote with the click of a button. 
										</p>
									</div>
									{/*  javaScript QuoteGenerator EXTERNAL LINKS  */}
									<div className="flex mt-5 space-x-5 flex-row justify-start  ">
										<small className="text-blue-800"></small>
										<a
											//    React and firebase E-commerce WEBSITE LINK
											href={JavaQuoteGenerator}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400  "
											target={"_blank"}
											rel="noreferrer"
										>
											<FaInternetExplorer />
										</a>
										<a
											//   javaScript QuoteGenerator  GITHUB LINK
											href={JavaQuoteGeneratorGithubLink}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400 "
											target={"_blank"}
											rel="noreferrer"
										>
											<AiFillGithub />
										</a>
									</div>
								</div>
								<div className="flex lg:flex-row sm:flex-row font-Poppins   text-BntColor  space-x-5 s justify-between sm:justify-center px-20 mt-5 ">
									<small> Javascript</small>
									<small> HTML </small>
									<small> CSS </small>
									<small> Type Fit ApI </small>
								</div>
							</div>
						</section>
						{/* END OF THE  javaScript QuoteGenerator */}

						{/* //////////////////////////////////////
						   Educational Website
						 
						  //////////////////////////////////
						  
						 
						 */}

						<section id="Educational Website" className="">
							{/*  main*/}
							<div class="max-w-2xl  h-[35rem] lg:h-[40rem]  relative overflow-hidden text-white bg-NavBar rounded-lg shadow-lg ">
								<img
									class="object-cover w-full h-fll hover:scale-110 transition duration-300 bg-white ease-in-out "
									src={EducationalWebsite}
									alt="EducationalWebsite"
								/>
								{/*    Educational Website   */}
								<div class="p-6">
									<div>
										<p class="block mt-2 font-Poppins  text-2xl font font-semibold  text-gray-50">
											Educational Website
										</p>
										<p class="mt-2 text-sm text-100 ">
											An educational website is a platform that provides access
											to various educational materials such as online courses,
											articles, and other resources. It is designed to help
											people of all ages and backgrounds learn and expand their
											knowledge in different subject areas. These websites
											usually offers a wide range of educational resources that
											are easily accessible, interactive, and user-friendly.
										</p>
									</div>
									{/*   Educational Website EXTERNAL LINKS  */}
									<div className="flex mt-5 space-x-5 flex-row justify-start  ">
										<small className="text-blue-800"></small>
										<a
											//    Educational Website WEBSITE LINK
											href={EductionalWebsiteWebLink}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400  "
											target={"_blank"}
											rel="noreferrer"
										>
											<FaInternetExplorer />
										</a>
										<a
											//   Educational Website  GITHUB LINK
											href={EducationalWebsiteGitHubLink}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400 "
											target={"_blank"}
											rel="noreferrer"
										>
											<AiFillGithub />
										</a>
									</div>
								</div>
								<div className="flex lg:flex-row sm:flex-row font-Poppins   text-BntColor  space-x-5 s justify-between sm:justify-center px-20 mt-5 ">
									<small> Javascript</small>
									<small> React </small>
									<small> Tailwind </small>
								</div>
							</div>
						</section>

						{/* //////////////////////////////////////
						    INFINITE IMAGE SCROLL
						 
						  //////////////////////////////////
						  
						 
						 */}
						<section id="Educational Website" className="">
							{/*  main*/}
							<div class="max-w-2xl  h-[37rem] lg:h-[40rem]  relative overflow-hidden text-white bg-NavBar rounded-lg shadow-lg ">
								<img
									class="object-cover w-full h-fll hover:scale-110 transition duration-300 bg-white ease-in-out "
									src={JavascriptScrolIMage}
									alt="EducationalWebsite"
								/>
								{/*    Infinite Image Scroll   */}
								<div class="p-6">
									<div>
										<p class="block mt-2 font-Poppins  text-2xl font font-semibold  text-gray-50">
											Infinite Image Scroll
										</p>
										<p class="mt-2 text-sm text-100 ">
											This JavaScript image scrolling application utilizes the
											Unsplash Image API to provide an infinite scrolling
											experience for users. The application allows users to
											continuously scroll through a wide variety of images,
											seamlessly pulling in new images as they scroll. The
											Unsplash API is a database of high-quality images that the
											application can access and use to populate the scrolling
											experience.
										</p>
									</div>
									{/*   Infinite Image Scroll EXTERNAL LINKS  */}
									<div className="flex mt-5 space-x-5 flex-row justify-start  ">
										<small className="text-blue-800"></small>
										<a
											//   Infinite Image Scroll WEBSITE LINK
											href={JavascriptScroll}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400  "
											target={"_blank"}
											rel="noreferrer"
										>
											<FaInternetExplorer />
										</a>
										<a
											//  Infinite Image Scroll  GITHUB LINK
											href={JavascriptScrollGithubLink}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400 "
											target={"_blank"}
											rel="noreferrer"
										>
											<AiFillGithub />
										</a>
									</div>
								</div>
								<div className="flex lg:flex-row sm:flex-row font-Poppins   text-BntColor  space-x-5 s justify-between sm:justify-center px-20 mt-5 ">
									<small> Javascript</small>
									<small> HTML </small>
									<small> Css </small>
									<small> Unsplash ApI </small>
								</div>
							</div>
						</section>
						{/* END OF THE Infinite Image Scroll */}

						{/* //////////////////////////////////////
						    NODE JS Richest Api
						 
						  //////////////////////////////////
						  
						 
						 */}
						<section id="Educational Website" className="">
							{/*  main*/}
							<div class="max-w-2xl  h-[27rem] lg:h-[20rem]  relative overflow-hidden text-white bg-NavBar rounded-lg shadow-lg ">
								{/*     NODE JS Richest Api   */}
								<div class="p-6">
									<div>
										<p class="block mt-2 font-Poppins  text-2xl font font-semibold  text-gray-50">
											Top 50 Richest API
										</p>
										<p class="mt-2 text-sm text-100 ">
											This is a simple Node.js API that provides information on
											the top 50 richest people in the world, including
											individuals from 14 countries: the United States, China,
											France, Russia, Switzerland, Germany, Japan, the United
											Kingdom, Spain, Mexico, India, Italy, Belgium, and Canada.
											The API retrieves data from a reliable source and provides
											it in a clear and easy-to-use format, making it useful for
											financial analysis, business research, or even for
											personal interest.
										</p>
									</div>
									{/*    NODE JS Richest Api EXTERNAL LINKS  */}
									<div className="flex mt-5 space-x-5 flex-row justify-start  ">
										<a
											//   NODE JS Richest Api  GITHUB LINK
											href={NodeApi}
											class="mt-2 text-2xl text-center font-semibold  transition-colors duration-300 transform  hover:text-BntColor  text-gray-400 "
											target={"_blank"}
											rel="noreferrer"
										>
											<AiFillGithub />
										</a>
									</div>
								</div>
								<div className="flex lg:flex-row sm:flex-row font-Poppins   text-BntColor  space-x-5 s justify-between sm:justify-center px-20 mt-5 ">
									<small> Javascript</small>
									<small> Node </small>
									<small> Express </small>
								</div>
							</div>
						</section>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Projects;
