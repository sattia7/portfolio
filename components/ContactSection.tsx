export default function ContactSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center" id="contact">
      <div className="space-y-4 mb-16">
        <h2 className="text-4xl font-bold tracking-tight">Let's <span className="text-accent-blue">Connect</span></h2>
        <p className="text-muted max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="p-8 rounded-2xl bg-secondary-bg border border-border text-left space-y-6">
          <h3 className="text-xl font-bold">Send a Message</h3>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent-blue outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent-blue outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted">Message</label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent-blue outline-none transition-all"
              ></textarea>
            </div>
            <button className="w-full py-3 bg-accent-blue text-background font-bold rounded-lg hover:bg-accent-blue-light transition-all">
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center items-center md:items-start space-y-8">
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Direct Reach</h3>
            <p className="text-muted text-sm">Prefer email or social media?</p>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <a href="mailto:shady.attia@example.com" className="flex items-center gap-4 p-4 rounded-xl bg-secondary-bg border border-border hover:border-accent-blue transition-all">
              <span className="text-accent-blue">✉</span>
              <span className="text-sm font-medium">shady.attia@example.com</span>
            </a>
            <a href="https://github.com/shady" target="_blank" className="flex items-center gap-4 p-4 rounded-xl bg-secondary-bg border border-border hover:border-accent-blue transition-all">
              <span className="text-accent-blue">GitHub</span>
              <span className="text-sm font-medium">@shady_attia</span>
            </a>
            <a href="https://linkedin.com/in/shady" target="_blank" className="flex items-center gap-4 p-4 rounded-xl bg-secondary-bg border border-border hover:border-accent-blue transition-all">
              <span className="text-accent-blue">LinkedIn</span>
              <span className="text-sm font-medium">/in/shady-attia</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
