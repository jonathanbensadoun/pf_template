'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/projects/project-card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FeaturedProjects() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    },
    {
      title: 'Task Management App',
      description: 'Application de gestion de tâches avec fonctionnalités collaboratives.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Projets Récents</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Découvrez quelques-uns de mes derniers projets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/projects" className="group">
              Voir tous les projets
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}