import Link from 'next/link';
import ContactForm from '../../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            I am always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-blue-600 dark:text-blue-400">syedaabihaahmed194@gmail.com</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p>0318-2177368</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Social</h3>
              <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/in/abiha-ahmed-9437152b5/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  LinkedIn
                </Link>
                <Link href="https://github.com/ABIHAAHEMD4262" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

