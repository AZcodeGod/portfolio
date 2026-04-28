"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "@/app/utils/motion";

type Skill = {
	name: string;
	level: number;
};

type SkillGroup = {
	title: string;
	skills: Skill[];
};

const skillGroups: SkillGroup[] = [
	{
		title: "Frontend",
		skills: [
			{ name: "React", level: 95 },
			{ name: "Next.js", level: 92 },
			{ name: "TypeScript", level: 90 },
			{ name: "JavaScript", level: 95 },
			{ name: "Tailwind CSS", level: 93 },
			{ name: "Shadcn UI", level: 88 },
			{ name: "Bootstrap", level: 85 },
		],
	},
	{
		title: "Backend",
		skills: [
			{ name: "Node.js", level: 90 },
			{ name: "NestJS", level: 87 },
			{ name: "Python", level: 80 },
		],
	},
	{
		title: "Database & ORM",
		skills: [
			{ name: "PostgreSQL", level: 88 },
			{ name: "Prisma", level: 90 },
			{ name: "MongoDB", level: 85 },
		],
	},
	{
		title: "Cloud & DevOps",
		skills: [
			{ name: "Docker", level: 80 },
			{ name: "Supabase", level: 85 },
			{ name: "Neon DB", level: 82 },
		],
	},
];

const SkillBar = ({ name, level }: Skill) => {
	return (
		<div className="mb-4">
			<div className="flex justify-between mb-1">
				<p className="text-white text-sm">{name}</p>
				<p className="text-secondary text-sm">{level}%</p>
			</div>

			<div className="w-full h-2 bg-black-200 rounded-full overflow-hidden">
				<motion.div
					initial={{ width: 0 }}
					whileInView={{ width: `${level}%` }}
					transition={{ duration: 1 }}
					className="h-full bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500"
				/>
			</div>
		</div>
	);
};

const SkillGroupCard = ({
	group,
	index,
}: {
	group: SkillGroup;
	index: number;
}) => {
	return (
		<motion.div
			variants={fadeIn("up", "spring", index * 0.2, 0.75)}
			className="w-full md:w-[48%] bg-tertiary p-6 rounded-2xl shadow-lg"
		>
			<h3 className="text-white text-xl font-bold mb-6">
				{group.title}
			</h3>

			{group.skills.map((skill) => (
				<SkillBar key={skill.name} {...skill} />
			))}
		</motion.div>
	);
};

const Skills = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className="sectionSubText">Tech Stack</p>
				<h2 className="sectionHeadText">Skills.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Full-stack engineer focused on building scalable systems using
				modern frameworks, cloud infrastructure, and production-grade
				architectures.
			</motion.p>

			<div className="mt-16 flex flex-wrap gap-6 justify-between">
				{skillGroups.map((group, index) => (
					<SkillGroupCard
						key={group.title}
						group={group}
						index={index}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Skills, "skills");