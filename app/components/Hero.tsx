"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div className="paddingX absolute inset-0 top-[120px] max-w-7xl flex flex-row">
				<div className="ml-auto min-w-40 pt-6 md:pt-2 px-6 md:px-8">
					<Image
						src="/avatar.jpg"
						className="rounded-full border-4 md:border-8 border-indigo-950"
						width={200}
						height={200}
						alt="Lena He"
						/>
				</div>
				<div className="flex flex-row items-start gap-5">
					<div className="flex flex-col justify-center items-center mt-5">
						<div className="w-5 h-5 rounded-full bg-[#915EFF] " />
						<div className="w-1 sm:h-80 h-40 violet-gradient" />
					</div>
					<div>
						<h1 className="heroHeadText text-white">
							Hi, I&apos;m <span className="text-[#915EFF] ">Lena</span>
						</h1>
						<p className="heroSubText">
							A Software Engineer, Frontend Developer&nbsp;
							<br className="sm:block hidden" />& UI/UX Designer
						</p>
					</div>
				</div>
			</div>
			<ComputersCanvas />
			<div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Number.POSITIVE_INFINITY,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
