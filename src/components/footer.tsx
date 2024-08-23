

function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4 text-neutral">
            Sarco Jewellery is a premier destination dedicated to offering exquisite and timeless jewelry. We carefully curate a stunning collection that caters to every taste, fostering a loyal community of discerning customers.
            </p>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-neutral"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-neutral"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-neutral"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 text-neutral"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-neutral"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-neutral"
              >
                Twitter
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300 text-neutral"
              >
                Instagram
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-neutral">Dubai, UAE</p>
            <p className="text-neutral">..........</p>
            <p className="text-neutral">Email: .............</p>
            <p className="text-neutral">Phone: .............</p>
          </div>
          </div>
          <p className="text-center text-xs pt-8">© 2024 Sarco Jewellery. All rights reserved.</p>
      </footer>
    )
  }
  
  export default Footer