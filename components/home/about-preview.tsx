"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">À Propos de Moi</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Passionné par le développement web depuis toujours , je crée des
              applications web modernes et performantes en utilisant les
              dernières technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Ma spécialisation dans l&apos;écosystème React me permet de
              construire des interfaces utilisateur intuitives et réactives.
            </p>
            <Button asChild size="lg">
              <Link href="/about" className="group">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=800&fit=crop"
                alt="Developer workspace"
                width={800} // Specify the width
                height={800} // Specify the height
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
