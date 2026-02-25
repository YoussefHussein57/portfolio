import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="max-w-4xl"
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block"
                >
                    Youssef Hussein
                </motion.span>

                <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight whitespace-nowrap">
                    I Build Interfaces<br />That <span className="gradient-text">Matter</span>
                </h1>

                <p className="text-lg md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Turning complex ideas into fast, pixel-perfect experiences with <span className="text-white font-medium">React</span>, <span className="text-white font-medium">Vue</span> & the <span className="text-white font-medium">Odoo</span> ecosystem — from enterprise ERP solutions to web apps users love.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-primary text-white rounded-full font-bold shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-shadow hover:shadow-[0_0_30px_rgba(139,92,246,0.8)]"
                    >
                        Explore My Work
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border border-white/20 rounded-full font-bold backdrop-blur-sm hover:bg-white/5 transition-colors"
                    >
                        Get in Touch
                    </motion.a>
                    <motion.a
                        href="/resume.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-8 py-4 border border-primary/40 rounded-full font-bold backdrop-blur-sm hover:bg-primary/10 transition-colors"
                    >
                        <Download size={18} />
                        Download CV
                    </motion.a>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <ChevronDown size={32} className="text-white/20" />
            </motion.div>
        </section>
    );
};
