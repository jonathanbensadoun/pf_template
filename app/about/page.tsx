"use client";
import { JourneySection } from "@/components/about/journey-section";
import { SkillCard } from "@/components/about/skill-card";
import { CodeXml, Database, LayoutTemplate, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
export default function AboutPage() {
  const skills = [
    {
      icon: CodeXml,
      title: "Frontend Development",
      description:
        "Expertise en React, Next.js et TypeScript pour créer des interfaces modernes et performantes.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Maîtrise de Node.js et des bases de données pour des applications robustes et évolutives.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Développement d'applications mobiles cross-platform avec React Native.",
    },
    {
      icon: LayoutTemplate,
      title: "UI/UX Design",
      description:
        "Création d'interfaces utilisateur intuitives et esthétiques.",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <JourneySection />

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Mes Compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              >
                <skill.icon className="h-12 w-12 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
