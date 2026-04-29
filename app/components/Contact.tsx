"use client";

import { slideIn } from "@/app/utils/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SectionWrapper } from "./HigherOrderComponents";
import { EarthCanvas } from "./canvas";

const Contact = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	// ✅ MOBILE DETECTION (safe)
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!form.name || !form.email || !form.message) {
			alert("Fill all fields.");
			return;
		}

		try {
			setLoading(true);

			await emailjs.send(
				"service_91ssn8g",
				"template_jjegxdr",
				{
					from_name: form.name,
					to_name: "Ashenafi Getachew",
					from_email: form.email,
					to_email: "omunite21@gmail.com",
					message: form.message,
				},
				"VeFeVdEHL9F9_i6xp"
			);

			setSuccess(true);

			// reset form
			setForm({ name: "", email: "", message: "" });

			// auto hide success after 4s
			setTimeout(() => setSuccess(false), 4000);
		} catch (error) {
			alert("Something went wrong. Try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">

			{/* FORM */}
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100/70 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-xl"
			>
				<p className="text-secondary text-sm">Let’s Build Something</p>
				<h3 className="text-white text-3xl font-bold">Contact Me</h3>

				<p className="text-secondary text-sm mt-2">
					Got a project, idea, or opportunity? Send a message.
				</p>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-10 flex flex-col gap-6"
				>

					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
						placeholder="Your Name"
						className="bg-tertiary px-5 py-3 text-white rounded-lg outline-none"
					/>

					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						placeholder="Your Email"
						className="bg-tertiary px-5 py-3 text-white rounded-lg outline-none"
					/>

					<textarea
						rows={6}
						name="message"
						value={form.message}
						onChange={handleChange}
						placeholder="Your Message"
						className="bg-tertiary px-5 py-3 text-white rounded-lg outline-none"
					/>

					<button
						type="submit"
						disabled={loading}
						className="bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-semibold py-3 rounded-lg"
					>
						{loading ? "Sending..." : "Send Message"}
					</button>

					{success && (
						<p className="text-green-400 text-sm mt-2">
							Message sent successfully.
						</p>
					)}
				</form>
			</motion.div>

			{/* 3D EARTH (SAFE MOBILE FIX) */}
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				{!isMobile ? (
					<EarthCanvas />
				) : (
					<div className="flex items-center justify-center h-full text-white opacity-60">
						3D Earth disabled on mobile for performance
					</div>
				)}
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");