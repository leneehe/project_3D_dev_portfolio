"use client";
import { SectionWrapper } from "@/app/components/HigherOrderComponents";
import { experiences } from "@/app/constants";
import { textVariant } from "@/app/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";
import Link from "next/link";


type ExperienceCardProps = {
	experience: (typeof experiences)[0];
};


const ExperienceCard = ({ experience }: ExperienceCardProps) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		rootMargin: "-390px",
	  });

	return (
		<VerticalTimelineElement
			visible = {inView}
			contentStyle={{
				background: "#1d1836",
				color: "#fff",
			}}
			contentArrowStyle={{ borderRight: "7px solid  #232631" }}
			date={experience.date}
			iconStyle={{ background: experience.iconBg }}
			icon={
				<div className="flex justify-center items-center w-full h-full">
					<Image
						src={experience.icon}
						width={48}
						height={48}
						alt={experience.company_name}
						className="w-[60%] h-[60%] object-contain"
					/>
				</div>
			}
		>
			<div ref={ref}>
				<h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
				<p
					className="text-secondary text-[16px] font-semibold"
					style={{ margin: 0 }}
				>
					{experience.company_name}
				</p>
			</div>

			<ul className="mt-5 list-disc ml-5 space-y-2">
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						className="text-white-100 text-[14px] pl-1 tracking-wider"
					>
						{point}
					</li>
				))}
				{
					experience.cta && <Link
					href={experience.cta?.link}
					target="_blank">
						<button type="button" 
						className="font-small text-center mt-3 px-3 py-2 bg-[#915EFF] hover:bg-purple-600 hover:-translate-y-0.5 rounded-md">
							{experience.cta?.text}
						</button>
					</Link>
				}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="styles.sectionSubText text-center">
					Work Experience
				</p>
				<h2 className="sectionHeadText text-center">My Journey.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline layout="2-columns">
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "work");
