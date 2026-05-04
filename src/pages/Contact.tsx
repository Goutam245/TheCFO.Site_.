import { Calendar, Phone, Mail, Clock, ArrowRight, Star, MapPin } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const T = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85";

export default function Contact() {
  return (
    <>
      <section className="bg-canvas pt-36 lg:pt-40 pb-12">
        <div className="container-page max-w-4xl text-center">
          <Reveal><p className="overline mb-4">Contact</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="h1">Let's Talk About Your <span className="accent-word">Growth</span></h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-6 max-w-2xl mx-auto">Free 30-minute discovery call. No obligation.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-canvas pb-24 lg:pb-28">
        <div className="container-page grid lg:grid-cols-3 gap-8">
          {/* Booking + Form */}
          <div className="lg:col-span-2 space-y-6">
            <Reveal>
              <div className="card-warm p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="icon-tile"><Calendar className="w-5 h-5" /></div>
                  <h2 className="text-xl font-extrabold text-navy">Book Your Call</h2>
                </div>
                <div className="aspect-[4/2] rounded-xl bg-gradient-to-br from-secondarywarm to-canvas flex items-center justify-center border border-[hsl(var(--border-warm))]">
                  <div className="text-center">
                    <Calendar className="w-10 h-10 text-amber mx-auto mb-3" />
                    <p className="text-sm text-bodytext mb-4">Calendly embed coming soon</p>
                  </div>
                </div>
                <a href="https://app.usemotion.com/meet/ankit/discovery" className="btn-primary w-full mt-6">Book a Free 30-Min Call <ArrowRight className="w-4 h-4" /></a>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                onSubmit={(e) => { e.preventDefault(); alert("Message sent — we'll respond within 1 business day."); }}
                className="card-warm p-8 space-y-5"
              >
                <h2 className="text-xl font-extrabold text-navy mb-1">Or Send Us a Message</h2>
                <p className="text-sm text-bodytext mb-4">Prefer email? We respond within one business day.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Name *</label>
                    <input required className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border-warm))] bg-white focus:outline-none focus:border-amber" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">Company *</label>
                    <input required className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border-warm))] bg-white focus:outline-none focus:border-amber" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Email *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border-warm))] bg-white focus:outline-none focus:border-amber" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Revenue Range</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border-warm))] bg-white focus:outline-none focus:border-amber">
                    <option>Under $2M</option>
                    <option>$2M – $5M</option>
                    <option>$5M – $10M</option>
                    <option>$10M – $30M</option>
                    <option>$30M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">Brief Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border-warm))] bg-white focus:outline-none focus:border-amber resize-none" />
                </div>
                <button className="btn-primary w-full">Send Message <ArrowRight className="w-4 h-4" /></button>
              </form>
            </Reveal>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Reveal delay={0.05}>
              <div className="card-warm p-7">
                <h3 className="h3 mb-5">Reach Us Directly</h3>
                <div className="space-y-4 text-sm">
                  <a href="tel:+18005551234" className="flex items-center gap-3 text-navy hover:text-amber transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-amber/10 text-amber flex items-center justify-center"><Phone className="w-4 h-4" /></div>
                    <span className="font-semibold">(800) 555-1234</span>
                  </a>
                  <a href="mailto:hello@thecfo.site" className="flex items-center gap-3 text-navy hover:text-amber transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-amber/10 text-amber flex items-center justify-center"><Mail className="w-4 h-4" /></div>
                    <span className="font-semibold">hello@thecfo.site</span>
                  </a>
                  <div className="flex items-center gap-3 text-bodytext">
                    <div className="w-9 h-9 rounded-lg bg-amber/10 text-amber flex items-center justify-center"><Clock className="w-4 h-4" /></div>
                    <span>Replies within 1 business day</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-warm p-7">
                <p className="overline mb-3">What to Expect</p>
                <p className="text-sm leading-relaxed">
                  We'll discuss your current challenges, where you want to go, and whether we're the right fit. No pitch — just a conversation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="card-warm p-7">
                <div className="flex items-center gap-1 text-amber mb-4">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="italic text-sm text-bodytext leading-relaxed">
                  "Best decision we made for our firm's growth."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <img src={T} alt="" loading="lazy" className="w-9 h-9 rounded-full object-cover" />
                  <div className="text-xs">
                    <p className="font-semibold text-navy">Jennifer Park</p>
                    <p className="text-bodytext">COO</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[hsl(var(--canvas))] py-20 px-8 border-t border-[hsl(var(--border-warm))]">
        <div className="container-page">
          <Reveal>
            <div className="text-center mb-12">
              <p className="overline mb-3">Find Us</p>
              <h2 className="h2">Visit Our Office</h2>
              <p className="lead mt-4 max-w-2xl mx-auto">
                Located in the heart of Oakville, Ontario — serving businesses across Canada and the United States.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal>
              <div className="p-7 rounded-xl bg-[#FEFDFB] border border-[#E1DDD6] hover:border-[#B9832B]/30 transition-colors h-full">
                <MapPin size={24} color="#B9832B" className="mb-4" />
                <p className="overline mb-2">Our Office</p>
                <p className="text-sm text-[hsl(var(--body-text))] leading-relaxed">
                  Unit 210 – 2030 Bristol Cir<br />
                  Oakville, ON, L6H 6P5
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="p-7 rounded-xl bg-[#FEFDFB] border border-[#E1DDD6] hover:border-[#B9832B]/30 transition-colors h-full">
                <Phone size={24} color="#B9832B" className="mb-4" />
                <p className="overline mb-2">Call Us</p>
                <a href="tel:+16476992997" className="text-sm font-semibold text-[hsl(var(--navy))] hover:text-[hsl(var(--amber))] transition-colors">
                  +1-647-699-2997
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="p-7 rounded-xl bg-[#FEFDFB] border border-[#E1DDD6] hover:border-[#B9832B]/30 transition-colors h-full">
                <Mail size={24} color="#B9832B" className="mb-4" />
                <p className="overline mb-2">Email Us</p>
                <a href="mailto:info@thecfo.site" className="text-sm font-semibold text-[hsl(var(--navy))] hover:text-[hsl(var(--amber))] transition-colors">
                  info@thecfo.site
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-8 w-full overflow-hidden rounded-2xl border border-[#E1DDD6]">
              <iframe
                title="TheCFO.Site Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.5!2d-79.7!3d43.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sUnit+210+2030+Bristol+Cir+Oakville+ON!5e0!3m2!1sen!2sca!4v1"
                width="100%"
                height="400"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
