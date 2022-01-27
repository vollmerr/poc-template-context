import { Outlet } from "react-router-dom";

import Params from './Params';

const PageLayout = () => {
  return (
    <div>
      <Params name="PageLayout" />
      <Outlet />
    </div>
  );
};

export default PageLayout;
