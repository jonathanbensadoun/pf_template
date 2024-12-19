import Link from 'next/link';

export function QuickLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            À propos
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            Projets
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export function LegalLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Légal</h3>
      <ul className="space-y-2">
        <li>
          <Link href="/legal/mentions-legales" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            Mentions légales
          </Link>
        </li>
        <li>
          <Link href="/legal/privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            Politique de confidentialité
          </Link>
        </li>
      </ul>
    </div>
  );
}