'use client';

import { motion } from 'framer-motion';

export function JourneySection() {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl font-bold mb-8">Mon Parcours</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Passionné par le développement web depuis plus de 5 ans, j'ai commencé mon voyage dans le monde de la programmation avec JavaScript et n'ai jamais cessé d'apprendre depuis.
          </p>
          <p>
            Ma spécialisation dans l'écosystème React m'a permis de maîtriser les dernières technologies du web moderne, tout en gardant une approche pragmatique orientée vers les besoins des utilisateurs.
          </p>
          <p>
            Aujourd'hui, je me concentre sur la création d'applications web performantes et accessibles, en utilisant les meilleures pratiques du développement moderne.
          </p>
        </div>
      </motion.div>
    </section>
  );
}