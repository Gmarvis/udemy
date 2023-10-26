import React from 'react'

interface LogininputProps {
    label: string;
    name: string; 
    className: string;
    value: string;  
    placeholder: string;
    type?: "text" | "checkbox" | "password";
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Logininput: React.FC<LogininputProps>= ({ name, placeholder, value, type, className, label, onChange }) => {
  return (
    <div className='flex flex-col'>
        <label className='font-bold text-[15px] pt-4 pb-2'>{label}</label>
      <input name={name} type={type} value={value} className={className} placeholder={placeholder} onChange={onChange} />
    </div>
  )
}

export default Logininput