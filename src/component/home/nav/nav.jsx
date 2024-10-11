import { useState, useEffect } from 'react'
import { Menu } from 'lucide-react'

export default()=>{
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
    <nav className={`w-full ${isScrolled ? 'fixed top-0 bg-[#0A2463] shadow-md' : 'absolute bg-white '} transition-all duration-300 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-[#0A2463]'}`}>
            Venulink
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'About us', 'Venues', 'Bands', 'FAQ\'s', 'Contact us'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`}
                  className={`${isScrolled ? 'text-white hover:bg-white hover:text-[black]' : 'text-[#0A2463]'} hover:bg-[#0A2463] hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${isScrolled ? 'text-white' : 'text-black'} hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About us', 'Venues', 'Bands', 'FAQ\'s', 'Contact us'].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className={`${isScrolled ? 'text-white' : 'text-black'} hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
    
    </>)
   }