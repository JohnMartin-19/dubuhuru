import { motion } from "motion/react";
import { useState } from "react";
import { projects } from "../data/projects";
import { MapPin, Calendar } from "lucide-react";

// 1. Define the local interface to fix the "Project vs Solution" mismatch
interface ProjectStat {
  label: string;
  value: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  sector: string;
  impactArea: string;
  country: string;
  completionDate: string;
  stats: ProjectStat[];
}

export function Projects() {
  const [selectedSector, setSelectedSector] = useState<string>("All");
  const [selectedCountry, setSelectedCountry] = useState<string>("All");
  const [selectedImpact, setSelectedImpact] = useState<string>("All");

  // Type the projects array to use our local interface
  const allProjects = projects as Project[];

  const sectors = ["All", ...Array.from(new Set(allProjects.map((p) => p.sector)))];
  const countries = ["All", ...Array.from(new Set(allProjects.flatMap((p) => p.country.split(", "))))];
  const impactAreas = ["All", ...Array.from(new Set(allProjects.map((p) => p.impactArea)))];

  const filteredProjects = allProjects.filter((project) => {
    const sectorMatch = selectedSector === "All" || project.sector === selectedSector;
    const countryMatch =
      selectedCountry === "All" || project.country.includes(selectedCountry);
    const impactMatch = selectedImpact === "All" || project.impactArea === selectedImpact;
    return sectorMatch && countryMatch && impactMatch;
  });

  return (
    <div>
      <HeroSection />
      <FilterSection
        sectors={sectors}
        countries={countries}
        impactAreas={impactAreas}
        selectedSector={selectedSector}
        selectedCountry={selectedCountry}
        selectedImpact={selectedImpact}
        onSectorChange={setSelectedSector}
        onCountryChange={setSelectedCountry}
        onImpactChange={setSelectedImpact}
      />
      <ProjectsGrid projects={filteredProjects} />
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Real-world implementations delivering measurable impact across East Africa and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FilterSection({
  sectors,
  countries,
  impactAreas,
  selectedSector,
  selectedCountry,
  selectedImpact,
  onSectorChange,
  onCountryChange,
  onImpactChange,
}: {
  sectors: string[];
  countries: string[];
  impactAreas: string[];
  selectedSector: string;
  selectedCountry: string;
  selectedImpact: string;
  onSectorChange: (sector: string) => void;
  onCountryChange: (country: string) => void;
  onImpactChange: (impact: string) => void;
}) {
  return (
    <section className="py-8 border-b border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Sector</label>
            <div className="flex flex-wrap gap-2">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  onClick={() => onSectorChange(sector)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    selectedSector === sector
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Country</label>
            <div className="flex flex-wrap gap-2">
              {countries.map((country) => (
                <button
                  key={country}
                  onClick={() => onCountryChange(country)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    selectedCountry === country
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {country}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Impact Area</label>
            <div className="flex flex-wrap gap-2">
              {impactAreas.map((impact) => (
                <button
                  key={impact}
                  onClick={() => onImpactChange(impact)}
                  className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                    selectedImpact === impact
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  {impact}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Fixed the circular 'any' reference and used correct Project[] type
function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found matching your filters. Try adjusting your selection.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                      {project.sector}
                    </span>
                    <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs rounded">
                      {project.impactArea}
                    </span>
                  </div>

                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.country}
                  </div>

                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(project.completionDate).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}