import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X, ChevronDown } from 'lucide-react';

import { cn } from '../../utils/cn';
import { Logo } from '../Logo';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
                isScrolled ? 'bg-black/50 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <motion.a
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <Logo size={40} />
                </motion.a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {link.name}
                        </motion.a>
                    ))}
                    <div className="h-4 w-[1px] bg-white/20 mx-2" />
                    <div className="flex items-center space-x-4">
                        {/* GitHub Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 hover:text-primary transition-colors py-2">
                                <Github size={20} />
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </button>
                            <div className="absolute top-full right-0 mt-1 w-40 py-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                                <a href="https://github.com/YoussefHussein57" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-white/5 hover:text-primary transition-colors">
                                    Personal Account
                                </a>
                                <a href="https://github.com/yhussein57" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm hover:bg-white/5 hover:text-primary transition-colors">
                                    Work Account
                                </a>
                            </div>
                        </div>

                        <a href="https://www.linkedin.com/in/youssef-hussein-106108299/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:yhi1612000@gmail.com" className="hover:text-primary transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/90 backdrop-blur-lg border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col space-y-4 p-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 pt-4">
                                <a href="https://github.com/YoussefHussein57" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/youssef-hussein-106108299/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:yhi1612000@gmail.com" className="hover:text-primary transition-colors">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
