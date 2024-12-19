import { QuickLinks, LegalLinks } from './footer-links';
import { ScrollToTop } from './scroll-to-top';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Jonathan Bensadoun</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Développeur Fullstack passionné par la création d'applications web modernes et performantes.
            </p>
          </div>
          <QuickLinks />
          <LegalLinks />
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Jonathan Bensadoun. Tous droits réservés.
          </p>
          <ScrollToTop />
        </div>
      </div>
    </footer>
  );
}