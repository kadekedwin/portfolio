import { ArrowRight, Sparkles, Flame, Target } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 top-10">
                <div className="space-y-8 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 rounded-full font-bold shadow-neo-sm transform -rotate-2">
                        <Sparkles className="w-4 h-4 text-neo-yellow fill-current" />
                        <span>Hello, I'm Edwin</span>
                    </div>

                    <h1 className="text-6xl md:text-7xl font-black leading-tight tracking-tight text-neo-text">
                        Turning Ideas <br />
                        <span className="relative inline-block mt-2">
                            <span className="relative z-10 px-4 flex items-center gap-2">
                                Live. <Flame className="w-12 h-12 text-orange-500 fill-current" />
                            </span>
                            <span className="absolute inset-0 bg-neo-accent transform -rotate-1 rounded-xl border-3 border-black -z-0"></span>
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl font-medium text-gray-700 max-w-lg leading-relaxed">
                        I build digital products that are simple, fast, and effective.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <a href="#projects" className="neo-button bg-neo-primary text-white border-black flex items-center justify-center gap-2 group">
                            View Work
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#contact" className="neo-button bg-white text-black flex items-center justify-center hover:bg-gray-50">
                            Let's Talk
                        </a>
                    </div>
                </div>

                <div className="relative flex justify-center">
                    {/* Wrapper for the card that doesn't hide overflow */}
                    <div className="relative w-80 h-96">
                        {/* Actual Card with Overflow Hidden */}
                        <div className="absolute inset-0 bg-neo-secondary rounded-[3rem] border-3 border-black shadow-neo-lg flex items-center justify-center overflow-hidden">
                            <Image
                                src="/profile.png"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Elements - Now Outside overflow-hidden container but inside relative wrapper */}
                        <div className="absolute -top-6 -right-6 w-20 h-20 bg-neo-yellow rounded-full border-3 border-black flex items-center justify-center shadow-neo z-10">
                            <span className="text-2xl"><Target className="w-12 h-12 text-black" /></span>
                        </div>
                        <div className="absolute -bottom-4 -left-8 w-32 h-16 bg-neo-accent rounded-full border-3 border-black flex items-center justify-center shadow-neo transform -rotate-12 z-10">
                            <span className="font-bold">BOOM!</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
