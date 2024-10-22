'use client'

import { FaJs, FaNodeJs, FaReact } from 'react-icons/fa'

import {
	SiFlutter,
	SiNextdotjs,
	SiTailwindcss,
	SiTypescript,
} from 'react-icons/si'

// about data
const about = {
	title: 'About me',
	description:
		'I am a tech enthusiast and software engineer with over 7 years of experience in the tech industry. I have worked with a number of companies and startups over the years, building and deploying web and mobile applications.',
	info: [
		{
			fieldName: 'Name',
			fieldValue: 'Samuel Kow Paintsil',
		},
		{
			fieldName: 'Phone',
			fieldValue: '(+233) 501 083 601',
		},
		{
			fieldName: 'Experience',
			fieldValue: '7+ Years',
		},
		{
			fieldName: 'Skype',
			fieldValue: 'luke.01',
		},
		{
			fieldName: 'Nationality',
			fieldValue: 'Ghanaian',
		},
		{
			fieldName: 'Email',
			fieldValue: 'skpaintsil@outlook.com',
		},
		{
			fieldName: 'Freelance',
			fieldValue: 'Available',
		},
		{
			fieldName: 'Languages',
			fieldValue: 'English',
		},
	],
}

// experience data
const experience = {
	icon: '/assets/resume/badge.svg',
	title: 'My experience',
	description:
		'A collection of companies and startups that I have worked with over the years.',
	items: [
		{
			company: 'Ghana Code Labs.',
			position: 'Senior Software Engineer',
			duration: '2023 - Present',
		},
		{
			company: 'Edromart Solutions',
			position: 'Frontend Developer',
			duration: 'May 2024 - Jul 2024',
		},
		{
			company: 'Confinity AI',
			position: 'Lead Flutter Developer',
			duration: 'Sep 2023 - May 2024',
		},
		{
			company: 'Confinity AI',
			position: 'Lead Flutter Developer',
			duration: 'Jun 2023 - July 2023',
		},
		{
			company: 'Flip Delivery',
			position: 'Software Engineer',
			duration: 'Jan 2023 - Mar 2023',
		},
		{
			company: 'Xminger Advertising',
			position: 'Software Engineer',
			duration: '2022 - 2023',
		},
		{
			company: 'Flip Delivery',
			position: 'Software Engineer',
			duration: '2021 - 2022',
		},
		{
			company: 'CUBE Robotics Limited',
			position: 'Software Engineer',
			duration: '2019 - 2022',
		},
		{
			company: 'FHL Energy Gems',
			position: 'Lead React Developer',
			duration: '2020 - 2022',
		},
		{
			company: 'Kumasi Hive',
			position: 'Game Developer Intern',
			duration: 'Sep 2021 - Nov 2021',
		},
		{
			company: 'TeachGhana-STEAM',
			position: 'Assistant Instructor',
			duration: 'May 2018 - Aug 2018',
		},
	],
}

// education data
const education = {
	icon: '/assets/resume/cap.svg',
	title: 'My education',
	description: 'A collection of my academic qualifications and certifications.',
	items: [
		{
			institution: 'Udacity ALX-T',
			degree: 'Nanodegree, Full Stack Development',
			duration: '2019',
		},
		{
			institution: 'Michigan State University,Coursera',
			degree: 'Game Design & Development',
			duration: 'Feb 2020 - Aug 2020',
		},
		{
			institution: 'Kwame Nkrumah Univesity of Science & Technology',
			degree: 'Bachelo Degree in Computer Science',
			duration: '2018 - 2022',
		},
	],
}

// skills data
const skills = {
	title: 'My skills',
	description:
		'A collection of technologies and tools that I have used over the years.',
	skillList: [
		{
			icon: <SiTypescript />,
			name: 'typescript',
		},
		{
			icon: <FaUnity />,
			name: 'unity',
		},
		{
			icon: <FaJs />,
			name: 'javascript',
		},
		{
			icon: <FaReact />,
			name: 'react.js',
		},
		{
			icon: <SiNextdotjs />,
			name: 'next.js',
		},
		{
			icon: <SiTailwindcss />,
			name: 'tailwind.css',
		},
		{
			icon: <FaNodeJs />,
			name: 'node.js',
		},
		{
			icon: <SiFlutter />,
			name: 'flutter',
		},
	],
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip'

import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'
import { FaUnity } from 'react-icons/fa6'

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]">
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>

					{/* content */}
					<div className="min-h-[70vh] w-full">
						{/* experience */}
						<TabsContent
							value="experience"
							className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{experience.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.position}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.company}</p>
													</div>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* education */}
						<TabsContent
							value="education"
							className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{education.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.degree}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.institution}</p>
													</div>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* skills */}
						<TabsContent
							value="skills"
							className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{skills.description}
									</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
									{skills.skillList.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider delayDuration={100}>
													<Tooltip>
														<TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
															<div className="text-6xl group-hover:text-accent transition-all duration-300">
																{skill.icon}
															</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className="capitalize">{skill.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										)
									})}
								</ul>
							</div>
						</TabsContent>

						{/* about */}
						<TabsContent
							value="about"
							className="w-full text-center xl:text-left">
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{about.description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((item, index) => {
										return (
											<li
												key={index}
												className="flex items-center justify-center xl:justify-start gap-4">
												<span className="text-white/60">{item.fieldName}</span>
												<span className="text-xl">{item.fieldValue}</span>
											</li>
										)
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	)
}

export default Resume
