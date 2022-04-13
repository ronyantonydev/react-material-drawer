import React, { createContext, useState } from "react";
import Sidebar from "../sidebar/sidebar";

const AlertContext: any = createContext<any>(null);

export const AlertProvider = ({ children }: any) => {
  const [alertData, setAlertData] = useState<any>({
    title: "",
    open: false,
    callback: null
  });

  const handleClose = () => {
    setAlertData({
      title: "",
      open: false,
      callback: null
    });
  };

  const open = (data: any) => {
    setAlertData(data);
  };
  return (
    <AlertContext.Provider value={{ open, handleClose }}>
      {alertData.open && (
        <Sidebar
          title={alertData.title}
          open={alertData.open}
          close={handleClose}
        />
      )}
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
