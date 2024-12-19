'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SocialLinks() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com',
      color: 'text-gray-900 dark:text-white',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      color: 'text-blue-600 dark:text-blue-400',
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:contact@example.com',
      color: 'text-red-600 dark:text-red-400',
    },
  ];

  return (
    <div className="flex justify-center gap-4">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={link.color}
              >
                <Icon className="h-5 w-5" />
                {link.name}
              </a>
            </Button>
          </motion.div>
        );
      })}
    </div>
  );
}