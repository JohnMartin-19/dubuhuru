import { motion } from "motion/react";
import { useParams, Link, Navigate } from "react-router";
import { CloudSun, FileBarChart, Leaf, Droplet, Check, ArrowLeft, HandHeart, Cpu } from "lucide-react";
import { solutions } from "../data/solutions";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "heart-handshake": HandHeart,
  "cloud-sun": CloudSun,
  "file-bar-chart": FileBarChart,
  leaf: Leaf,
  droplet: Droplet,
  cpu: Cpu,
};

export function SolutionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const solution = solutions.find((s) => s.slug === slug);

  if (!solution) {
    return <Navigate to="/solutions" replace />;
  }

  const IconComponent = iconMap[solution.icon];

  return (
    <div>
      <HeroSection solution={solution} IconComponent={IconComponent} />
      <DetailsSection solution={solution} />
      {/* <CTASection /> */}
    </div>
  );
}

function HeroSection({
  solution,
  IconComponent,
}: {
  solution: typeof solutions[0];
  IconComponent: React.ComponentType<{ className?: string }>;
}) {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/solutions"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Solutions
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
            <IconComponent className="w-10 h-10 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{solution.title}</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              {solution.shortDescription}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DetailsSection({ solution }: { solution: typeof solutions[0] }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">{solution.longDescription}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {solution.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Benefits</h2>
              <ul className="space-y-3">
                {solution.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-muted-foreground">{benefit}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4">Use Cases</h2>
              <div className="space-y-4">
                {solution.useCases.map((useCase, index) => (
                  <div key={index} className="bg-muted/50 rounded-lg p-4">
                    <p className="text-muted-foreground">{useCase}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border rounded-xl p-8 sticky top-24"
            >
              <h3 className="text-xl font-bold mb-4">Interested in this solution?</h3>
              <p className="text-muted-foreground mb-6">
                Get in touch to learn how we can customize this solution for your organization.
              </p>
              <Link
                to="/contact"
                className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors mb-4"
              >
                Request Demo
              </Link>
              <Link
                to="/projects"
                className="block w-full text-center px-6 py-3 bg-muted text-foreground rounded-lg hover:bg-muted/80 transition-colors"
              >
                View Case Studies
              </Link>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4">Why Choose Us?</h4>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    Built for African contexts
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    Works in low-connectivity areas
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    Mobile-first design
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    Multilingual support
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    Proven impact at scale
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// function CTASection() {
//   return (
//     <section className="py-20 bg-muted/30">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Ready to Implement This Solution?
//           </h2>
//           <p className="text-lg text-muted-foreground mb-8">
//             Our team is ready to help you deploy and customize this solution for your needs.
//           </p>
//           <Link
//             to="/contact"
//             className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
//           >
//             Get Started Today
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// }