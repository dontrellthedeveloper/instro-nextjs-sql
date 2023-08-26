"use client";

import Modal from "@/components/Modal";
import { useEffect, useState } from "react";

// import AuthModal from "@/components/AuthModal";
// import SubscribeModal from "@/components/SubscribeModal";
// import UploadModal from "@/components/UploadModal";
// import { ProductWithPrice } from "@/types";

// interface ModalProviderProps {
//   products: ProductWithPrice[];
// }

// const ModalProvider: React.FC<ModalProviderProps> = ({
//   products
// }) => {
    const ModalProvider = ()=> {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* <AuthModal />
      <SubscribeModal products={products} />
      <UploadModal /> */}
      <>
        <Modal/>
      </>
    </>
  );
}

export default ModalProvider;