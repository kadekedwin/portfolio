import { Send, Smile, Github, Twitter, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-neo-black text-neo-text relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-neo-bg opacity-5 scale-150 rotate-12 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-neo-secondary px-6 py-2 rounded-full border-3 border-black shadow-neo mb-8 rotate-2">
                    <Smile className="w-6 h-6" />
                    <span className="font-bold uppercase tracking-wide">Get in Touch</span>
                </div>

                <h2 className="text-5xl md:text-7xl font-black mb-12">
                    Let's Build <br />
                    <span className="text-neo-primary text-stroke-black">Something Fun.</span>
                </h2>

                <div className="neo-box p-8 md:p-12 text-left bg-white mb-20">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block font-bold ml-2">Name</label>
                                <input type="text" className="neo-input bg-gray-50 hover:bg-white focus:bg-white" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="block font-bold ml-2">Email</label>
                                <input type="email" className="neo-input bg-gray-50 hover:bg-white focus:bg-white" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block font-bold ml-2">Message</label>
                            <textarea className="neo-input h-40 bg-gray-50 hover:bg-white focus:bg-white resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button type="button" className="neo-button w-full bg-neo-accent hover:bg-neo-yellow text-black text-xl flex items-center justify-center gap-3 mt-4">
                            Send Message <Send size={24} />
                        </button>
                    </form>
                </div>

                {/* Redesigned Footer */}
                <footer className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/kadekedwin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center bg-white border-3 border-black rounded-xl shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all hover:bg-neo-primary"
                                aria-label="GitHub"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://x.com/kadekedwin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center bg-white border-3 border-black rounded-xl shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all hover:bg-neo-secondary"
                                aria-label="Twitter"
                            >
                                <Twitter size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/kadekedwin/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center bg-white border-3 border-black rounded-xl shadow-neo hover:shadow-neo-lg hover:-translate-y-1 transition-all hover:bg-neo-accent"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="px-6 py-2 bg-black text-white rounded-full font-bold border-3 border-white/20">
                        © 2026 Edwin. All rights reserved.
                    </div>
                </footer>
            </div>
        </section>
    );
}
