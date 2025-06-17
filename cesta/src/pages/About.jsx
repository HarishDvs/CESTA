import AnimatedBackground from '../components/AnimatedBackground';

function About() {
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
        <div className="w-full max-w-3xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="card bg-base-200/50 backdrop-blur-sm shadow-2xl shadow-black/10 border border-base-300/20 p-10">
            <div className="card-body">
              <h1 className="text-3xl font-semibold mb-8">About Us</h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed font-medium mb-6 text-base-content/80">
                  Welcome to Cesta, where innovation meets excellence. We are a team of passionate professionals dedicated to delivering exceptional solutions that drive business growth and success.
                </p>
                <p className="text-base leading-relaxed font-medium mb-6 text-base-content/80">
                  Our mission is to empower businesses with cutting-edge technology and creative solutions that make a real impact. We believe in building lasting partnerships with our clients, understanding their unique needs, and delivering results that exceed expectations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Our Values</h2>
                    <ul className="space-y-3">
                      <li className="flex items-start text-base leading-relaxed font-medium text-base-content/80">
                        <span className="text-primary mr-2">•</span>
                        <span>Innovation and creativity in everything we do</span>
                      </li>
                      <li className="flex items-start text-base leading-relaxed font-medium text-base-content/80">
                        <span className="text-primary mr-2">•</span>
                        <span>Commitment to excellence and quality</span>
                      </li>
                      <li className="flex items-start text-base leading-relaxed font-medium text-base-content/80">
                        <span className="text-primary mr-2">•</span>
                        <span>Client-focused approach and collaboration</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">Our Expertise</h2>
                    <ul className="space-y-3">
                      <li className="flex items-start text-base leading-relaxed font-medium text-base-content/80">
                        <span className="text-primary mr-2">•</span>
                        <span>Custom software development</span>
                      </li>
                      <li className="flex items-start text-base leading-relaxed font-medium text-base-content/80">
                        <span className="text-primary mr-2">•</span>
                        <span>Digital transformation solutions</span>
                      </li>
                      <li className="flex items-start text-base leading-relaxed font-medium text-base-content/80">
                        <span className="text-primary mr-2">•</span>
                        <span>Strategic consulting and planning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
