import React from "react";
import Button from "../atoms/Button";
import { useRouter } from "next/navigation";

type Props = {};

const Wishlist = (props: Props) => {
  const router = useRouter()
  
  function HandleClick(): void {
    router.push('/home/learning')
    
  }

  return (
    <div className="m-auto flex justify-center">
      <Button
        label="Browse courses now"
        onClick={HandleClick}
        className=" hover:cursor-pointer w-full text-white hover:opacity-70 bg-black p-2"
      />
    </div>
  );
};

export default Wishlist;
