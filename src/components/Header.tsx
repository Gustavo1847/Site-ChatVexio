/** 01 */

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky flex w-full justify-center top-0 left-0 right-0 bg-white/10 backdrop-blur transition-all duration-700 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo-laranja-preto.png" 
              alt="Vexio Studio" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('Inicio')}
              className="text-gray-700 font-semibold hover:text-chatvexio-orange transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('Sobre')}
              className="text-gray-700 hover:text-chatvexio-orange transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('Beneficios')}
              className="text-gray-700 hover:text-chatvexio-orange transition-colors"
            >
              Benefícios
            </button>
            <button 
              onClick={() => scrollToSection('Bonus')}
              className="text-gray-700 hover:text-chatvexio-orange transition-colors"
            >
              Bônus
            </button>
            <button 
              onClick={() => scrollToSection('Preco')}
              className="text-gray-700 hover:text-chatvexio-orange transition-colors"
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('FAQ')}
              className="text-gray-700 hover:text-chatvexio-orange transition-colors"
            >
              FAQ
            </button>
          </nav>

          <Button 
            onClick={() => window.open('https://chat.vexio.app.br', '_blank')}
            className="hidden md:inline-flex bg-chatvexio-orange hover:bg-chatvexio-orange-dark text-white"
          >
            Login
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('Inicio')}
                className="text-left text-gray-700 hover:text-chatvexio-orange transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('Sobre')}
                className="text-left text-gray-700 hover:text-chatvexio-orange transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('Beneficios')}
                className="text-left text-gray-700 hover:text-chatvexio-orange transition-colors"
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('Bonus')}
                className="text-left text-gray-700 hover:text-chatvexio-orange transition-colors"
              >
                Bônus
              </button>
              <button 
                onClick={() => scrollToSection('Preco')}
                className="text-left text-gray-700 hover:text-chatvexio-orange transition-colors"
              >
                Preços
              </button>
              <button 
                onClick={() => scrollToSection('FAQ')}
                className="text-left text-gray-700 hover:text-chatvexio-orange transition-colors"
              >
                FAQ
              </button>
              <Button 
                onClick={() => window.open('https://chat.vexio.app.br', '_blank')}
                className="bg-chatvexio-orange hover:bg-chatvexio-orange-dark text-white w-full"
              >
                Login
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
