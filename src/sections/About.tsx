import { motion } from 'framer-motion';
import { Database, Layout, Smartphone } from 'lucide-react';


const skills = [
    { name: 'React', icon: Layout, description: 'Building complex SPAs with modern hooks and state management.', color: 'text-blue-400' },
    { name: 'Odoo', icon: Database, description: 'Expertise in Odoo ERP customization and module development.', color: 'text-purple-400' },
    { name: 'Vue', icon: Layout, description: 'Proficient in Vue 3 and the Composition API for flexible apps.', color: 'text-green-400' },
    { name: 'Mobile', icon: Smartphone, description: 'Developing responsive and progressive web applications.', color: 'text-pink-400' },
];

export const About = () => {
    return (
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">
                        Turning Ideas into <span className="gradient-text">Digital Reality</span>
                    </h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-6 text-justify">
                        I'm a frontend developer and Communication & Electronics Engineering graduate
                        from Helwan University. From building custom Odoo themes for enterprise clients
                        to crafting React-powered dashboards and teaching the next generation of developers,
                        I thrive where code meets creativity.
                    </p>
                    <p className="text-white/60 text-lg leading-relaxed mb-8 text-justify">
                        My toolkit spans React, Vue, and the full Odoo frontend stack — JavaScript, QWeb,
                        XML, and SCSS. I've shipped production apps with JWT auth, real-time data, RTL support,
                        and pixel-perfect responsive designs. If it runs in a browser, I can build it.
                    </p>

                    <div className="flex items-center space-x-6">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">2+</span>
                            <span className="text-sm text-white/40 uppercase tracking-wider">Years Experience</span>
                        </div>
                        <div className="w-[1px] h-10 bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">20+</span>
                            <span className="text-sm text-white/40 uppercase tracking-wider">Projects Done</span>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="card-gradient p-6 rounded-2xl group hover:border-primary/50 transition-colors"
                        >
                            <skill.icon className={`mb-4 ${skill.color}`} size={32} />
                            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                            <p className="text-sm text-white/40 leading-relaxed">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
