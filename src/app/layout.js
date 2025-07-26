import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Components/Header";
import Footer from './Components/Footer';
import { SaldoProvider } from './Context/SaldoContext';
import SideBar from './Components/SideBar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <SaldoProvider>
          <Header />
          <div className="d-flex flex-row justify-content-start">
            <SideBar />
            {children}
          </div>
          <Footer />
        </SaldoProvider>

      </body>
    </html>
  );
}
