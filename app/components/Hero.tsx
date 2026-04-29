"use client";

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	const words = [
		"Full Stack Software Engineer",
		"UI/UX Builder",
		"Nextjs React Nest prisma python Developer",
		"System Designer",
		"Wordpress Developer",
		"Network",
	];

	const [wordIndex, setWordIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [isMobile, setIsMobile] = useState(false);

	// ✅ MOBILE DETECTION (safe)
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	// ✅ TYPEWRITER EFFECT
	useEffect(() => {
		const currentWord = words[wordIndex];
		const speed = isDeleting ? 50 : 100;

		const timeout = setTimeout(() => {
			if (!isDeleting) {
				const next = currentWord.substring(0, charIndex + 1);
				setText(next);
				setCharIndex((prev) => prev + 1);

				if (next === currentWord) {
					setIsDeleting(true);
				}
			} else {
				const next = currentWord.substring(0, charIndex - 1);
				setText(next);
				setCharIndex((prev) => prev - 1);

				if (next === "") {
					setIsDeleting(false);
					setWordIndex((prev) => (prev + 1) % words.length);
					setCharIndex(0);
				}
			}
		}, speed);

		return () => clearTimeout(timeout);
	}, [charIndex, isDeleting, wordIndex]);

	return (
		<section className="relative w-full h-screen mx-auto">

			{/* TEXT SECTION */}
			<div className="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">

				{/* LEFT LINE */}
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#915EFF]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>

				{/* TEXT */}
				<div>
					<h1 className="heroHeadText text-white drop-shadow-lg">
						Hi, I&apos;m{" "}
						<span className="text-[#915EFF]">Ashenafi</span>
					</h1>

					<p className="heroSubText flex items-center gap-1">
						{text}
						<span className="animate-pulse">|</span>
					</p>
				</div>
			</div>

			{/* 3D OR MOBILE FALLBACK */}
			{!isMobile ? (
				<ComputersCanvas />
			) : (
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="text-center text-white opacity-70">
						<h2 className="text-xl font-bold">
							Full Stack Developer
						</h2>
						<p className="text-sm mt-2">
							Building scalable web systems
						</p>
					</div>
				</div>
			)}

			{/* SCROLL INDICATOR */}
			<div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
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