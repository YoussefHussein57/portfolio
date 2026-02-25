import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Server, Monitor } from 'lucide-react';

const experiences = [
    {
        title: 'Frontend Developer',
        company: 'Taqat Techno',
        location: 'Cairo, Egypt',
        period: 'July 2025 – Present',
        icon: Code,
        color: 'text-purple-400',
        borderColor: 'border-purple-400/30',
        description: [
            'Develop and customize web interfaces using JavaScript, XML, and QWeb to enhance user experience.',
            'Collaborate with backend developers and functional consultants to integrate frontend features with Odoo modules.',
        ],
    },
    {
        title: 'Web-developer Instructor',
        company: 'Timedoor Academy',
        location: 'Cairo',
        period: 'August 2024 – Present',
        icon: GraduationCap,
        color: 'text-blue-400',
        borderColor: 'border-blue-400/30',
        description: [
            'Designed and delivered web development courses on HTML, CSS, and JavaScript.',
            'Led projects where students built interactive, responsive web applications.',
        ],
    },
    {
        title: 'Frontend Developer',
        company: 'Freelance',
        location: 'Cairo, Egypt',
        period: 'July 2024 – Present',
        icon: Monitor,
        color: 'text-green-400',
        borderColor: 'border-green-400/30',
        description: [
            'Developed dynamic and responsive web applications using React.js and Vue.js.',
            'Integrated APIs and third-party services with modern UI frameworks like Tailwind CSS and Ant Design.',
        ],
    },
    {
        title: 'IT Solutions Engineer',
        company: 'Huawei',
        location: 'Cairo, Egypt',
        period: 'April 2025 – July 2025',
        icon: Server,
        color: 'text-red-400',
        borderColor: 'border-red-400/30',
        description: [
            'Assisted in the design, deployment, and optimization of Huawei Data Center solutions.',
            'Provided technical support and documentation for solution architecture and client presentations.',
        ],
    },
    {
        title: 'Intern - MEAN Stack Training',
        company: 'NTI',
        location: 'Cairo, Egypt',
        period: 'Dec 2024 – Feb 2025',
        icon: Briefcase,
        color: 'text-cyan-400',
        borderColor: 'border-cyan-400/30',
        description: [
            'Developed web applications using the MEAN (MongoDB, Express.js, Angular, Node.js) stack.',
            'Gained hands-on experience in full-stack development and REST API integration.',
        ],
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">Career</span>
                <h2 className="text-4xl md:text-5xl font-bold">Work <span className="gradient-text">Experience</span></h2>
            </motion.div>

            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 md:-translate-x-[0.5px]" />

                {experiences.map((exp, i) => {
                    const isLeft = i % 2 === 0;
                    return (
                        <motion.div
                            key={exp.company + exp.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative flex items-start mb-12 last:mb-0 md:justify-${isLeft ? 'start' : 'end'}`}
                        >
                            {/* Timeline dot */}
                            <div className={`absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-dark -translate-x-1/2 mt-6 z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)]`} />

                            {/* Card */}
                            <div className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${isLeft ? '' : 'md:ml-auto'}`}>
                                <div className={`card-gradient rounded-2xl p-6 hover:border-primary/30 transition-colors`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-2 rounded-lg bg-white/5 ${exp.color}`}>
                                            <exp.icon size={20} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold">{exp.title}</h3>
                                            <p className="text-sm text-primary font-medium">{exp.company}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 mb-4 text-xs text-white/40">
                                        <span>{exp.period}</span>
                                        <span className="w-1 h-1 rounded-full bg-white/20" />
                                        <span>{exp.location}</span>
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.description.map((desc, j) => (
                                            <li key={j} className="text-sm text-white/50 leading-relaxed flex gap-2">
                                                <span className="text-primary mt-1.5 shrink-0">&#8226;</span>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};
