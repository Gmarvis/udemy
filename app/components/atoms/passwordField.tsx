import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SetStateAction, useState } from "react";
import React from "react";

interface Props {
  password: string;
  className: string;
  setPassword: (value: SetStateAction<string>) => void;
  icon: string
}

const PasswordField: React.FC<Props> = ({ password, setPassword, icon,}) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="border border-gray-950">
      {/* Logic */}
      <input
        value={password}
        type={visible ? "text" : "password"}
        className="w-full h-[60px] placeholder:text-black placeholder:font-bold text-[12px] px-4 pb-8"
        // type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <span className="className">
        {
          <FontAwesomeIcon
            icon={visible ? "eye-slash" : "eye"}
            onClick={() => setVisible(!visible)}
          />
        }
      </span>
    </div>
  );
};

export default PasswordField;
