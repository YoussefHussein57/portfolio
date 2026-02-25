import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
    { name: 'MEAN Stack Diploma', issuer: 'NTI' },
    { name: 'Vue The Complete Guide', issuer: 'Udemy' },
    { name: 'Advanced CSS and SASS', issuer: 'Udemy' },
    { name: 'HTML and CSS', issuer: 'Mahara Tech (ITI)' },
    { name: 'JavaScript', issuer: 'Mahara Tech (ITI)' },
];

export const Certifications = () => {
    return (
        <section id="certifications" className="py-24 px-6 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <span className="text-secondary font-medium tracking-widest uppercase text-sm mb-4 block">Achievements</span>
                <h2 className="text-4xl md:text-5xl font-bold">My <span className="gradient-text">Certifications</span></h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, i) => (
                    <motion.div
                        key={cert.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="card-gradient rounded-2xl p-6 group hover:border-primary/50 transition-colors"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-white mb-1">{cert.name}</h3>
                                <p className="text-sm text-white/40">{cert.issuer}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
