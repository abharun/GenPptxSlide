import React, { useEffect } from "react";
import { generatePPTX } from "./generatePPTX";

export const Dashboard: React.FC = () => {

  useEffect(() => {
    generatePPTX();
  }, []);

  return <>Hello Dashboard</>;
};
