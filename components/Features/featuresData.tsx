import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: "/images/icon/icon-fhir-network.svg",
    title: "Sensor-Based Interoperability",
    description:
      "Built on Vana's infrastructure, AgriData supports seamless integration with IoT devices, drones, and agricultural sensors — enabling standardized, real-time data flow across ecosystems.",
  },
  {
    id: 2,
    icon: "/images/icon/icon-user-shield.svg",
    title: "User-Centric Data Ownership",
    description:
      "Participants retain full control over their contributed data. Consent, access, and rewards are transparent, empowering users to share insights without losing autonomy.",
  },
  {
    id: 3,
    icon: "/images/icon/icon-ipfs-cube.svg",
    title: "Field Metadata on IPFS",
    description:
      "All field observations and sensor outputs are stored off-chain on IPFS — hashed, verifiable, and gas-efficient — ensuring traceability, security, and farmer trust.",
  },
  {
    id: 4,
    icon: "/images/icon/icon-02.svg",
    title: "Modular Smart Contract Design",
    description:
      "Our Solidity-based system supports flexible onboarding of agricultural data types — from soil telemetry to drone imagery — enabling scalable, future-proof deployments.",
  },
  {
    id: 5,
    icon: "/images/icon/icon-token-coin.svg",
    title: "Fair Token Incentives",
    description:
      "Contributors are rewarded for high-quality, validated agricultural data through ethical tokenomics designed to support farmers, cooperatives, and research alliances.",
  },
  {
    id: 6,
    icon: "/images/icon/icon-consent-shield.svg",
    title: "Consent-Driven Data Pooling",
    description:
      "All shared data flows into a privacy-preserving pool, queryable only through user-approved access — empowering AI models and research while respecting farmer control.",
  },
];

export default featuresData;
