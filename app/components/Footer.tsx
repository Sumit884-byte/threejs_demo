import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';

export default function Footer() {
    return (
        <footer className="relative bg-zinc-950 !mt-32 !py-32 px-6 md:px-12 border-t border-red-600/20">
            <div className="max-w-[1800px] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start gap-20 !mb-24">

                    {/* Brand & Newsletter */}
                    <div className="space-y-8 max-w-md w-full">
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-black text-2xl">F</span>
                                </div>
                                <div className="text-3xl font-black tracking-tight">
                                    <span className="text-red-600">SCUDERIA</span>
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                The prancing horse has symbolized racing excellence since 1929. Every Ferrari is a masterpiece of engineering, passion, and Italian heritage.
                            </p>
                            <p className="text-xs tracking-[0.2em] uppercase text-gray-600">Est. 1929 • Maranello, Italy</p>
                        </div>

                        {/* Newsletter - Shadcn Components */}
                        <div className="space-y-3">
                            <h4 className="font-black tracking-[0.15em] uppercase text-white text-xs">Join the Scuderia</h4>
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-red-600 focus-visible:border-red-600"
                                />
                                <Button variant="ferrari" size="sm" className="px-6">
                                    Join
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-sm w-full md:w-auto">
                        <div className="space-y-4">
                            <h4 className="font-black tracking-[0.15em] uppercase text-white text-xs">Explore</h4>
                            <div className="space-y-3 text-muted-foreground">
                                <Link href="#" className="block hover:text-white transition-colors">Models</Link>
                                <Link href="#" className="block hover:text-white transition-colors">Technology</Link>
                                <Link href="#" className="block hover:text-white transition-colors">Heritage</Link>
                                <Link href="#" className="block hover:text-white transition-colors">Motorsport</Link>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-black tracking-[0.15em] uppercase text-white text-xs">Racing</h4>
                            <div className="space-y-3 text-muted-foreground">
                                <Link href="#" className="block hover:text-white transition-colors">Formula 1</Link>
                                <Link href="#" className="block hover:text-white transition-colors">GT Racing</Link>
                                <Link href="#" className="block hover:text-white transition-colors">Championships</Link>
                                <Link href="#" className="block hover:text-white transition-colors">Drivers</Link>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-black tracking-[0.15em] uppercase text-white text-xs">Ownership</h4>
                            <div className="space-y-3 text-muted-foreground">
                                <Link href="#" className="block hover:text-white transition-colors">Configure</Link>
                                <Link href="#" className="block hover:text-white transition-colors">Dealerships</Link>
                                <Link href="#" className="block hover:text-white transition-colors">Test Drive</Link>
                                <Link href="#" className="block hover:text-white transition-colors">Service</Link>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h4 className="font-black tracking-[0.15em] uppercase text-white text-xs">Connect</h4>
                            <div className="space-y-3 text-muted-foreground">
                                <Link href="#" className="block hover:text-white transition-colors">Instagram</Link>
                                <Link href="#" className="block hover:text-white transition-colors">YouTube</Link>
                                <Link href="#" className="block hover:text-white transition-colors">Twitter</Link>
                                <Link href="#" className="block hover:text-white transition-colors">Contact</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Separator className="bg-white/5 my-24" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.2em] uppercase text-gray-600">
                    <p>© 2024 Scuderia Ferrari S.p.A. • All Rights Reserved</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Legal Notice</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
