"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/utils/motion";

type Certificate = {
	title: string;
	platform: string;
	file: string;
	date?: string;
};

const certificates: Certificate[] = [
	{
		title: "AWS S3 Basics",
		platform: "Coursera",
		file: "/certificates/CourseraAWS.pdf",
		date: "2025",
	},
	{
		title: "Build a mobile app with Google Sheets on Glide ",
		platform: "Coursera",
		file: "/certificates/Courseramobileapp.pdf",
		date: "2025",
	},
	{
		title: "Build a free website with WordPress",
		platform: "Coursera",
		file: "/certificates/freeWordpress.pdf",
		date: "2024",
	},
	{
		title: "Build a Full Website using WordPress",
		platform: "Coursera",
		file: "/certificates/FullstackWordpress.pdf",
		date: "2024",
	},
];

const CertificateCard = ({
	cert,
	index,
}: {
	cert: Certificate;
	index: number;
}) => {
	return (
		<motion.div
			variants={fadeIn("up", "spring", index * 0.15, 0.75)}
			className="bg-tertiary p-6 rounded-2xl shadow-card hover:scale-[1.02] transition"
		>
			<div className="flex flex-col justify-between h-full">
				<div>
					<h3 className="text-white text-[18px] font-bold">
						{cert.title}
					</h3>

					<p className="text-secondary text-sm mt-1">
						{cert.platform} • {cert.date}
					</p>

					<p className="text-gray-400 text-xs mt-3">
						Official certificate (PDF)
					</p>
				</div>

				<a
					href={cert.file}
					target="_blank"
					rel="noopener noreferrer"
					className="mt-6 inline-block text-center bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-semibold py-2 px-4 rounded-lg"
				>
					View Certificate
				</a>
			</div>
		</motion.div>
	);
};

const Certificates = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Proof of Work</p>
				<h2 className="sectionHeadText">Certificates.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Verified certifications from professional platforms showcasing
				full-stack engineering, backend systems, databases, and modern
				web technologies.
			</motion.p>

			<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
				{certificates.map((cert, index) => (
					<CertificateCard
						key={cert.title}
						cert={cert}
						index={index}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Certificates, "certificates");