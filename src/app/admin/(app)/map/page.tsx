"use client";

import Postcode from "@actbase/react-daum-postcode";
import Header from "@/app/admin/components/header";
import * as S from "./style.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Address {
  zonecode: number;
  address: string;
  buildingName?: string;
  apartment?: string;
}

const Map = () => {
  const router = useRouter();
  const [isPostcodeOpen, setIsPostcodeOpen] = useState(true);

  const getAddressData = (data: Address) => {
    const selectedAddress =
      data.address + (data.buildingName ? ` ${data.buildingName}` : "");
    setIsPostcodeOpen(false);

    router.push(
      `/admin/direction?selectedAddress=${encodeURIComponent(selectedAddress)}`
    );
  };

  return (
    <>
      <Header />
      <div className={S.MapLayout}>
        {isPostcodeOpen && (
          <Postcode
            style={{ flex: 1, width: "100%", height: "100vh", zIndex: 999 }}
            jsOptions={{ animation: true }}
            onSelected={(data: Address) => getAddressData(data)}
            onError={(error: unknown) => {
              console.error("Postcode error:", error);
            }}
          />
        )}
      </div>
    </>
  );
};

export default Map;
