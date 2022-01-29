import { Link, useLocation } from "react-router-dom";

const LinkWithSearch = ({ path, text }) => {
  const { search } = useLocation();
  const to = `${path}${search}`;

  return <Link to={to}>{text}</Link>;
};

export default LinkWithSearch;
