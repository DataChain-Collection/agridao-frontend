import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "What is AgriData and how does it work?",
    ans: "AgriData is a community-driven DataDAO focused on ethical, user-owned agricultural data. Users can contribute structured data from sensors, drones, and field observations, stored using decentralized standards like IPFS. In return, contributors receive rewards and help power AI models for sustainable farming and precision agriculture.",
  },
  {
    id: 2,
    quest: "Do I need technical knowledge to contribute?",
    ans: "No. AgriData is designed to be accessible. Whether you're a farmer, agronomist, researcher, or tech enthusiast, you can contribute data through a simple interface. All contributions are reviewed, validated, and curated by the community to ensure quality and transparency.",
  },
  {
    id: 3,
    quest: " How is my data protected?",
    ans: "Your data is handled with strict consent mechanisms and stored in decentralized infrastructure. You decide what to share, and with whom. All access is governed by transparent smart contracts and aligned with ethical data principles. Additionally, the Vana ecosystem provides a robust foundation for security and privacy, ensuring your data remains protected throughout its lifecycle.",
  },
];

export default faqData;
