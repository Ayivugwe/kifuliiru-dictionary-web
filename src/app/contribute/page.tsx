"use client";
import { useState } from "react";
import Link from 'next/link';
import { BookOpen, Users, Globe, ArrowRight } from 'lucide-react';

interface FormData {
  word: string;
  translationKifuliiru: string;
  translationKiswahili: string;
  translationFrench: string;
  translationEnglish: string;
  file: File | null;
}

export default function ContributePage() {
  const [formData, setFormData] = useState<FormData>({
    word: "",
    translationKifuliiru: "",
    translationKiswahili: "",
    translationFrench: "",
    translationEnglish: "",
    file: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData((prevData) => ({
      ...prevData,
      file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to the backend or API)
    alert("Your contribution has been submitted for review.");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contribute to Kifuliiru Language Preservation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Help us preserve and promote the Kifuliiru language by contributing to our dictionary and community.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <BookOpen className="h-12 w-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Preserve Language
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Help document and preserve the Kifuliiru language for future generations.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <Users className="h-12 w-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Join Community
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Connect with other language enthusiasts and native speakers.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <Globe className="h-12 w-12 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Global Impact
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Make a difference in preserving indigenous languages worldwide.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-orange-50 dark:bg-orange-900/20 p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Contribute?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          We've created a dedicated platform for contributions at Fuliiru Hub. Join our community and start making a difference today.
        </p>
        <Link
          href="https://fuliiruhub.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
        >
          <span>Visit Fuliiru Hub</span>
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>

      {/* How to Contribute */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          How to Contribute
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Dictionary Contributions
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Add new words and their meanings</li>
              <li>• Provide example sentences</li>
              <li>• Add pronunciation guides</li>
              <li>• Include cultural context</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Community Engagement
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li>• Participate in discussions</li>
              <li>• Share cultural knowledge</li>
              <li>• Help with translations</li>
              <li>• Suggest improvements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
