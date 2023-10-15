import React, { useMemo } from 'react';

interface PasswordStrenghtProps {
  password: string;
}

const PasswordStrenght: React.FC<PasswordStrenghtProps> = ({ password }) => {
  const strengthChecker = useMemo(() => {
    let strengthValue = 0;
    const regexList = ['[A-Z]', '[a-z]', '[0-9]', '\\W'];
    const strengthText = ['', 'unacceptable', 'weak', 'average', 'good', 'strong'];

    regexList.forEach((regex) => {
      if (new RegExp(regex).test(password)) {
        strengthValue += 1;
      }
    });
    if (password.length >= 8) {
      strengthValue += 1;
    }
    return { text: strengthText[strengthValue], value: strengthValue };
  }, [password]);

  return (
    <div>
      <div>
        <progress
          className={`pwd-checker-bar strength-${strengthChecker.text}`}
          value={strengthChecker.value}
          max="5"
        />
        {strengthChecker.text}
      </div>
    </div>
  );
};

export default PasswordStrenght;