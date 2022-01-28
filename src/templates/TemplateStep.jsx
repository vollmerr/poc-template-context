import Params from "../components/Params";
import Plans from "../components/Plans";
import Purchase from "../components/Purchase";
import Steps from "../components/Steps";

const TemplateStep = ({ name, children }) => {
  return (
    <div>
      <Params name={name} />
      <Purchase name={name} />
      <Plans name={name} />
      <Steps name={name} />

      {children}
    </div>
  );
};

export default TemplateStep;
