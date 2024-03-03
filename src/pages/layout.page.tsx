import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header';

const LayoutPage = (): JSX.Element => (
  <div className="wrapper">
    <Header />
    <main className="page-content">
      <Outlet />
    </main>
    <Footer />
    <ScrollRestoration />
  </div>
);

export default LayoutPage;
