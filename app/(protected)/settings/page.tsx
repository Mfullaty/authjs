"use client";

import { logOut } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const Settingspage = () => {
  const user = useCurrentUser();
  const onClick = () => {
    logOut(); 
  };
  return (
    <div className="p-10 rounded-xl">
      <button onClick={onClick}>Sign Out</button>
    </div>
  );
};

export default Settingspage;
