import HeaderSobreEmpresa from "@/components/HeaderSobreEmpresa"
import SobreEmpresa from "@/components/SobreEmpresa"
import Footer from "@/components/Footer"

const Empresa = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <HeaderSobreEmpresa />
      <SobreEmpresa />
      <Footer />
    </main>
  );
};

export default Empresa;