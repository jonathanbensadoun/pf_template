import { ContactForm } from "@/components/contact/contact-form";
import { SocialLinks } from "@/components/contact/social-links";

export default function ContactPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact</h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          N&apos;hésitez pas à me contacter pour discuter de vos projets ou
          opportunités de collaboration.
        </p>

        <div className="mb-12">
          <SocialLinks />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          {/* <ContactForm /> */}
        </div>
      </div>
    </div>
  );
}
