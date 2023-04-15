import React, { useState } from "react";

const Toggle = () => {
  const [on, setOn] = useState(false);

  function handleToggle() {
    setOn((on) => !on);
  }
  return (
    <div className="wrap">
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Toggle;

//-> useState trả về 1 arr [giá trị truyền vào, fn callback]
//-> on mặc định = false , fn setOn có nhiệm vụ thay đổi giá trị của "on"
//-> nếu on = true, add class "active" vào, và ngược lại thì không add gì cả
