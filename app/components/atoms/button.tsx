'use client'

type ButtonProps = {
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  outline?: boolean;
  small?: boolean
  type: any
  disabled?: boolean;
};

export default function Button({ label, onClick, type, outline, small, disabled } :ButtonProps) {
  return (
    <button onClick={onClick} type={type}
      className={`relative rounded-sm hover:opacity-80 transition ${outline ? 'bg-white' : 'bg-black w-full'} ${outline ? 'text-black' : 'text-white'} ${small ? 'py-1' : 'py-3'} ${small ? 'text-sm' : 'text-lg'} ${small ? 'border-[1px]' : 'border-1'}`} >
      {label}
    </button>
  )
}