const dividerStyles: React.CSSProperties = {
  width: '30px',
  height: '30px',
  margin: '50px 0',
  borderBottom: '2px solid rgba(0,0,0,0.2)',
};

export const Divider: React.FC = () => {
  return <div style={dividerStyles} />;
};
