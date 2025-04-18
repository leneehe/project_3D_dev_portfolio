"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useMobile from "./hooks/useIsMobile";
import { Tilt } from "react-tilt";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type ProjectCardProps = {
	index: number;
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	site_link?: string;
	prototype_link?: string;
	isMobile: boolean;
};

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	site_link,
	prototype_link,
	isMobile
}: ProjectCardProps) => {
	const component = (
		<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
			>
				<div className="relative w-full h-[230px]">
					<Image
						src={image}
						width={1000}
						height={1000}
						alt="project_image"
						className="w-full h-full object-cover rounded-2xl"
					/>

					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						{source_code_link && <Link
							href={source_code_link}
							target="_blank"
							className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src="/tech/github.webp"
								width={24}
								height={24}
								alt="source-code"
								className="object-contain"
							/>
						</Link>}
						{prototype_link && <Link
							href={prototype_link}
							target="_blank"
							className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src="/tech/figma.webp"
								width={24}
								height={24}
								alt="source code"
								className="object-contain"
							/>
						</Link>}
						{site_link && <Link
							href={site_link}
							target="_blank"
							className="black-gradient w-10 h-10 ml-2 rounded-full flex justify-center items-center cursor-pointer"
						>
							<Image
								src="/tech/website.png"
								width={24}
								height={24}
								alt="source code"
								className="object-contain"
							/>
						</Link>}
					</div>
				</div>

				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
	)
	if (isMobile) {return component}
	else {
		return (
			<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
				{component}
			</motion.div>
		);
	}
};

const Works = () => {
	const {isMobile} = useMobile();

	const description = `Following projects showcases my skills and experience through
					real-world examples of my work. Each project is briefly described with
					links to code repositories and live demos in it. It reflects my
					ability to solve complex problems, work with different technologies,
					and manage projects effectively.`;

	const headerElements = (
		<>
			<p className="sectionSubText">My work</p>
			<h2 className="sectionHeadText">Projects.</h2>
		</>
	)

	return (
		<div className="mt-12">
			{ !isMobile &&
				<motion.div variants={textVariant()}>
					{ headerElements }
				</motion.div>
			}

			{
				isMobile && <div> { headerElements } </div>
			}

			<div className="w-full flex">
			{ !isMobile &&
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
				>
					{ description }
				</motion.p>
			}
			{
				isMobile &&
				<p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
					{ description }
				</p>
			}
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} isMobile={isMobile} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Works, "");
