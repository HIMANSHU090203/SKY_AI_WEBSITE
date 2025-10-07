"use client";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Static Space Nebula Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          backgroundImage: "url('/space-nebula-bg.jpg?v=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Subtle Glow Effect Layer - Static only */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at 30% 20%, rgba(138, 43, 226, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0, 191, 255, 0.05) 0%, transparent 50%)'
        }}
      />
      
      {/* Reduced overlay for better content visibility */}
      <div className="absolute inset-0 bg-black/10" />
    </div>
  );
}
