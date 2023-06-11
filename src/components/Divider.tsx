const dividerStyles: React.CSSProperties = {
  width: '30px',
  height: '30px',
  margin: '50px 0',
  borderRadius: '2px',
  borderBottom: '1px solid rgba(255,255,255,0.8)',
};

export const Divider: React.FC = () => {
  return <div style={dividerStyles} />;
};
