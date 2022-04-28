import React from "react";
import Image from "next/image";

import { LOCALHOST_TESTNET_CHAIN_ID } from "../../../hooks/chainDetails/testnetDetails";

const NetworkDynamicRender = ({ networkId }) => {
  return (
    <>
      <Image
        src={`/${
          networkId === LOCALHOST_TESTNET_CHAIN_ID ? "localhost" : "disconnected"
        }-logo.png`}
        alt="Picture of a network"
        width={20}
        height={20}
      />
    </>
  );
};

export default NetworkDynamicRender;
