import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('sending');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY,
            );
            setStatus('success');
            formRef.current.reset();
            setTimeout(() => setStatus('idle'), 4000);
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">Contact</span>
                <h2 className="text-4xl md:text-5xl font-bold">Let's Build Something <span className="gradient-text">Amazing</span></h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left — Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center"
                >
                    <div className="card-gradient rounded-[2rem] p-10 relative overflow-hidden h-full flex flex-col justify-center">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-primary/20 blur-3xl rounded-full" />
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-secondary/20 blur-3xl rounded-full" />

                        <div className="relative z-10">
                            <MessageSquare className="mb-6 text-primary" size={40} />
                            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                            <p className="text-white/50 leading-relaxed mb-8 text-justify">
                                I'm currently available for new opportunities and collaborations.
                                Whether you have a specific project in mind or just want to say hi,
                                my inbox is always open.
                            </p>

                            <div className="space-y-4 mb-8">
                                <a href="mailto:yhi1612000@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors">
                                    <Mail size={18} />
                                    <span className="text-sm">yhi1612000@gmail.com</span>
                                </a>
                            </div>

                            <div className="flex items-center gap-4">
                                <a href="https://github.com/YoussefHussein57" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-primary/30 transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="https://www.linkedin.com/in/youssef-hussein-106108299/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-primary/30 transition-colors">
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right — Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="card-gradient rounded-[2rem] p-10 space-y-6"
                    >
                        <div>
                            <label htmlFor="user_name" className="block text-sm font-medium text-white/60 mb-2">Name</label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                required
                                placeholder="Your name"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                            />
                        </div>

                        <div>
                            <label htmlFor="user_email" className="block text-sm font-medium text-white/60 mb-2">Email</label>
                            <input
                                type="email"
                                id="user_email"
                                name="user_email"
                                required
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-white/60 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                            />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={status === 'sending'}
                            whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                            whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                            className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-shadow disabled:opacity-60"
                        >
                            {status === 'sending' && (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </>
                            )}
                            {status === 'idle' && (
                                <>
                                    <Send size={18} />
                                    Send Message
                                </>
                            )}
                            {status === 'success' && (
                                <>
                                    <CheckCircle size={18} />
                                    Message Sent!
                                </>
                            )}
                            {status === 'error' && (
                                <>
                                    <AlertCircle size={18} />
                                    Failed — Try Again
                                </>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};
