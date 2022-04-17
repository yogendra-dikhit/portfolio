import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';
import './index.scss';

const Layout = () => {
  return (
    <div>
      <SideBar />
      <div className="page">
        <span className="tags top-tag">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tag">
          &lt;/body&gt;
          <br />
          <span className="bottom-html-tag">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
