import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
    {
        title: "SITETILE",
        category: "Website Builder",
        description: "A tile site generator for business products. Create simple and fast websites for your inventory.",
        color: "bg-neo-secondary",
        url: "https://sitetile.app",
        logo: "/projects/sitetile.png"
    },
    {
        title: "CLEARFOLIO",
        category: "CV Builder",
        description: "Simple and fast CV builder with multi-profile support. Create professional resumes without the hassle.",
        color: "bg-neo-accent",
        url: "https://apps.apple.com/id/app/clearfolio-cv-builder-pdf/id6758289460",
        logo: "/projects/clearfolio.png"
    },
    {
        title: "FOCUSGLEAN",
        category: "Pomodoro Focus Timer",
        description: "A pomodoro focus timer app to boost productivity. Stay focused, manage breaks, and get more done.",
        color: "bg-neo-primary",
        url: "https://apps.apple.com/id/app/focusglean-pomodoro-timer/id6670310561",
        logo: "/projects/focusglean.png"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
                        Selected Work
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="neo-box p-8 flex flex-col justify-between hover:scale-[1.02] transition-transform group">
                            <div>
                                {/* Header with Icon and Title */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-16 h-16 border-3 border-black ${project.color} rounded-2xl flex items-center justify-center shadow-sm shrink-0 overflow-hidden relative`}>
                                        <Image
                                            src={project.logo}
                                            alt={`${project.title} logo`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black leading-tight">{project.title}</h3>
                                        <p className="font-bold text-gray-500 text-sm mt-1 uppercase tracking-wide">{project.category}</p>
                                    </div>
                                </div>

                                <p className="font-medium text-gray-700 mb-8 leading-relaxed">{project.description}</p>
                            </div>

                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="neo-button w-full bg-neo-text text-white border-black flex items-center justify-center gap-2 group-hover:bg-neo-primary group-hover:text-black hover:border-black"
                            >
                                View Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
