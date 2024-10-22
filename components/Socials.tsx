import Link from 'next/link'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const socials = [
	{ icon: <FaGithub />, path: 'https://github.com/Sami64' },
	{ icon: <FaLinkedinIn />, path: 'https://linkedin.com/in/sami-paintsil/' },
	{ icon: <FaX />, path: 'https://x.com/sami_khae' },
]

const Socials = ({
	containerStyles,
	iconStyles,
}: {
	containerStyles: string
	iconStyles: string
}) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<Link
						key={index}
						href={item.path}
						target="_blank"
						className={iconStyles}>
						{item.icon}
					</Link>
				)
			})}
		</div>
	)
}

export default Socials
