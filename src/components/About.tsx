import { Rocket, ScrollText } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-neo-primary border-y-3 border-black">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    <div className="md:w-1/3 sticky top-32">
                        <div className="bg-neo-yellow p-8 border-3 border-black rounded-3xl shadow-neo">
                            <h2 className="text-4xl font-black mb-2">About Me</h2>
                            <p className="font-bold text-lg leading-relaxed">
                                I’m a full-stack developer focused on building mobile apps, using AI as a partner to create better and faster solutions.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-2/3 space-y-12">
                        {/* Bio Section */}
                        <div className="neo-box p-8 bg-neo-bg">
                            <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
                                <span className="w-8 h-8 bg-neo-primary rounded-full border-2 border-black flex items-center justify-center"><ScrollText className="w-5 h-5 text-black" /></span>
                                The Story
                            </h3>
                            <p className="font-medium text-lg leading-relaxed text-gray-800">
                                My code is clean, but my designs are messy in all the right ways. I create interfaces that demand attention without shouting.
                            </p>
                            <p className="font-medium text-lg leading-relaxed text-gray-800 mt-4">
                                I thrive on the edge of what's possible. Always exploring new frameworks and tools, I treat every project as a playground for innovation. If there's a better, faster, or cooler way to build it, I'm learning it.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div>
                            <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 bg-neo-secondary rounded-full border-2 border-black flex items-center justify-center"><Rocket className="w-5 h-5 text-black" /></span>
                                Experience Log
                            </h3>

                            <div className="space-y-6">
                                {[
                                    {
                                        role: "Full Stack Developer",
                                        company: "Blisdev Zero Bit",
                                        period: "2023 - Present",
                                        desc: "Building scalable web and mobile applications using modern tech stacks.",
                                        color: "bg-neo-accent"
                                    }
                                ].map((job, i) => (
                                    <div key={i} className="flex flex-col md:flex-row gap-6 p-6 border-3 border-black rounded-2xl bg-white hover:shadow-neo transition-all group">
                                        <div className="md:w-1/3">
                                            <div className={`inline-block px-3 py-1 border-2 border-black rounded-full text-sm font-bold mb-2 ${job.color}`}>
                                                {job.period}
                                            </div>
                                            <div className="font-bold text-lg">{job.company}</div>
                                        </div>
                                        <div className="md:w-2/3">
                                            <div className="font-black text-xl mb-2">{job.role}</div>
                                            <p className="font-medium text-gray-600">{job.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
