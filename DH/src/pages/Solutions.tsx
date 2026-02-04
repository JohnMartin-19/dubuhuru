import { motion } from "motion/react";
import { Link } from "react-router";
import { CloudSun, FileBarChart, Leaf, Droplet, ArrowRight, HandHeart } from "lucide-react";
import { solutions } from "../data/solutions";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "heart-handshake": HandHeart,
  "cloud-sun": CloudSun,
  "file-bar-chart": FileBarChart,
  leaf: Leaf,
  droplet: Droplet,
};

export function Solutions() {
  return (
    <div>
      <HeroSection />
      <SolutionsGrid />
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Solutions</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Comprehensive digital tools designed specifically for African sustainability challenges, from climate monitoring to green finance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SolutionsGrid() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = iconMap[solution.icon];
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/solutions/${solution.slug}`}
                  className="block h-full bg-card border border-border rounded-xl p-8 hover:border-primary transition-all hover:shadow-xl group"
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                      <IconComponent className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {solution.title}
                      </h2>
                      <p className="text-muted-foreground">{solution.shortDescription}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold mb-2">Key Features</h3>
                      <ul className="space-y-1">
                        {solution.features.slice(0, 4).map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center text-primary font-medium">
                    Learn more
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}