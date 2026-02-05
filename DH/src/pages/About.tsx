import { motion } from "motion/react";
import { Target, Eye, Heart, Award } from "lucide-react";
import { teamMembers } from "../data/team";

export function About() {
  return (
    <div>
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dubu Huru</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            We're building the digital infrastructure that will power Africa's transition to sustainable, climate-resilient economies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Dubu Huru Ltd was founded in Gilgil, Nakuru County, Kenya—a region where the impacts of climate change are felt acutely by farmers, pastoralists, and communities dependent on natural resources.
              </p>
              <p>
                Our founders witnessed firsthand how lack of climate information, inadequate sustainability tools, and limited access to green finance prevented communities from adapting to climate change despite their deep commitment to environmental stewardship.
              </p>
              <p>
                We set out to bridge this gap with technology. Not imported solutions designed for Western contexts, but digital tools built specifically for African realities: intermittent connectivity, resource constraints, multilingual needs, and the integration of formal and informal economies.
              </p>
              <p>
                Today, Dubu Huru serves organizations and communities across Kenya and East Africa, with a vision to scale continent-wide. Every solution we build is rooted in real challenges faced by real people working to build sustainable livelihoods in a changing climate.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&h=600&fit=crop"
              alt="Kenya landscape"
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "Build digital solutions that enable environmental sustainability, climate resilience, and responsible resource management across Africa.",
      color: "text-primary",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "An Africa where every community, business, and institution has access to the digital tools needed to thrive sustainably in a changing climate.",
      color: "text-secondary",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Impact over profit. Community-centered design. African solutions for African challenges. Transparency and accountability. Innovation grounded in practicality.",
      color: "text-accent",
    },
    {
      icon: Award,
      title: "Our Commitment",
      description:
        "Every solution we build must deliver measurable impact. We measure success not by features shipped, but by communities empowered and emissions reduced.",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mission, Vision & Values</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What drives us and guides our work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className={`w-14 h-14 rounded-lg bg-${value.color}/10 flex items-center justify-center mb-4`}>
                <value.icon className={`w-7 h-7 ${value.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experts in climate science, technology, finance, and sustainability
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-100 object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                {(member.linkedin || member.twitter) && (
                  <div className="flex space-x-3">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
