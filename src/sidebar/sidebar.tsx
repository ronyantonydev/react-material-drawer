import Drawer from "@mui/material/Drawer";

const Sidebar: React.FC<{ open: boolean; close: any; title: string }> = (
  props
) => {
  return (
    <Drawer anchor="left" open={props.open} onClose={() => props.close()}>
      <div className="sidebarContainer">
        <div className="sidebarTitle">{props.title}</div>
        <div className="sidebarOption">HOME</div>
        <div className="sidebarOption">SERVICES</div>
        <div className="sidebarOption">PORTFOLIO</div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
