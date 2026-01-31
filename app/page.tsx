import ThreeScene from './components/ThreeScene';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './components/ui/card';
import Footer from './components/Footer';

export default function Home() {
  // ... existing code ...

  {/* CTA Buttons */ }
  <div className="flex flex-col sm:flex-row gap-6 animate-slide-in-left opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
    <Button variant="ferrari" size="xl" className="group relative overflow-hidden min-w-[200px]">
      <div className="relative z-10 flex items-center justify-center gap-4">
        <span className="text-xs font-black tracking-[0.15em] uppercase">
          Ignite
        </span>
        <span className="text-xl transform group-hover:translate-x-2 transition-transform duration-300">→</span>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: '0 0 30px rgba(220, 38, 38, 0.5)' }} />
    </Button>

    <Button variant="ferrari-outline" size="xl" className="group relative overflow-hidden min-w-[200px]">
      <div className="relative z-10 flex items-center justify-center gap-4">
        <span className="text-xs font-black tracking-[0.15em] uppercase text-gray-300 group-hover:text-white transition-colors">
          Specifications
        </span>
      </div>
      <div className="absolute inset-0 border border-white/20 group-hover:border-white/40 transition-colors pointer-events-none" />
      <div className="absolute inset-0 bg-white/5 hover:bg-white/10 transition-colors duration-300 pointer-events-none" />
    </Button>
  </div>

  // ... existing code ...

  {/* Feature Cards */ }
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Card 1 */}
    <Card className="group relative overflow-hidden backdrop-blur-xl bg-white/5 border-white/10 hover:border-red-600/50 transition-all duration-500 h-full">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
      <CardHeader className="relative z-10 space-y-4 p-10 pb-0">
        <div className="text-7xl font-black text-white/10 group-hover:text-red-600/20 transition-colors duration-500 mb-4">01</div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-500">
            <span className="text-xl text-white">✦</span>
          </div>
          <CardTitle className="text-2xl font-black uppercase tracking-tight text-white">Active Aero</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-10 pt-4 relative z-10">
        <CardDescription className="text-gray-400 leading-relaxed text-base">
          Dynamic rear wing and active diffusers adapt in real-time, maximizing downforce through corners while minimizing drag on straights.
        </CardDescription>
      </CardContent>
    </Card>

    {/* Card 2 */}
    <Card className="group relative overflow-hidden backdrop-blur-xl bg-white/5 border-white/10 hover:border-red-600/50 transition-all duration-500 h-full">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
      <CardHeader className="relative z-10 space-y-4 p-10 pb-0">
        <div className="text-7xl font-black text-white/10 group-hover:text-red-600/20 transition-colors duration-500 mb-4">02</div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-500">
            <span className="text-xl text-white">⚡</span>
          </div>
          <CardTitle className="text-2xl font-black uppercase tracking-tight text-white">Hybrid Synergy</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-10 pt-4 relative z-10">
        <CardDescription className="text-gray-400 leading-relaxed text-base">
          Electric motors deliver instant torque while the V8 roars to life, creating a symphony of power that defies physics.
        </CardDescription>
      </CardContent>
    </Card>

    {/* Card 3 */}
    <Card className="group relative overflow-hidden backdrop-blur-xl bg-white/5 border-white/10 hover:border-red-600/50 transition-all duration-500 md:col-span-2 lg:col-span-1 h-full">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
      <CardHeader className="relative z-10 space-y-4 p-10 pb-0">
        <div className="text-7xl font-black text-white/10 group-hover:text-red-600/20 transition-colors duration-500 mb-4">03</div>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-500">
            <span className="text-xl text-white">◈</span>
          </div>
          <CardTitle className="text-2xl font-black uppercase tracking-tight text-white">Carbon Excellence</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-10 pt-4 relative z-10">
        <CardDescription className="text-gray-400 leading-relaxed text-base">
          Ultra-lightweight carbon fiber monocoque, engineered with Formula 1 technology for uncompromising rigidity and driver protection.
        </CardDescription>
      </CardContent>
    </Card>

  </div>
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* 3D Background - One screen height, scrolls with page */}
      <div className="absolute top-0 left-0 w-full h-screen z-0">
        <ThreeScene />
        {/* Enhanced gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Ambient glow effect */}
      <div className="absolute top-1/2 right-1/4 w-[1200px] h-[1200px] bg-red-600/15 rounded-full blur-[250px] pointer-events-none opacity-50 z-0 animate-pulse" style={{ animationDuration: '4s' }} />

      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Content */}
      <div className="relative z-10">

        {/* Premium Navbar */}
        <nav className="px-6 md:px-12 py-6 max-w-[1800px] mx-auto animate-fade-in">
          <div className="flex items-center justify-between backdrop-blur-sm bg-black/20 rounded-2xl px-8 py-4 border border-white/5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xl">F</span>
              </div>
              <div className="text-2xl font-black tracking-tight">
                <span className="text-red-600">SCUDERIA</span>
              </div>
            </div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-10">
              <a href="#models" className="group relative py-2">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors duration-300">
                  Models
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#performance" className="group relative py-2">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors duration-300">
                  Performance
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#heritage" className="group relative py-2">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors duration-300">
                  Heritage
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-300" />
              </a>
              <a href="#store" className="group relative py-2">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 group-hover:text-white transition-colors duration-300">
                  Store
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-300" />
              </a>
            </div>

            {/* CTA Button */}
            <button className="hidden md:block group relative overflow-hidden rounded-lg">
              <div className="relative z-10 px-8 py-3 flex items-center gap-2">
                <span className="text-xs font-black tracking-[0.15em] uppercase text-white">
                  Configure
                </span>
                <span className="text-sm transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center px-6 md:px-12 max-w-[1800px] mx-auto">
          <div className="max-w-4xl space-y-10">

            {/* Eyebrow */}
            <div className="flex items-center gap-4 animate-slide-in-left opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              <div className="w-20 h-px bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
              <span className="text-red-500 font-black tracking-[0.3em] uppercase text-[10px]">
                Italian Excellence
              </span>
            </div>

            {/* Main Headline */}
            <div className="animate-slide-in-left opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <h1 className="text-[14vw] md:text-[140px] lg:text-[160px] font-black tracking-[-0.03em] uppercase leading-[0.85] mb-4">
                Born
              </h1>
              <h1 className="text-[14vw] md:text-[140px] lg:text-[160px] font-black tracking-[-0.03em] uppercase leading-[0.85]">
                to <span className="gradient-text inline-block transform hover:scale-105 transition-transform duration-300">Race</span>
              </h1>
            </div>

            {/* Description */}
            <div className="animate-slide-in-left opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div className="flex gap-6 max-w-2xl">
                <div className="w-1 bg-gradient-to-b from-red-600 via-red-600/50 to-transparent rounded-full" />
                <div className="space-y-4">
                  <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                    Where cutting-edge aerodynamics meets raw Italian passion. Every curve sculpted by wind tunnels,
                    every component engineered for the podium.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Experience the pinnacle of automotive engineering with a legacy spanning decades of racing dominance.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 animate-slide-in-left opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              <button className="group relative overflow-hidden rounded-lg min-w-[200px]">
                <div className="relative z-10 px-8 py-5 flex items-center justify-center gap-4">
                  <span className="text-xs font-black tracking-[0.15em] uppercase">
                    Ignite
                  </span>
                  <span className="text-xl transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: '0 0 30px rgba(220, 38, 38, 0.5)' }} />
              </button>

              <button className="group relative overflow-hidden rounded-lg min-w-[200px]">
                <div className="relative z-10 px-8 py-5 flex items-center justify-center gap-4">
                  <span className="text-xs font-black tracking-[0.15em] uppercase text-gray-300 group-hover:text-white transition-colors">
                    Specifications
                  </span>
                </div>
                <div className="absolute inset-0 border border-white/20 group-hover:border-white/40 transition-colors" />
                <div className="absolute inset-0 bg-white/5 hover:bg-white/10 transition-colors duration-300" />
              </button>
            </div>

            {/* Stats Row */}
            <div className="flex items-center gap-10 pt-6 animate-fade-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <div className="group">
                <p className="text-5xl font-black text-red-500 mb-2 group-hover:scale-110 transition-transform duration-300">340<span className="text-2xl">+</span></p>
                <p className="text-[9px] tracking-[0.25em] uppercase text-gray-500">km/h top speed</p>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <div className="group">
                <p className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">2.8<span className="text-2xl">s</span></p>
                <p className="text-[9px] tracking-[0.25em] uppercase text-gray-500">0-100 km/h</p>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <div className="group">
                <p className="text-5xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">800<span className="text-2xl">hp</span></p>
                <p className="text-[9px] tracking-[0.25em] uppercase text-gray-500">peak power</p>
              </div>
            </div>

          </div>

          {/* Floating Tech Specs Panel - Desktop - Absolute to Hero */}
          <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden xl:block animate-slide-in-right opacity-0 z-20" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <div className="backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl p-8 space-y-6 hover:border-red-600/30 transition-colors duration-500 shadow-2xl">
              <div className="text-right space-y-2">
                <p className="text-[8px] tracking-[0.3em] uppercase text-gray-500">Powerplant</p>
                <p className="text-3xl font-black tracking-tight">V8 Twin-Turbo</p>
                <p className="text-xs text-gray-400">3.9L Capacity</p>
              </div>
              <div className="h-px bg-gradient-to-l from-white/30 via-red-600/50 to-transparent" />
              <div className="text-right space-y-2">
                <p className="text-[8px] tracking-[0.3em] uppercase text-gray-500">Acceleration</p>
                <p className="text-4xl font-black tracking-tight text-red-500">2.8s</p>
                <p className="text-xs text-gray-400">0-100 km/h</p>
              </div>
              <div className="h-px bg-gradient-to-l from-white/30 via-red-600/50 to-transparent" />
              <div className="text-right space-y-2">
                <p className="text-[8px] tracking-[0.3em] uppercase text-gray-500">Maximum Velocity</p>
                <p className="text-3xl font-black tracking-tight">340 km/h</p>
                <p className="text-xs text-gray-400">Electronically Limited</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="relative py-32 px-6 md:px-12 bg-gradient-to-b from-black via-zinc-950 to-black">

          {/* Decorative line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />

          <div className="max-w-[1800px] mx-auto">
            {/* Section Header */}
            <div className="mb-32">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-px bg-gradient-to-r from-red-600 to-transparent" />
                <span className="text-red-500 font-black tracking-[0.3em] uppercase text-[10px]">Technology</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-black tracking-tight uppercase">
                Innovation in <span className="gradient-text">Motion</span>
              </h2>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-2xl p-10 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
                <div className="relative z-10 space-y-8">
                  <div className="text-7xl font-black text-white/10 group-hover:text-red-600/20 transition-colors duration-500">01</div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-500">
                        <span className="text-xl">✦</span>
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tight">Active Aero</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Dynamic rear wing and active diffusers adapt in real-time, maximizing downforce through corners while minimizing drag on straights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-2xl p-10 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
                <div className="relative z-10 space-y-8">
                  <div className="text-7xl font-black text-white/10 group-hover:text-red-600/20 transition-colors duration-500">02</div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-500">
                        <span className="text-xl">⚡</span>
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tight">Hybrid Synergy</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Electric motors deliver instant torque while the V8 roars to life, creating a symphony of power that defies physics.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative overflow-hidden rounded-2xl p-10 backdrop-blur-xl bg-white/5 border border-white/10 hover:border-red-600/50 transition-all duration-500 md:col-span-2 lg:col-span-1">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent" />
                <div className="relative z-10 space-y-8">
                  <div className="text-7xl font-black text-white/10 group-hover:text-red-600/20 transition-colors duration-500">03</div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center group-hover:bg-red-600 transition-colors duration-500">
                        <span className="text-xl">◈</span>
                      </div>
                      <h3 className="text-2xl font-black uppercase tracking-tight">Carbon Excellence</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                      Ultra-lightweight carbon fiber monocoque, engineered with Formula 1 technology for uncompromising rigidity and driver protection.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>



        {/* Footer */}
        <Footer />


      </div>
    </main>
  );
}
