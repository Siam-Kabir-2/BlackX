"use client";

import { useState } from "react";
import { site } from "@/config/site";

export function ContractAddress({ placement }: { placement: "hero" | "tokenomics" | "buy" }) {
  const [copied, setCopied] = useState(false);
  const address = site.contractAddress;
  const compactAddress = address ? `${address.slice(0, 6)}...${address.slice(-4)}` : null;

  async function copyAddress() {
    if (!address) return;
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  if (placement === "hero") {
    return <div className="ca-card ca-card--hero" aria-label="BlackX contract address">
      <div><span className="ca-hero-label">CA {address ? "LIVE" : "PENDING"}</span><strong title={address || undefined}>{address ? <><span className="ca-address-full">{address}</span><span className="ca-address-short">{compactAddress}</span></> : "Revealed at launch"}</strong></div>
      {address && <button className="ca-hero-copy" type="button" onClick={copyAddress} aria-label={copied ? "Contract address copied" : "Copy BlackX contract address"}>{copied ? "Copied" : "Copy"}</button>}
    </div>;
  }

  return <div className={`ca-card ca-card--${placement}`} aria-label="BlackX contract address and launch information">
    <div className="ca-card-top">
      <span>CONTRACT ADDRESS</span>
      <span className="ca-card-status"><i aria-hidden="true" /> {address ? "OFFICIAL" : "PENDING"}</span>
    </div>
    <div className="ca-card-main">
      {address ? <code title={address} aria-label={`Contract address ${address}`}><span className="ca-address-full">{address}</span><span className="ca-address-short">{compactAddress}</span></code> : <strong>Revealed at launch</strong>}
      {address && <button type="button" onClick={copyAddress} aria-label={copied ? "Contract address copied" : "Copy BlackX contract address"}>{copied ? "Copied" : "Copy"}</button>}
    </div>
    <div className="ca-card-bottom">
      <span>{address ? "Verify the address through official channels." : "Official address will appear here."}</span>
      <span>{address ? "LAUNCHED" : "LAUNCHING"} <b>{site.launchDate}</b></span>
    </div>
  </div>;
}
