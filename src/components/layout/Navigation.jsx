import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@utils/cn';
import { useScroll, useMobileMenu } from '@hooks';
import { scrollToElement } from '@utils/scroll';
import { NAV_ITEMS } from '@constants';
import { COMPANY } from '@constants';

/**
 * Navigation Component
 * 
 * Main navigation header with responsive mobile menu.
 */
function Navigation() {
  const { isScrolled } = useScroll({ threshold: 50 });
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu();
  const navigate = useNavigate();

  const handleNavClick = useCallback((navIdOrHref) => {
    // Find the nav item
    const navItem = NAV_ITEMS.find(item => item.id === navIdOrHref);
    if (navItem) {
      if (navItem.href.startsWith('#')) {
        scrollToElement(navItem.href.slice(1), { offset: 80 });
      } else if (navItem.href.startsWith('/')) {
        navigate(navItem.href);
      }
    }
    closeMobileMenu();
  }, [closeMobileMenu, navigate]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Logo isScrolled={isScrolled} />

        {/* Desktop Navigation */}
        <DesktopNav isScrolled={isScrolled} onNavClick={handleNavClick} />

        {/* Mobile Menu Button */}
        <MobileMenuButton
          isOpen={isMobileMenuOpen}
          onClick={toggleMobileMenu}
          isScrolled={isScrolled}
        />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onNavClick={handleNavClick} />
    </nav>
  );
}

/**
 * Logo Sub-component
 */
function Logo({ isScrolled }) {
  return (
    <a href="/" className="flex items-center">
      <img
        src="/images/logo.png"
        alt="PixelMinds Consultancy"
        className={cn(
          'h-12 sm:h-14 md:h-16 lg:h-[72px] w-auto transition-all duration-300',
          !isScrolled && 'brightness-0 invert'
        )}
      />
    </a>
  );
}

/**
 * Desktop Navigation Sub-component
 */
function DesktopNav({ isScrolled, onNavClick }) {
  return (
    <div className="hidden md:flex items-center gap-8">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavClick(item.id)}
          className={cn(
            'font-medium transition-colors duration-300 hover:text-brand-600',
            isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
          )}
        >
          {item.label}
        </button>
      ))}
      <button
        onClick={() => onNavClick('contact')}
        className={cn(
          'px-6 py-2 rounded-full font-semibold transition-all duration-300',
          isScrolled
            ? 'bg-brand-600 text-white hover:bg-brand-700'
            : 'bg-white text-brand-600 hover:bg-gray-100'
        )}
      >
        Get in Touch
      </button>
    </div>
  );
}

/**
 * Mobile Menu Button Sub-component
 */
function MobileMenuButton({ isOpen, onClick, isScrolled }) {
  const lineColor = isScrolled ? 'bg-gray-800' : 'bg-white';

  return (
    <button
      className="md:hidden p-2 relative w-8 h-6"
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <span
        className={cn(
          'absolute left-0 w-full h-0.5 transition-all duration-300',
          lineColor,
          isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
        )}
      />
      <span
        className={cn(
          'absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 transition-all duration-300',
          lineColor,
          isOpen ? 'opacity-0' : 'opacity-100'
        )}
      />
      <span
        className={cn(
          'absolute left-0 w-full h-0.5 transition-all duration-300',
          lineColor,
          isOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
        )}
      />
    </button>
  );
}

/**
 * Mobile Menu Sub-component
 */
function MobileMenu({ isOpen, onNavClick }) {
  return (
    <div
      className={cn(
        'md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300',
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      )}
    >
      <div className="p-6 flex flex-col gap-4">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavClick(item.id)}
            className="text-gray-700 font-medium py-2 hover:text-brand-600 transition-colors text-left"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
