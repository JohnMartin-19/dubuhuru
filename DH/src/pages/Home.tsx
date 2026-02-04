import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, CloudSun, FileBarChart, Leaf, Droplet, HandHeart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function Home() {
  return (
    <div>
      <HeroSection />
      <LinkaAfricaFeature />
      <MetricsSection />
      <SolutionsSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-primary font-medium">Technology for Sustainability</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building Africa's
              <span className="text-primary"> Climate-Resilient </span>
              Future
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Digital solutions that enable environmental sustainability, climate resilience, and responsible resource management across the continent. From Gilgil to the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                Request Demo
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center px-8 py-4 bg-card border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all"
              >
                Explore Solutions
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop"
                alt="African landscape with sustainable technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-lg p-6 border border-border">
              <div className="text-3xl font-bold text-primary">10K+</div>
              <div className="text-sm text-muted-foreground">Farmers Impacted</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-card rounded-xl shadow-lg p-6 border border-border">
              <div className="text-3xl font-bold text-primary">15K</div>
              <div className="text-sm text-muted-foreground">Tonnes CO₂ Reduced</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LinkaAfricaFeature() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-medium">Flagship Solution</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-primary">Linka Africa:</span> Connecting Global Donors with African Impact
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The Global Gateway for African Impact, revolutionizing real-time payment transparency from donors to verified causes. We leverage AI, mobile money, and international payment solutions to ensure every donation reaches its intended beneficiary.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Real-Time Transparency</h4>
                  <p className="text-sm text-muted-foreground">
                    Track your donation from the moment you give to when it reaches the beneficiary
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">AI-Powered Verification</h4>
                  <p className="text-sm text-muted-foreground">
                    Automated verification ensures projects and beneficiaries are legitimate
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Local & International Payments</h4>
                  <p className="text-sm text-muted-foreground">
                    M-PESA, mobile money, cards, bank transfers - we support all payment methods
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/solutions/linka-africa"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
              >
                <HandHeart className="mr-2 w-5 h-5" />
                Explore Linka Africa
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-card border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-all"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop"
                alt="African community receiving support"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">95%+ Reaches Beneficiaries</h3>
                <p className="text-white/90">
                  Compared to 60-70% in traditional donation channels
                </p>
              </div>
            </div>
            {/* Feature badges */}
            <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg px-6 py-4 border border-border">
              <div className="flex items-center space-x-2">
                <HandHeart className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm font-semibold">Direct Impact</div>
                  <div className="text-xs text-muted-foreground">No intermediaries</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl shadow-lg px-6 py-4 border border-border">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-primary" />
                <div>
                  <div className="text-sm font-semibold">AI Verified</div>
                  <div className="text-xs text-muted-foreground">Trusted causes</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MetricsSection() {
  const metrics = [
    {
      label: "Farmers Reached",
      value: 10000,
      suffix: "+",
      prefix: "",
    },
    {
      label: "CO₂ Emissions Reduced",
      value: 15000,
      suffix: " tonnes",
      prefix: "",
    },
    {
      label: "Weather Stations Deployed",
      value: 50,
      suffix: "+",
      prefix: "",
    },
    {
      label: "Cost Savings Generated",
      value: 250,
      suffix: "M",
      prefix: "KES ",
    },
  ];

  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <CountUp
                end={metric.value}
                duration={2}
                prefix={metric.prefix}
                suffix={metric.suffix}
              />
              <div className="text-sm text-muted-foreground mt-2">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({
  end,
  duration,
  prefix = "",
  suffix = "",
}: {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const increment = end / (duration * 60);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setHasStarted(true)}
      className="text-3xl md:text-4xl font-bold text-primary"
    >
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </motion.div>
  );
}

function SolutionsSection() {
  const solutions = [
    {
      icon: CloudSun,
      title: "Climate Data Platforms",
      description:
        "Real-time climate monitoring and predictive analytics for informed decision-making across sectors.",
      link: "/solutions/climate-data-platforms",
    },
    {
      icon: FileBarChart,
      title: "Sustainability Reporting Tools",
      description:
        "Streamlined ESG reporting and compliance for African businesses meeting global standards.",
      link: "/solutions/sustainability-reporting",
    },
    {
      icon: Leaf,
      title: "Green Finance Tech",
      description:
        "Digital infrastructure connecting climate projects with sustainable investment capital.",
      link: "/solutions/green-finance",
    },
    {
      icon: Droplet,
      title: "Smart Resource Management",
      description:
        "IoT-enabled systems for efficient water, energy, and waste management in African contexts.",
      link: "/solutions/resource-management",
    },
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital tools designed for African sustainability challenges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={solution.link}
                className="block h-full bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <solution.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{solution.description}</p>
                <div className="flex items-center text-primary text-sm font-medium">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build a Sustainable Future?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Partner with us to implement climate-smart solutions that deliver measurable impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-white/90 transition-all hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-all"
            >
              View Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}