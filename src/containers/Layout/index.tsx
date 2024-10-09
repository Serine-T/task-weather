import { Outlet } from 'react-router-dom';
import './styles.scss';
import Header from './Header';

const Layout = () =>  (
  <div className="styled-root">
    <Header />
    <main className="styled-main">
      <Outlet />
    </main>
  </div>
);

export default Layout;
