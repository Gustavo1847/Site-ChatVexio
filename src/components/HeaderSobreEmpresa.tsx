/** 01 */

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const HeaderSobreEmpresa = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky flex w-full justify-center top-0 left-0 right-0 bg-white/10 backdrop-blur transition-all duration-700 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/logo-laranja-preto.png" 
              alt="ChatVexio Logo" 
              className="h-8 w-auto"
            />
          </div>
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to={{ pathname: "/", hash: "#Inicio" }}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 font-semibold hover:text-chatvexio-orange transition-colors"
            >
              Início
            </Link>
            <Link 
              to={{ pathname: "/", hash: "#Sobre" }}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-chatvexio-orange transition-colors"
            >
              Sobre
            </Link>
            <Link 
              to={{ pathname: "/", hash: "#Beneficios" }}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-chatvexio-orange transition-colors"
            >
              Benefícios
            </Link>
            <Link 
              to={{ pathname: "/", hash: "#Bonus" }}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-chatvexio-orange transition-colors"
            >
              Bônus
            </Link>
            <Link 
              to={{ pathname: "/", hash: "#Preco" }}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-chatvexio-orange transition-colors"
            >
              Preços
            </Link>
            <Link 
              to={{ pathname: "/", hash: "#FAQ" }}
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-chatvexio-orange transition-colors"
            >
              FAQ
            </Link>
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
              <Link 
                to={{ pathname: "/", hash: "#Inicio" }}
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-700 hover:text-chatvexio-orange transition-colors"
              >
                Início
              </Link>
              <Link 
                to={{ pathname: "/", hash: "#Sobre" }}
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-700 hover:text-chatvexio-orange transition-colors"
              >
                Sobre
              </Link>
              <Link 
                to={{ pathname: "/", hash: "#Beneficios" }}
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-700 hover:text-chatvexio-orange transition-colors"
              >
                Benefícios
              </Link>
              <Link 
                to={{ pathname: "/", hash: "#Bonus" }}
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-700 hover:text-chatvexio-orange transition-colors"
              >
                Bônus
              </Link>
              <Link 
                to={{ pathname: "/", hash: "#Preco" }}
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-700 hover:text-chatvexio-orange transition-colors"
              >
                Preços
              </Link>
              <Link 
                to={{ pathname: "/", hash: "#FAQ" }}
                onClick={() => setIsMenuOpen(false)}
                className="text-left text-gray-700 hover:text-chatvexio-orange transition-colors"
              >
                FAQ
              </Link>
              <button 
                onClick={() => window.open('https://chat.vexio.app.br', '_blank')}
                className="bg-chatvexio-orange hover:bg-chatvexio-orange-dark text-white w-full"
              >
                Login
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default HeaderSobreEmpresa;
