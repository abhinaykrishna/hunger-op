import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router';
import { Facebook, Linkedin, Instagram, Twitter, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const heroRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        // Parallax for the hero section (WIP) - adjust multiplier for desired parallax intensity
        heroRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu if screen size becomes larger than 'md'
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  return (
    <div
      className='min-h-screen bg-gray-950 text-white font-sans overflow-x-hidden relative'
      style={{ height: '100dvh' }}
    >
      {/* Background Gradients & Shapes */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-gradient-shift'></div>
        <div className='absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-gradient-shift animation-delay-2000'></div>
        <div className='absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-gradient-shift animation-delay-4000'></div>
      </div>

      {/* Header */}
      <header className='relative z-20 p-4 md:p-8 flex justify-between items-center bg-transparent'>
        <div className='text-2xl md:text-3xl font-extrabold text-white tracking-wider'>
          <span className='text-pink-400'>Hunger</span>
          <span className='relative -top-2 text-lg'>OP</span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 backdrop-blur-lg ${
            isMobileMenuOpen ? 'translate-x-0 z-50' : '-translate-x-full z-0'
          } transform transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center`}
        >
          {/* Close Button inside nav - top-right */}
          <button
            className='absolute top-5 right-5 text-white text-3xl z-50'
            onClick={toggleMobileMenu}
            aria-label='Close menu'
          >
            <X size={32} />
          </button>

          <ul className='flex flex-col items-center space-y-8 text-2xl font-bold'>
            <li>
              <Link
                to='/login'
                onClick={toggleMobileMenu}
                className='text-white hover:text-pink-400 transition duration-300 flex'
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to=''
                onClick={toggleMobileMenu}
                className='text-white hover:text-pink-400 transition duration-300'
              >
                Lorem ipsum
              </Link>
            </li>
            <li>
              <Link
                to=''
                onClick={toggleMobileMenu}
                className='text-white hover:text-pink-400 transition duration-300'
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to='/register'
                onClick={toggleMobileMenu}
                className='bg-pink-600 px-8 py-3 rounded-full text-white hover:bg-pink-700 transition duration-300'
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button (Hamburger/Close Icon) - visible on small screens */}
        <button
          className='md:hidden text-white text-3xl focus:outline-none relative z-[999]'
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className='z-40' size={32} /> : <Menu size={32} />}
        </button>
      </header>

      {/* Mobile Navigation Overlay : z-index to be higher than main content but lower than header and button */}
      <nav
        className={`fixed top-0 left-0 h-full w-full bg-gray-900 bg-opacity-95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0 z-50' : '-translate-x-full z-0'
        }`}
      >
        <button
          onClick={toggleMobileMenu}
          className='absolute top-5 right-5 text-white text-3xl z-50'
          aria-label='Close menu'
        >
          <X size={32} />
        </button>
        <ul className='flex flex-col justify-center items-center h-full space-y-8 text-white text-2xl font-bold'>
          <li>
            <Link to='/login' onClick={toggleMobileMenu} className='hover:text-pink-400 transition'>
              Login
            </Link>
          </li>
          <li>
            <Link to='' onClick={toggleMobileMenu} className='hover:text-pink-400 transition'>
              Lorem Ipsum
            </Link>
          </li>
          <li>
            <Link to='' onClick={toggleMobileMenu} className='hover:text-pink-400 transition'>
              About Us
            </Link>
          </li>
          <li>
            <Link
              to='/register'
              onClick={toggleMobileMenu}
              className='bg-pink-600 px-8 py-3 rounded-full hover:bg-pink-700 transition'
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Section Ensure main content is at a lower z-index */}
      <section
        ref={heroRef}
        className='relative z-10 min-h-[calc(100vh-80px)] flex items-center justify-center text-center p-4 md:p-8'
      >
        <div className='max-w-4xl space-y-6 md:space-y-8 animate-text-reveal'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400'>
            Elevate Your Cooking Game with
            <span className='block mt-1 md:mt-2'>The HungerOP App.</span>
          </h1>
          <p className='text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xl md:max-w-2xl mx-auto px-2'>
            Step into a world where every dish tells a story. We're not just here to help you cook —
            we're here to change the way you experience food.
          </p>
          <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
            <button
              className='px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white text-lg sm:text-xl font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out'
              onClick={() => navigate('/login')}
            >
              Get Started Now!
            </button>
            <button className='px-6 py-3 sm:px-8 sm:py-4 border-2 border-pink-500 text-pink-300 text-lg sm:text-xl font-bold rounded-full hover:bg-pink-900 hover:text-white transition duration-300 ease-in-out'>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id='features' className='relative z-10 py-16 md:py-20 px-4 md:px-8 bg-gray-900'>
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400'>
          Features That Break Boundaries
        </h2>
        {/* Grid layout adjusts from 1 column on small screens to 2, then 3 on larger ones */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto'>
          {/* Feature Card 1 */}
          <div className='bg-gray-800 p-6 md:p-8 rounded-3xl shadow-xl border border-gray-700 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center group'>
            <div className='text-5xl md:text-6xl mb-3 md:mb-4 text-purple-400 group-hover:scale-110 transition duration-300'>
              🚀
            </div>
            <h3 className='text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-white'>
              Lorem ipsum dolor sit
            </h3>
            <p className='text-base md:text-lg text-gray-400'>
              Dolor sit amet consectetur adipisicing elit. Quaerat, asperiores! Dignissimos iusto
              provident obcaecati aut hic culpa
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className='bg-gray-800 p-6 md:p-8 rounded-3xl shadow-xl border border-gray-700 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center group'>
            <div className='text-5xl md:text-6xl mb-3 md:mb-4 text-pink-400 group-hover:rotate-12 transition duration-300'>
              💡
            </div>
            <h3 className='text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-white'>
              Lorem ipsum dolor sit
            </h3>
            <p className='text-base md:text-lg text-gray-400'>
              Dolor sit amet consectetur adipisicing elit. Quaerat, asperiores! Dignissimos iusto
              provident obcaecati aut hic culpa
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className='bg-gray-800 p-6 md:p-8 rounded-3xl shadow-xl border border-gray-700 hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center group'>
            <div className='text-5xl md:text-6xl mb-3 md:mb-4 text-blue-400 group-hover:animate-bounce transition duration-300'>
              🎨
            </div>
            <h3 className='text-2xl md:text-3xl font-semibold mb-3 md:mb-4 text-white'>
              Lorem ipsum dolor sit
            </h3>
            <p className='text-base md:text-lg text-gray-400'>
              Dolor sit amet consectetur adipisicing elit. Quaerat, asperiores! Dignissimos iusto
              provident obcaecati aut hic culpa
            </p>
          </div>

          {/* More features to be added here */}
        </div>
      </section>

      {/* Call to Action / Testimonial Section (Abstract Overlap) */}
      <section id='pricing' className='relative z-10 py-16 md:py-20 px-4 md:px-8'>
        <div className='max-w-xl md:max-w-5xl mx-auto bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden'>
          {/* Abstract background element - sizes adjusted */}
          <div className='absolute -top-8 -right-8 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-teal-500 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-float'></div>
          <div className='absolute -bottom-8 -left-8 w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 bg-orange-500 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-float animation-delay-1000'></div>

          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400'>
            What Are You Waiting For?
          </h2>
          <p className='text-lg md:text-xl text-gray-300 text-center mb-10 md:mb-12 max-w-2xl mx-auto px-2'>
            Dolor sit amet consectetur adipisicing elit. Quaerat, asperiores! Dignissimos iusto
            provident obcaecati aut hic culpa
          </p>
          <div className='flex justify-center'>
            <button
              id='signup'
              className='px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-red-600 to-orange-600 text-white text-xl sm:text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out'
            >
              Dive into Insanity!
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id='about'
        className='relative z-10 p-6 md:p-12 bg-gray-900 border-t border-gray-800 text-gray-400 text-center'
      >
        {/* Footer grid adjusts from 1 column to 2, then 3 */}
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm md:text-base'>
          <div className='mb-6 md:mb-0'>
            <h3 className='text-xl md:text-2xl font-semibold mb-3 text-white'>
              Hunger<span className='relative -top-2 text-lg'>OP</span>
            </h3>
            <p>Elevate Your Cooking Game.</p>
          </div>
          <div className='mb-6 md:mb-0'>
            <h3 className='text-xl md:text-2xl font-semibold mb-3 text-white'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='hover:text-white transition duration-300'>
                  Support
                </Link>
              </li>
              <li>
                <Link to='/' className='hover:text-white transition duration-300'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='/' className='hover:text-white transition duration-300'>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl md:text-2xl font-semibold mb-3 text-white'>Connect</h3>
            <div className='flex justify-center space-x-4 text-2xl md:text-3xl'>
              <Link to='https://instagram.com' className='hover:text-white transition duration-300'>
                <Instagram size={28} />
              </Link>
              <Link to='https://twitter.com' className='hover:text-white transition duration-300'>
                <Twitter size={28} />
              </Link>
              <Link to='https://linkedin.com' className='hover:text-white transition duration-300'>
                <Linkedin size={28} />
              </Link>

              <Link to='https://facebook.com' className='hover:text-white transition duration-300'>
                <Facebook size={28} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='mt-10 pt-6 border-t border-gray-700 text-xs md:text-sm text-gray-500'>
          &copy; {new Date().getFullYear()} HungerOP. All rights reserved.
          <p className='text-lg my-2'>Crafted with ❤️ in Bengaluru, India</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
