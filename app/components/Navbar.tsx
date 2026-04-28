"use client";

import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ResumeButton from "./ResumeButton";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	// Scroll background effect
	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 80);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Scroll spy (auto active section detection)
	useEffect(() => {
		const sections = navLinks.map((nav) =>
			document.getElementById(nav.id)
		);

		const handleScrollSpy = () => {
			let current = "";

			sections.forEach((section) => {
				if (!section) return;

				const rect = section.getBoundingClientRect();

				if (rect.top <= 150 && rect.bottom >= 150) {
					current = section.id;
				}
			});

			if (current) setActive(current);
		};

		window.addEventListener("scroll", handleScrollSpy);
		return () => window.removeEventListener("scroll", handleScrollSpy);
	}, []);

	return (
		<nav
			className={`paddingX w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${
				scrolled ? "bg-primary/90 backdrop-blur-md shadow-lg" : "bg-transparent"
			}`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">

				{/* Logo */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className="flex items-center gap-2 cursor-pointer"
					onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				>
					<Image
						src="/logo.webp"
						width={70}
						height={70}
						alt="logo"
						className="object-contain"
					/>
					<p className="text-white text-[18px] font-bold">
						Ashenafi <span className="text-secondary">Getachew</span>
					</p>
				</motion.div>

				{/* Desktop Nav */}
				<ul className="hidden sm:flex gap-8 relative">
					{navLinks.map((nav, index) => (
						<li key={nav.id} className="relative group">
	<Link
		href={`#${nav.id}`}
		onClick={() => setActive(nav.id)}
		className={`relative text-[16px] font-medium transition-all duration-300 ${
			active === nav.id ? "text-white" : "text-secondary"
		}`}
	>
		{/* Text lift effect */}
		<span className="inline-block transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-white">
			{nav.title}
		</span>

		{/* Hover glow underline */}
		<span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 group-hover:w-full" />
	</Link>

	{/* Active underline (persistent) */}
	{active === nav.id && (
		<motion.div
			layoutId="active-underline"
			className="absolute left-0 -bottom-2 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-pink-500"
		/>
	)}
</li>
					))}
				</ul>

				{/* Resume Button */}
				<div className="hidden lg:block">
					<ResumeButton />
				</div>

				{/* Mobile Menu Button */}
				<div className="sm:hidden flex items-center">
					<Image
						src={toggle ? "/close.svg" : "/menu.svg"}
						width={28}
						height={28}
						alt="menu"
						className="cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{toggle && (
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 50 }}
							transition={{ duration: 0.3 }}
							className="absolute top-20 right-5 bg-tertiary p-6 rounded-xl shadow-xl sm:hidden"
						>
							<ul className="flex flex-col gap-4">
								{navLinks.map((nav) => (
									<li key={nav.id}>
										<Link
											href={`#${nav.id}`}
											onClick={() => {
												setActive(nav.id);
												setToggle(false);
											}}
											className={`text-[16px] ${
												active === nav.id
													? "text-white"
													: "text-secondary"
											}`}
										>
											{nav.title}
										</Link>
									</li>
								))}

								<div className="mt-4">
									<ResumeButton />
								</div>
							</ul>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
};

export default Navbar;