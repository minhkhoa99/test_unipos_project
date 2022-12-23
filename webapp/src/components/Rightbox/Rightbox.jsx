import React from "react";
import TotalPoint from "./TotalPoint";

import UsersActive from "./UsersActive";
function Rightbox() {
  return (
    <div className='right-box'>
      <div className='right-bottom'>
        <TotalPoint />
        <UsersActive />
      </div>
    </div>
  );
}

export default Rightbox;
