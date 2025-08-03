import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Components/Header";
import Footer from './Components/Footer';
import { SaldoProvider } from './Context/SaldoContext';
import SideBar from './Components/SideBar';
import { EstadoProvider } from './Context/EstadoContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <SaldoProvider>
          <EstadoProvider>
          <Header />
          <div className="d-flex flex-row justify-content-start">
            <SideBar />
            {children}
          </div>
          <Footer />
          </EstadoProvider>
        </SaldoProvider>

      </body>
    </html>
  );
}
