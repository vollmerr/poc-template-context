import LinkWithSearch from "../../components/LinkWithSearch";

const StepLinks = ({ links }) => {
  return (
    <ul>
      {links.map(({ path, linkText }) => (
        <li key={path}>
          <LinkWithSearch path={path} text={linkText} />
        </li>
      ))}
    </ul>
  );
};

export default StepLinks;
