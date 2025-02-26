'use client';

import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

function MusicSchoolContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative z-[400]">
      {' '}
      {/* Ensure the container is relative */}
      {/* BackgroundBeams with adjusted z-index */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      {/* Content with higher z-index */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        {' '}
        {/* Add relative and z-10 to bring content to the front */}
        <h1 className="text-4xl md:text-7xl text-center font-sans font-bold mb-8 text-white">
          Contact Us
        </h1>
        <p className="text-black max-w-lg mx-auto my-2 text-sm text-center">
        Were here to assist you with any questions about our gold products, investment options. Reach out and let us know how we can help you in your journey to secure and grow your wealth with gold!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center text-black mt-10 px-2 text-center w-dsd">
  <div className=' relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-7 border m-auto'>
  <h2 className="text-white text-2xl mb-3">Location</h2>
  <p>
     Shop Number 6, Golden Building, Behind Gold Land Building, Deira Gold Souq
    </p>
     </div>
     
  <div className=' relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-10 border m-auto'>
  <h2 className="text-white text-2xl mb-3">Email</h2>
  <p>
     info@nohagold.ae
    </p>
  </div>
  <div className=' relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-10 border m-auto'>
  <h2 className="text-white text-2xl mb-3">Phone</h2>
  <p>
   +971 50 897 0026
  </p>
  </div>
</div>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-teal-500 text-black-0 font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>

      </div>

    </div>
  );
}

export default MusicSchoolContactUs;