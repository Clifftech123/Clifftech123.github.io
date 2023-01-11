import React from 'react'
import Welcome from ".././Hero/WelcomeText";
import javascript from '../../assets/Skills/javascript.png'
import react from '../../assets/Skills/react.png'
import node from '../../assets/Skills/node.png'
import ManogoDb from '../../assets/Skills/mongo.png'
import firebase from '../../assets/Skills/firebase.png'
import Html from "../../assets/Skills/html.png";
import tailwind from "../../assets/Skills/tailwind.png";
import css from "../../assets/Skills/css.png";
import Nextjs from "../../assets/Skills/nextjs.png";
import git from "../../assets/Skills/git.png";
import github from "../../assets/Skills/github1.png";
import express from "../../assets/Skills/express.png";



const Skills = () => {
	return (
		<>
			<section id="skills" class="px-10 py-24 lg:mx-auto max-w-6xl ">
				<h1 class="mb-3  text-3xl font-bold leading-tight text-center text-gray-900 md:text-4xl">
					My StacK Tools
				</h1>
				<p class="mb-16 text-lg text-center text-gray-600">
			       I am Focused on  MERN Stack
				</p>
				<div class="grid grid-cols-3 gap-16 mb-16 text-center lg:grid-cols-3">
					{/* Javascript */}
					<div class="flex items-center justify-center">
						<img
							src={javascript}
							alt="javascript"
							class="block object-contain h-16"
						/>
					</div>
					{/* React */}
					<div class="flex items-center justify-center">
						<img src={react} alt=" React" class="block object-contain h-16" />
					</div>
					{/* NODE */}
					<div class="flex items-center justify-center">
						<img src={node} alt="node" class="block object-contain h-16" />
					</div>
					{/* ManogoDb */}
					<div class="flex items-center justify-center">
						<img
							src={ManogoDb}
							alt="ManogoDb"
							class="block object-contain h-16"
						/>
					</div>
					{/* Html */}
					<div class="flex items-center justify-center">
						<img src={Html} alt="Html" class="block object-contain h-16" />
					</div>
					{/* tailwind */}
					<div class="flex items-center justify-center">
						<img
							src={tailwind}
							alt="tailwind"
							class="block object-contain h-16"
						/>
					</div>
					{/* firebase */}
					<div class="flex items-center justify-center">
						<img
							src={firebase}
							alt=" firebase "
							class="block object-contain h-16"
						/>
					</div>
					{/* CSS */}
					<div class="flex items-center justify-center">
						<img src={css} alt=" css " class="block object-contain h-16" />
					</div>
					{/*  Nextjs */}
					<div class="flex items-center justify-center">
						<img
							src={Nextjs}
							alt="  Nextjs "
							class="block object-contain h-16"
						/>
					</div>
					{/*  git */}
					<div class="flex items-center justify-center">
						<img src={git} alt="  git " class="block object-contain h-16" />
					</div>
					{/*  github */}
					<div class="flex items-center justify-center">
						<img
							src={github}
							alt="  github "
							class="block object-contain h-16"
						/>
					</div>
					{/* express */}
					{/*  express*/}
					<div class="flex items-center justify-center">
						<img
							src={express}
							alt="  express "
							class="block object-contain h-16"
						/>
					</div>
				</div>
			</section>

			<div class="w-full  h-80 bg-center bg-cover bg-Welcome  ">
				<div class=" h-full  bg-NavBar  bg-opacity-90">
					<Welcome />
				</div>
			</div>
			
		</>
	);
}

export default Skills
