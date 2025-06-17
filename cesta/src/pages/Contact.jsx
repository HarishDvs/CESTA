import AnimatedBackground from '../components/AnimatedBackground';

function Contact() {
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
              <h1 className="text-3xl font-semibold mb-8">Contact Us</h1>
              <form
                action="https://formspree.io/f/xyzjpypw"
                method="POST"
                className="space-y-6"
              >
                <div className="form-control">
                  <label htmlFor="name" className="label text-sm text-base-content/80 font-medium">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="input input-bordered bg-base-200/50 focus:bg-base-200/80 transition-colors text-base leading-relaxed font-medium"
                    aria-label="Your name"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email" className="label text-sm text-base-content/80 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address (e.g., name@gmail.com)"
                    className="input input-bordered bg-base-200/50 focus:bg-base-200/80 transition-colors text-base leading-relaxed font-medium"
                    aria-label="Your email address"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="message" className="label text-sm text-base-content/80 font-medium">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="textarea textarea-bordered bg-base-200/50 focus:bg-base-200/80 transition-colors text-base leading-relaxed font-medium"
                    aria-label="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="btn bg-primary w-full hover:scale-105 hover:shadow-md transition-all duration-200 shadow-lg text-base font-semibold border-0"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
