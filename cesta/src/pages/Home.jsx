import { Link } from 'react-router-dom';
import AnimatedBackground from '../components/AnimatedBackground';

function Home() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center overflow-hidden" style={{
        backgroundColor: '#0f0f0f',
        backgroundImage: `
          repeating-linear-gradient(120deg, rgba(255,255,255,0.048) 0px, rgba(255,255,255,0.048) 1px, transparent 1px, transparent 40px),
          repeating-linear-gradient(60deg, rgba(255,255,255,0.048) 0px, rgba(255,255,255,0.048) 1px, transparent 1px, transparent 40px),
          repeating-linear-gradient(0deg, rgba(255,255,255,0.048) 0px, rgba(255,255,255,0.048) 1px, transparent 1px, transparent 40px)
        `,
        backgroundSize: '46px 80px',
        backgroundPosition: '0 0, 0 0, 0 0',
      }}>
        <div className="w-full max-w-3xl mx-auto text-center relative px-4 sm:px-8 lg:px-16">
          <h1 className="text-5xl sm:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-base-content to-base-content/70 tracking-tight">
            Build with Cesta
          </h1>
          <p className="text-base leading-relaxed font-medium mb-10 text-base-content/80">
            A team of freelancers building powerful digital experiences.
          </p>
          <Link to="/contact" className="btn bg-primary text-base font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-md transition-all duration-200 border-0">
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
