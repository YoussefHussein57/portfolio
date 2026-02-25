import { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
    {
        title: 'Relief Center',
        description: 'Disaster management platform with real-time data from USGS and NASA. Features 3D globe visualization and OTP authentication.',
        tech: ['Odoo 19', 'Python', 'OWL', 'PostgreSQL', 'MapTiler'],
        github: '#',
        demo: '#',
        image: 'https://islamhafez.vercel.app/images/projects/relief_center.png'
    },
    {
        title: 'Paw-Pal',
        description: 'Full-stack pet management application with scalable architecture, JWT auth, and complex CRUD workflows.',
        tech: ['React', 'Vite', 'SASS', 'JWT', 'REST API'],
        github: 'https://github.com/PawPalOrganization/frontend',
        demo: 'https://frontend-alpha-bay-39.vercel.app/login',
        image: 'projects/paw.png'
    },
    {
        title: 'Indoqat',
        description: 'Custom Odoo 17 website modules for dynamic content management and multi-language support.',
        tech: ['Odoo 17', 'QWeb', 'XML', 'Javascript'],
        github: 'https://github.com/taqat-techno/multi-theming-17',
        demo: 'https://www.indoqat.com/',
        image: 'projects/Indoqat.png'
    },
    {
        title: 'AI-IoT System',
        description: 'Monitoring system for PLC controlled factories with real-time data fetching and state management.',
        tech: ['React', 'Context API', 'IoT', 'CSS'],
        github: 'https://github.com/YoussefHussein57/GP-FrontEnd',
        demo: 'https://github.com/YoussefHussein57/GP-FrontEnd',
        image: 'projects/Dashboard.jpg'
    },
    {
        title: 'Pearl Pixels',
        description: 'Highly customized Odoo 17 website carousels with advanced LTR/RTL support and smooth UI widgets.',
        tech: ['Odoo 17', 'Javascript', 'SCSS', 'XML'],
        github: 'https://github.com/taqat-techno/multi-theming-17',
        demo: 'https://www.pearlpixels.com/',
        image: 'projects/creative-agency-portfolio-thumbnail.jpg'
    },
    {
        title: 'Cyber',
        description: 'High-performance React frontend integrated with Node.js backend for seamless inventory and sales management.',
        tech: ['React', 'SASS', 'Bootstrap', 'Vite'],
        github: 'https://github.com/YoussefHussein57/Secuity',
        demo: 'https://secuity.vercel.app/',
        image: 'projects/cybersecurity-portfolio-thumbnail.jpg'
    },
];

export const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollXProgress } = useScroll({
        container: containerRef,
    });

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (containerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
        }
    };

    useEffect(() => {
        const el = containerRef.current;
        if (el) {
            el.addEventListener('scroll', checkScroll);
            checkScroll();
            return () => el.removeEventListener('scroll', checkScroll);
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (containerRef.current) {
            const { clientWidth } = containerRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
            containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section id="projects" className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto mb-16 flex items-end justify-between">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold">Featured <span className="gradient-text">Projects</span></h2>
                </motion.div>

                <div className="hidden md:flex gap-4 mb-2">
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className="p-4 rounded-full border border-white/10 hover:bg-white/5 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className="p-4 rounded-full border border-white/10 hover:bg-white/5 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>

            <div
                ref={containerRef}
                className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12 px-[max(1.5rem,calc((100vw-80rem)/2))]"
            >
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex-shrink-0 w-[85vw] md:w-[400px] snap-start"
                    >
                        <div className="group relative overflow-hidden rounded-[2.5rem] card-gradient h-full flex flex-col">
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 backdrop-blur-[2px]">
                                    <a href={project.github} className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                                        <Github size={24} />
                                    </a>
                                    <a href={project.demo} className="p-4 bg-white/10 rounded-full hover:bg-white/20 transition-all hover:scale-110">
                                        <ExternalLink size={24} />
                                    </a>
                                </div>
                            </div>

                            <div className="p-8 flex-grow flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(t => (
                                        <span key={t} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/50">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-white/40 leading-relaxed text-sm">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Progress Bar */}
            <div className="max-w-7xl mx-auto mt-8 h-[2px] bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-primary"
                    style={{ scaleX: scrollXProgress, transformOrigin: 'left' }}
                />
            </div>
        </section>
    );
};
