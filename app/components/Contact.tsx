"use client";

import { slideIn } from "@/app/utils/motion";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
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
			setForm({ name: "", email: "", message: "" });
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

					{/* NAME */}
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
						placeholder="Your Name"
						className="bg-tertiary px-5 py-3 text-white rounded-lg outline-none focus:ring-2 focus:ring-cyan-400 transition"
					/>

					{/* EMAIL */}
					<input
						type="email"
						name="email"
						value={form.email}
						onChange={handleChange}
						placeholder="Your Email"
						className="bg-tertiary px-5 py-3 text-white rounded-lg outline-none focus:ring-2 focus:ring-pink-400 transition"
					/>

					{/* MESSAGE */}
					<textarea
						rows={6}
						name="message"
						value={form.message}
						onChange={handleChange}
						placeholder="Your Message"
						className="bg-tertiary px-5 py-3 text-white rounded-lg outline-none focus:ring-2 focus:ring-purple-400 transition"
					/>

					{/* BUTTON */}
					<button
						type="submit"
						disabled={loading}
						className="relative overflow-hidden bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-semibold py-3 rounded-lg transition hover:scale-[1.02]"
					>
						{loading ? "Sending..." : "Send Message"}
					</button>

					{/* SUCCESS MESSAGE */}
					{success && (
						<p className="text-green-400 text-sm mt-2">
							Message sent successfully.
						</p>
					)}
				</form>
			</motion.div>

			{/* 3D EARTH */}
			<motion.div
				variants={slideIn("right", "tween", 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
			>
				<EarthCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");