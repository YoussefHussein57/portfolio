import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Logo } from '../Logo';

const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
];

const socials = [
    { icon: Github, href: 'https://github.com/YoussefHussein57', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/youssef-hussein-106108299/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:yhi1612000@gmail.com', label: 'Email' },
];

export const Footer = () => {
    return (
        <footer className="relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <a href="#">
                            <Logo size={48} />
                        </a>
                        <p className="text-white/40 text-sm leading-relaxed mt-4 max-w-xs">
                            Frontend developer crafting fast, beautiful interfaces with React, Vue & the Odoo ecosystem.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {footerLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-sm text-white/40 hover:text-primary transition-colors">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-widest text-white/60 mb-4">Connect</h4>
                        <div className="flex gap-3 mb-6">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                    aria-label={social.label}
                                    className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-primary/30 transition-colors"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                        <p className="text-sm text-white/40">
                            yhi1612000@gmail.com
                        </p>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/20 text-sm">
                        &copy; {new Date().getFullYear()} Youssef Hussein. All rights reserved.
                    </p>
                    <p className="text-white/20 text-sm flex items-center gap-1">
                        Built with <Heart size={14} className="text-secondary fill-secondary" /> and React
                    </p>
                </div>
            </div>
        </footer>
    );
};
