import { ITeam } from "@/interfaces";
import { FAQ } from "../../components/Accordion/index";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const teamList: ITeam[] = [
  {
    name: "Co Siau",
    image_url: "/team_co siau 1.png",
    position: "FOUNDER/DIRECTOR",
    icons: [
      <Linkedin key={1} size={"1.5rem"} />,
      <Twitter key={1} size={"1.5rem"} />,
    ],
  },
  {
    name: "Bryan Lim",
    image_url: "/team_bryan 1.png",
    position: "CREATIVE DIRECTOR",
    icons: [<Facebook key={1} size={"1.5rem"} />],
  },
  {
    name: "Chin Jia Huei",
    image_url: "/team_jia huei 1.png",
    position: "ADMIN DIRECTOR",
    icons: [<Linkedin key={1} size={"1.5rem"} />],
  },
  {
    name: "Jay Coh",
    image_url: "/team_jay 1.png",
    position: "WEB3 ADVISOR",
    icons: [
      <Linkedin key={1} size={"1.5rem"} />,
      <Twitter key={1} size={"1.5rem"} />,
    ],
  },
  {
    name: "Gary Wong",
    image_url: "/team_gary 1.png",
    position: "BLOCKCHAIN ADVISOR",
    icons: [<Twitter key={1} size={"1.5rem"} />],
  },
  {
    name: "Ben Kok",
    image_url: "/team_ben kok 1.png",
    position: "TECH ADVISOR",
    icons: [<Linkedin key={1} size={"1.5rem"} />],
  },
  {
    name: "Sharon Yong",
    image_url: "/team_sharon 1.png",
    position: "CISO",
    icons: [<Linkedin key={1} size={"1.5rem"} />],
  },
  {
    name: "Wilson Wong",
    image_url: "/team_wilson 1.png",
    position: "CTO",
    icons: [<Linkedin key={1} size={"1.5rem"} />],
  },
  {
    name: "Tan Yu Ning",
    image_url: "/team_yuning 1.png",
    position: "Design Manager",
    icons: [
      <Linkedin key={1} size={"1.5rem"} />,
      <Twitter key={1} size={"1.5rem"} />,
    ],
  },
];

export const faq: FAQ[] = [
  {
    number: 1,
    question: "What is blockchain? Why should we learn about blockchain+?",
    answer: `Blockchain is a decentralized digital ledger that securely records transactions across many computers, making it tamper-proof and transparent.
 Decentralization: No single entity controls the data.
Security: Transactions are secure and immutable.
Transparency: All participants can see the transactions, fostering trust.
Efficiency: Streamlines processes, reduces costs, and speeds up transactions.
Innovation: Drives new technologies like cryptocurrencies, smart contracts, and decentralized apps (dApps).
Blockchain+ signifies the integration of blockchain with other technologies and industries, representing its future potential. Starting with the basics of blockchain is essential to stay ahead in the tech landscape.`,
  },
  {
    number: 2,
    question: "How does KOI build a large user community?",
    answer: `At first, KOI will develop a mini-game on the Ton-chain. Through this fun and easy-to-play game, with referral mechanism we aim to introduce ourselves and let everyone get to know us better. In addition, we will establish a social networking platform named Web3SOC to attract a large number of creators to showcase themselves and spread knowledge. Readers and viewers can share content from creators according to their preferences and interests.
While creators build their personal brands by gaining fans and traffic, sharers also receive some sharing rewards, creating a mutually beneficial platform.`,
  },
  {
    number: 3,
    question: "Is there risk in investing in blockchain?",
    answer: `Investing in blockchain does indeed involve risks. While the blockchain market has enormous potential, there are several risk factors to consider:
Volatility: Blockchain markets are highly volatile, with prices capable of rapid increases or declines.
Market Immaturity: The blockchain market is relatively new and still in the process of regulatory strengthening and standardization.
Security Risks: Hacking incidents can result in asset theft.
Technical Risks: Technical failures and vulnerabilities can lead to losses or unpredictable outcomes.
Please note that the above are just some common risk factors, and actual risks may vary depending on individual investment decisions and specific blockchains. Before investing in blockchain, it is important to thoroughly assess the risks and make informed decisions based on your own circumstances. It is advisable to avoid engaging in blockchain trading without comprehensive knowledge.`,
  },
  {
    number: 4,
    question:
      "How to ensure the security and privacy of blockchain transactions?",
    answer: `To ensure the security and privacy of blockchain transactions, you can take the following measures:
1. Use a secure digital wallet: Choose a reputable digital wallet that has undergone security audits and has strong security features and protections. Regularly update the wallet software to receive the latest security fixes and feature improvements.
2. Strengthen account security: Use complex passwords and regularly change them. Enable two-factor authentication (2FA) or multi-factor authentication (MFA) to enhance the security of your accounts. Safeguard your private keys and mnemonic phrases, avoiding storing them online or sharing them with others.
3. Choose secure exchanges: Select blockchain exchanges that are compliant with regulations and have high-security standards. Look for exchanges with security measures such as cold storage, security audits, and fund insurance.
4. Exercise caution with public Wi-Fi: Avoid conducting sensitive blockchain transactions on public Wi-Fi networks as they may pose security risks. It is preferable to use trusted private networks or mobile data connections for transactions.
5. Privacy protection: Understand the privacy features of blockchains and choose the ones that align with your privacy needs. Certain blockchains may offer stronger privacy protection, such as privacy coins or tokens with privacy features.
6. Decentralized trading: Utilize decentralized exchanges (DEX) for trading, as they do not rely on third-party custody of funds and provide better privacy protection.
7. Regularly update security awareness: Stay informed about the latest security threats and fraudulent practices. Read and follow security-related news, articles, and professional media to remain vigilant.
It is important to note that despite taking these measures, risks still exist. Protecting the security and privacy of blockchain transactions is an ongoing effort that requires continuous updates and strengthening of security awareness. The KOI Forum will provide ample information for everyone.`,
  },
  {
    number: 5,
    question:
      "What is the issue of practical applications and adoption level of blockchains?",
    answer: `The practical applications and adoption level of blockchains still face challenges. Despite their potential in areas such as digital payments, cross-border transfers, and decentralized finance, their adoption remains relatively low. Limitations such as a lack of merchant
acceptance, technical hurdles, legal and regulatory uncertainties, etc., restrict their widespread use. However, with the maturing infrastructure and wider adoption, the practical applications of blockchains are expected to grow further. The widespread adoption of blockchains will require time and broad acceptance to facilitate their extensive use in daily life.`,
  },
  {
    number: 6,
    question: "Security issues regarding blockchain trading platforms?",
    answer: `Security issues exist in blockchain trading platforms. Hacking attacks, technical vulnerabilities, and internal errors can result in fund theft. Choose platforms that undergo security audits and implement strict security measures. Enhance security by using measures
such as two-factor authentication, strong passwords, and secure storage of private keys. Regularly update software and operating systems and transfer funds to secure offline wallets. Exercise caution when selecting trading platforms, considering their security records and user feedback to mitigate risks. Stay vigilant, monitor transaction activities regularly, and promptly report any suspicious incidents. KOI does not engage in or provide trading strategies; the Forum only offers blockchain trading market and blockchain market information to keep everyone updated.`,
  },
  {
    number: 7,
    question: "Regulatory and legal issues regarding blockchains?",
    answer: `Regulatory and legal issues surrounding blockchain are complex and vary among countries. The regulatory landscape lacks uniformity and certainty. Investors should be aware of the legal requirements and regulatory frameworks in their respective countries and seek professional advice. Regulations may evolve with industry developments, and investors need to remain vigilant and stay updated with the latest information. Using compliant exchanges and adhering to Know Your Customer (KYC) requirements can mitigate risks. Regulatory authorities may strengthen oversight of blockchain exchanges, ICOs, and digital assets to protect investors and maintain financial stability.`,
  },
  {
    number: 8,
    question: "What is the Mission & Vision of KOI?",
    answer: `Vision: Through the【blockchain ecosystem】, create passive income and blockchain assets to help everyone achieve a “worry-free life” in a high inflationary system, enabling early retirement.
Mission: Our mission is to establish a secure, transparent value exchange network through blockchain reward mechanisms.`,
  },
  {
    number: 9,
    question: "What are the core values of the company?",
    answer: `The core values of KOI Mobilize Sdn Bhd revolves around 5 central values, which shape and cultivate the company’s ethos and worth:

Value Enhancement: With our firm goal of outperforming inflation, including future business directions, we focus on creating value.
Growth: We take bold actions to find the best ways to increase the company’s market value. 
Disruption: We adhere to the disruptive mindset of the new era, creating unique products for the benefit of participants in the blockchain ecosystem.
Passion: We continuously innovate and always wear a smile on our faces.
Integrity: With the user at the centre, we always maintain honesty, openness, and ethics.`,
  },
  {
    number: 10,
    question: "Blockchain What is the business model of the KOI project?",
    answer: `Telegram Mini Game: MONOKOILY enable players to achieve life balance and attain higher passive income by effectively managing time and resources in a virtual world. Increase user interest in KOI and generate revenue through paid features.
Blockchain Education: KOI starts with educating people on the fundamental concepts of blockchain, enabling them to directly engage in the blockchain financial revolution. By watching course videos, it helps them understand blockchain technology and its applications in the financial sector.
Financial Technology: KOI aims to help people transition from the Employee (E) quadrant to the Investor (I) quadrant through the S2B2C model, transitioning from passive income to investment income. Additionally, KOI has launched a social platform where profits are generated through advertising revenue, and users can participate through paid subscriptions. Through these initiatives, KOI aims to raise awareness about inflation issues and utilise blockchain technology to lead a life resistant to inflation.
Mergers and Acquisitions: We target to involve in mergers and acquisitions to expand its reach and capabilities. By acquiring complementary businesses and merging with strategic partners, KOI enhances its offerings, accelerates growth, and increases market share in the blockchain and financial technology sectors globally.`,
  },
  {
    number: 11,
    question: "What is unique about KOI Web3SOC?",
    answer: `Different from conventional social platforms, we embrace the principles of the Web3 world, emphasizing the concept of users creating value. They own their generated data, with blockchain technology seen as key to igniting the Web3.0 revolution. We provide a platform with a fair and just distribution mechanism, assisting potential creators in achieving their dreams, and creating a platform for freedom of speech.`,
  },
  {
    number: 12,
    question: "How to earn income on the KOI Web3SOC platform?",
    answer: `General users can earn tokens by consuming accumulated Red Heart Energy to watch ads that interest them on the “Watch-to-Earn” section. Meanwhile, content creators who pay $3 per month can create content on the platform, accumulating platform followers while establishing personal value. Upon reaching a certain threshold, they can begin receiving business partnerships and earn additional income derived from their personal value. (Note: All tokens obtained on the platform need to be withdrawn using Phantom or any SOL
Wallet.)`,
  },
  {
    number: 13,
    question:
      "Will there be any difficult requirements to enter the platform, such as identity authentication in the Web3.0 world, like having an encrypted wallet?",
    answer: `KOI claims to assist everyone in transitioning from Web2.0 to the Web3.0 stage. KOI enables everyone to enter Web3SOC stress-free. Those familiar with Web3.0 can directly use Phantom wallet to enter, while those unfamiliar can use commonly used social platforms. They can still participate in “Watch-to-Earn” to earn KOI tokens based on Red Heart Energy. When needed, they can follow the tutorials provided by KOI to easily apply for Phantom wallet and directly transfer KOI tokens into their wallet. `,
  },
];

export const partners: string[] = [
  "/partners/atecl 1.png",
  "/partners/creative 1.png",
  "/partners/gtouch 1.png",
  "/partners/magic eden 1.png",
  "/partners/phantom 1.png",
  "/partners/ryan 1.png",
  "/partners/sky venture 1.png",
  "/partners/solana 1.png",
  "/partners/telegram 1.png",
  "/partners/ton 1.png",
  "/partners/zetta 1.png",
];
