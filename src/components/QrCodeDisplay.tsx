import React, { useEffect, useState } from "react";
import { fetchQrCode } from "../api";

const QrCdDisplay: React.FC = () => {
  const [qrData, setQrData] = useState<{ qr: string; id: string } | null>(null);

  const getQr = async () => {
    const res = await fetchQrCode();
    setQrData(res.data);
  };

  useEffect(() => {
    getQr();
    const interval = setInterval(getQr, 10000); // refresh every 10 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Scan to get 10 random movies!</h1>
      {qrData && <img src={qrData.qr} alt="QR Code" />}
    </div>
  );
};

export default QrCdDisplay;
