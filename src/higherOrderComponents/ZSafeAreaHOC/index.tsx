import "./style.css";

const ZSafeAreaHOC: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="css-env-safe-area-view">{children}</div>;
};

export default ZSafeAreaHOC;
