import { motion } from "motion/react";
import { MapPin, Mail, Phone, MessageSquare, ExternalLink, Globe } from "lucide-react";

export function Contact() {
  return (
    <div>
      <HeroSection />
      <ContactMethodGrid />
      <MapSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-medium text-sm">Direct Channels</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Connect With Us</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Whether you're looking for a partnership, a demo of Linka Africa, or technical support, we’re just a message away.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactMethodGrid() {
  const contacts = [
    {
      icon: Mail,
      title: "Email Us",
      value: "dubuhurultd@gmail.com",
      description: "For general inquiries, partnership proposals, and support.",
      link: "mailto:dubuhurultd@gmail.com",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+254 0118968369",
      description: "Available Mon-Fri, 8:00 AM - 6:00 PM EAT for urgent matters.",
      link: "tel:+2540118968369",
      action: "Call Direct"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "Connect on Chat",
      description: "Quick responses for our Linka Africa community members.",
      link: "https://wa.me/254118968369", // Assumes your phone number is WA enabled
      action: "Start Chat"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contacts.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl hover:border-primary transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <item.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              <p className="font-semibold text-foreground mb-6">{item.value}</p>
              <a
                href={item.link}
                target={item.link.startsWith('http') ? "_blank" : "_self"}
                rel="noreferrer"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                {item.action}
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Info Sidebar Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-muted/20 p-8 md:p-12 rounded-3xl border border-border">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Dubu Huru Ltd, we believe in radical transparency. Every inquiry regarding <strong>Linka Africa</strong> or our upcoming climate solutions is handled personally by our founding team in Gilgil. We aim to respond to all electronic communications within 24 business hours.
            </p>
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="flex items-center space-x-3 text-muted-foreground">
              <Globe className="w-5 h-5 text-primary" />
              <span>Registered in Kenya: Dubu Huru Limited</span>
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>HQ: Gilgil, Nakuru County</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Headquarters</h2>
            <p className="text-muted-foreground">Rooted in the heart of Nakuru County, serving the continent.</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-border h-[450px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.07823330663!2d36.3150036!3d-0.4900727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18290076044719e7%3A0x62953835e3895e6!2sGilgil!5e0!3m2!1sen!2ske!4v1710000000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dubu Huru Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}