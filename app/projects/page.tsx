import { ProjectCard } from '@/components/projects/project-card';

export default function ProjectsPage() {
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
    {
      title: 'Fitness Tracking Mobile App',
      description: 'Application mobile de suivi d\'activités physiques et de nutrition.',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=400&fit=crop',
      demoUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      technologies: ['React Native', 'Firebase', 'Redux'],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12">Mes Projets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}