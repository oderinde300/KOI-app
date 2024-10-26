import { IChartData, IEvent, ITeam } from "@/interfaces";
import { FAQ } from "../../components/Accordion/index";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const teamList: ITeam[] = [
  {
    name: "Co Siau",
    // image_url: "/team/team_co siau 1.png",
    image_url: "/team-photo/Co Siau.png",
    position: "FOUNDER/DIRECTOR",
    social_media: [
      {
        icon: "/team/linkedin.svg",
        link: "https://www.linkedin.com/in/co-siau-cryptodevelopment/",
      },
      {
        icon: "/team/twitter.svg",
        link: "https://x.com/CoSiau?t= 6AmVDKWle1l44GJHlO qRyQ&s=09",
      },
    ],
  },
  {
    name: "Bryan Lim",
    // image_url: "/team/team_bryan 1.png",
    image_url: "/team-photo/Bryan Lim.jpg",
    position: "CREATIVE DIRECTOR",
    social_media: [
      {
        icon: "team/facebook.svg",
        link: "https://www.facebook.com/bryanlim111?mibextid=ZbWKwL",
      },
    ],
  },
  {
    name: "Chin Jia Huei",
    // image_url: "/team/team_jia huei 1.png",
    image_url: "/team-photo/Chin Jia Huei.png",
    position: "ADMIN DIRECTOR",
    social_media: [
      {
        icon: "/team/linkedin.svg",
        link: "https://www.linkedin.com/in/jia-huei-45552a125/",
      },
    ],
  },
  {
    name: "Wilson Wong",
    // image_url: "/team/team_wilson 1.png",
    image_url: "/team-photo/Wilson Wong.png",
    position: "CTO",
    social_media: [
      {
        icon: "/team/linkedin.svg",
        link: "https://www.linkedin.com/in/wilson-wong-412046184/",
      },
    ],
  },
  {
    name: "Tan Yu Ning",
    // image_url: "/team/team_yuning 1.png",
    // image_url: "/team-photo/Tan Yu Ning.png",
    image_url: "/team-photo/Tan Yu Ning.png",
    position: "Design Manager",
    social_media: [
      {
        icon: "/team/linkedin.svg",
        link: "https://www.linkedin.com/in/yu-ning-tan-37297231b/",
      },
    ],
  },
  {
    name: "Sharon Yong",
    // image_url: "/team/team_sharon 1.png",
    image_url: "/team-photo/Sharon Yong.png",
    position: "CISO",
    social_media: [
      {
        icon: "/team/linkedin.svg",
        link: "https://www.linkedin.com/in/sharonyong",
      },
    ],
  },
  {
    name: "Jay Koh",
    // image_url: "/team/team_jay 1.png",
    image_url: "/team-photo/Jay Koh.png",
    position: "WEB3 ADVISOR",
    social_media: [
      {
        icon: "/team/linkedin.svg",
        link: "https://www.linkedin.com/in/jay-koh/",
      },
      {
        icon: "/team/twitter.svg",
        link: "https://x.com/Krypto_JayK",
      },
    ],
  },
  {
    name: "Gary Wong",
    // image_url: "/team/team_gary 1.png",
    image_url: "/team-photo/Gary Wong.png",
    position: "BLOCKCHAIN ADVISOR",
    social_media: [
      {
        icon: "/team/twitter.svg",
        link: "https://x.com/Garywong8888",
      },
    ],
  },
  {
    name: "Ben Kok",
    // image_url: "/team/team_ben kok 1.png",
    image_url: "/team-photo/Ben Kok.png",
    position: "TECH ADVISOR",
    social_media: [
      {
        icon: "/team/linkedin.svg",
        link: "https://www.linkedin.com/in/benjamin-kok/",
      },
    ],
  },
  {
    name: "Sky Wee",
    // image_url: "/team/team_jia huei 1.png",
    image_url: "/team-photo/Sky Wee.png",
    position: "LEAD ADVISOR",
    social_media: [
      {
        icon: "/team/linkedin.svg",
        link: "https://www.linkedin.com/in/skywee97/",
      },
      {
        icon: "/team/facebook.svg",
        link: "https://www.facebook.com/skywee97",
      },
      {
        icon: "/team/twitter.svg",
        link: "https://x.com/OfficialSkyWee1",
      },
    ],
  },
];

export const faq: FAQ[] = [
  {
    number: 1,
    question: "What is blockchain? Why should we learn about blockchain+?",
    answer: `Blockchain is a decentralized digital ledger that securely records transactions across many computers, making it tamper-proof and transparent. \n\n
            Decentralization: No single entity controls the data. \n\n
            Security: Transactions are secure and immutable. \n\n
            Transparency: All participants can see the transactions, fostering trust. \n\n
            Efficiency: Streamlines processes, reduces costs, and speeds up transactions. \n\n
            Innovation: Drives new technologies like cryptocurrencies, smart contracts, and decentralized apps (dApps). \n\n
            Blockchain+ signifies the integration of blockchain with other technologies and industries, representing its future potential. Starting with the basics of blockchain is essential to stay ahead in the tech landscape.`,
  },
  {
    number: 2,
    question: "How does KOI build a large user community?",
    answer: `At first, KOI will develop a mini-game on the Ton-chain. Through this fun and easy-to-play game, with referral mechanism we aim to introduce ourselves and let everyone get to know us better. In addition, we will establish a social networking platform named Web3SOC to attract a large number of creators to showcase themselves and spread knowledge. Readers and viewers can share content from creators according to their preferences and interests. \n\n
While creators build their personal brands by gaining fans and traffic, sharers also receive some sharing rewards, creating a mutually beneficial platform.`,
  },
  {
    number: 3,
    question: "Is there risk in investing in blockchain?",
    answer: `Investing in blockchain does indeed involve risks. While the blockchain market has enormous potential, there are several risk factors to consider: \n\n
Volatility: Blockchain markets are highly volatile, with prices capable of rapid increases or declines. \n\n
Market Immaturity: The blockchain market is relatively new and still in the process of regulatory strengthening and standardization. \n\n
Security Risks: Hacking incidents can result in asset theft. \n\n
Technical Risks: Technical failures and vulnerabilities can lead to losses or unpredictable outcomes. \n\n
Please note that the above are just some common risk factors, and actual risks may vary depending on individual investment decisions and specific blockchains. Before investing in blockchain, it is important to thoroughly assess the risks and make informed decisions based on your own circumstances. It is advisable to avoid engaging in blockchain trading without comprehensive knowledge.`,
  },
  {
    number: 4,
    question:
      "How to ensure the security and privacy of blockchain transactions?",
    answer: `To ensure the security and privacy of blockchain transactions, you can take the following measures: \n\n
1. Use a secure digital wallet: Choose a reputable digital wallet that has undergone security audits and has strong security features and protections. Regularly update the wallet software to receive the latest security fixes and feature improvements. \n\n
2. Strengthen account security: Use complex passwords and regularly change them. Enable two-factor authentication (2FA) or multi-factor authentication (MFA) to enhance the security of your accounts. Safeguard your private keys and mnemonic phrases, avoiding storing them online or sharing them with others. \n\n
3. Choose secure exchanges: Select blockchain exchanges that are compliant with regulations and have high-security standards. Look for exchanges with security measures such as cold storage, security audits, and fund insurance. \n\n
4. Exercise caution with public Wi-Fi: Avoid conducting sensitive blockchain transactions on public Wi-Fi networks as they may pose security risks. It is preferable to use trusted private networks or mobile data connections for transactions. \n\n
5. Privacy protection: Understand the privacy features of blockchains and choose the ones that align with your privacy needs. Certain blockchains may offer stronger privacy protection, such as privacy coins or tokens with privacy features. \n\n
6. Decentralized trading: Utilize decentralized exchanges (DEX) for trading, as they do not rely on third-party custody of funds and provide better privacy protection. \n\n
7. Regularly update security awareness: Stay informed about the latest security threats and fraudulent practices. Read and follow security-related news, articles, and professional media to remain vigilant. \n\n
It is important to note that despite taking these measures, risks still exist. Protecting the security and privacy of blockchain transactions is an ongoing effort that requires continuous updates and strengthening of security awareness. The KOI Forum will provide ample information for everyone.`,
  },
  {
    number: 5,
    question:
      "What is the issue of practical applications and adoption level of blockchains?",
    answer: `The practical applications and adoption level of blockchains still face challenges. Despite their potential in areas such as digital payments, cross-border transfers, and decentralized finance, their adoption remains relatively low.  \n\n Limitations such as a lack of merchant
acceptance, technical hurdles, legal and regulatory uncertainties, etc., restrict their widespread use. However, with the maturing infrastructure and wider adoption, the practical applications of blockchains are expected to grow further. The widespread adoption of blockchains will require time and broad acceptance to facilitate their extensive use in daily life.`,
  },
  {
    number: 6,
    question: "Security issues regarding blockchain trading platforms?",
    answer: `Security issues exist in blockchain trading platforms. Hacking attacks, technical vulnerabilities, and internal errors can result in fund theft. Choose platforms that undergo security audits and implement strict security measures. \n\n Enhance security by using measures
such as two-factor authentication, strong passwords, and secure storage of private keys.  \n\n Regularly update software and operating systems and transfer funds to secure offline wallets. Exercise caution when selecting trading platforms, considering their security records and user feedback to mitigate risks. Stay vigilant, monitor transaction activities regularly, and promptly report any suspicious incidents. KOI does not engage in or provide trading strategies; the Forum only offers blockchain trading market and blockchain market information to keep everyone updated.`,
  },
  {
    number: 7,
    question: "Regulatory and legal issues regarding blockchains?",
    answer: `Regulatory and legal issues surrounding blockchain are complex and vary among countries. The regulatory landscape lacks uniformity and certainty. Investors should be aware of the legal requirements and regulatory frameworks in their respective countries and seek professional advice.  \n\n  Regulations may evolve with industry developments, and investors need to remain vigilant and stay updated with the latest information. Using compliant exchanges and adhering to Know Your Customer (KYC) requirements can mitigate risks. Regulatory authorities may strengthen oversight of blockchain exchanges, ICOs, and digital assets to protect investors and maintain financial stability.`,
  },
  {
    number: 8,
    question: "What is the Mission & Vision of KOI?",
    answer: `Vision: Through the【blockchain ecosystem】, create passive income and blockchain assets to help everyone achieve a “worry-free life” in a high inflationary system, enabling early retirement.  \n\n
Mission: Our mission is to establish a secure, transparent value exchange network through blockchain reward mechanisms.`,
  },
  {
    number: 9,
    question: "What are the core values of the company?",
    answer: `The core values of KOI Mobilize Sdn Bhd revolves around 5 central values, which shape and cultivate the company’s ethos and worth: \n\n

Value Enhancement: With our firm goal of outperforming inflation, including future business directions, we focus on creating value. \n\n
Growth: We take bold actions to find the best ways to increase the company’s market value.  \n\n
Disruption: We adhere to the disruptive mindset of the new era, creating unique products for the benefit of participants in the blockchain ecosystem. \n\n
Passion: We continuously innovate and always wear a smile on our faces. \n\n
Integrity: With the user at the centre, we always maintain honesty, openness, and ethics.`,
  },
  {
    number: 10,
    question: "Blockchain What is the business model of the KOI project?",
    answer: `Telegram Mini Game: MONOKOILY enable players to achieve life balance and attain higher passive income by effectively managing time and resources in a virtual world. Increase user interest in KOI and generate revenue through paid features. \n\n
Blockchain Education: KOI starts with educating people on the fundamental concepts of blockchain, enabling them to directly engage in the blockchain financial revolution. By watching course videos, it helps them understand blockchain technology and its applications in the financial sector. \n\n
Financial Technology: KOI aims to help people transition from the Employee (E) quadrant to the Investor (I) quadrant through the S2B2C model, transitioning from passive income to investment income. Additionally, KOI has launched a social platform where profits are generated through advertising revenue, and users can participate through paid subscriptions. Through these initiatives, KOI aims to raise awareness about inflation issues and utilise blockchain technology to lead a life resistant to inflation. \n\n
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
      "Will Web3.0 platforms require complex entry steps like identity verification or an encrypted wallet?",
    answer: `KOI claims to assist everyone in transitioning from Web2.0 to the Web3.0 stage. KOI enables everyone to enter Web3SOC stress-free. Those familiar with Web3.0 can directly use Phantom wallet to enter, while those unfamiliar can use commonly used social platforms. They can still participate in “Watch-to-Earn” to earn KOI tokens based on Red Heart Energy. When needed, they can follow the tutorials provided by KOI to easily apply for Phantom wallet and directly transfer KOI tokens into their wallet. `,
  },
];

export const partners: string[] = [
  "/partners/atecl 1.svg",
  "/partners/creative 1.svg",
  "/partners/gtouch 1.svg",
  "/partners/magic eden 1.svg",
  "/partners/phantom 1.svg",
  "/partners/ryan 1.svg",
  "/partners/Sky ventures.svg",
  "/partners/Sky Venture Labs.svg",
  "/partners/solana 1.svg",
  "/partners/telegram 1.svg",
  "/partners/ton 1.svg",
  "/partners/zetta 1.svg",
];

export const slides: string[] = [
  "/slides/Web3SOC-01 3.svg",
  "/slides/Web3SOC-02 2.svg",
  "/slides/Web3SOC-03 1.svg",
  "/slides/Web3SOC-04 2.svg",
  "/slides/Web3SOC-05 2.svg",
  "/slides/Web3SOC-06 2.svg",
  "/slides/Web3SOC-07 2.svg",
  "/slides/Web3SOC-08 2.svg",
  "/slides/Web3SOC-09 2.svg",
  "/slides/Web3SOC-10 2.svg",
  "/slides/Web3SOC-11 2.svg",
  "/slides/Web3SOC-12 2.svg",
  "/slides/Web3SOC-13 2.svg",
  "/slides/Web3SOC-14 2.svg",
  "/slides/Web3SOC-15 1.svg",
];

export const events: IEvent[] = [
  {
    id: 1,
    images: [
      "/eventslides/A1 1.svg",
      "/eventslides/A2 2.svg",
      "/eventslides/A3 1.svg",
      "/eventslides/A4 1.svg",
      "/eventslides/A5 1.svg",
      "/eventslides/A6.svg",
    ],
    name: "Penang Masverse Dev Day",
    date: "2024-1-19",
    city: "Penang",
    description: `
    KOI Mobilize Sdn Bhd is thrilled to announce our participation in the inaugural grand event of 2024 hosted by Masverse, taking place on January 19th at 8 p.m. at the Masverse Web 3.0 Hub in Auto-City, Penang, Malaysia. Following the successful launch of the MasChain testnet, we are eager to engage at the MasChain Dev Day, an initiative backed by the Malaysia Digital Economy Corporation (MDEC). \n
    Our commitment to advancing blockchain education will align seamlessly with the gathering of influential blockchain communities, licensed exchanges, and IEO ecosystems at the event. We are excited to connect with leading entities such as the Malaysian Digital Chamber of Commerce (MDCC), SME Malaysia, ACCESS Blockchain Association, pitchIN, SINEGY, among others. With Gold News as the media partner, the event promises extensive coverage and industry insights. \n
    The focus of the event will be on the evolving landscape of Malaysia’s blockchain finance, particularly IEOs, and the broader implications for future blockchain functionalities. Key discussions will include the enhancement of privacy in Web3—a critical element given its centrality in the cryptocurrency narrative, balancing the need for privacy with regulatory requirements like KYC and PII management.\n
    At KOI Mobilize, we prioritize the adoption of compliant cryptographic standards tailored to varying business and regulatory demands. Our discussions with Masverse CEO KK Chew have been pivotal in understanding and navigating these requirements, ensuring that our approach to cryptography upholds the integrity and compliance of blockchain technologies.\n
    Our founders, Co Siau and Chief Blockchain Officer Gary Wong, recognize MasChain's national-level audit capabilities as a cornerstone for securely transitioning from Web 2.0 to Web 3.0 environments. This alignment supports our vision of decentralizing key management, empowering users with control over their digital identities.\n
    The collaboration with Masverse and MasChain signifies a strategic partnership aimed at enhancing the blockchain ecosystem in Malaysia. By leveraging MasChain's Proof-of-Authority (PoA) consensus mechanism, we aim to improve scalability and efficiency, targeting Web 2.0 companies and regulatory bodies to facilitate their integration into the Web 3.0 space.\n
    The utilization of MasToken for transactional purposes within MasChain’s ecosystem underscores our commitment to promoting a robust token economy. This collaboration is not just about technology integration but fostering a conducive environment for businesses to thrive in the burgeoning field of blockchain.\n
    We at KOI Mobilize Sdn Bhd are optimistic that our engagement in this event and future initiatives with Masverse will catalyze the growth of Malaysia’s blockchain industry, steering more stakeholders towards the transformative potential of Web 3.0.\n
  `,
  },
  {
    id: 2,
    images: [
      "/eventslides/B1 1.svg",
      "/eventslides/B2 1.svg",
      "/eventslides/B3 1.svg",
      "/eventslides/B4 1.svg",
    ],
    name: "Malacca Event",
    date: "2023-10-26",
    city: "Malacca",
    description: `
    An enlightening gathering titled “The Future of Digitalization: Exploring Web3.0 and Malaysia’s Digital Ecosystem” was hosted with distinction at The Sail in Malacca. This pivotal event was spearheaded by an alliance of forward-thinking organizations, including the Malacca Elite Association, the Malacca Youth Wing, Tencent Cloud, Golden Finance, the Malaysia Digital Economy Development Corporation (MDEC), KOI Mobilize SDN BHD, and ZhongHua 90. \n\n
Among the notable speakers were Chung Zhao Farn, a business development manager at MDEC; Rex Yeap, president and co-founder of Riverse Technology under Tencent Cloud; Chew Kian Kok, CEO of Marvese; Jason Chew, vice-chairman of Access Blockchain Association Malaysia; and Shas Fung, head of the Malaysia ICP Hub. An innovative touch was the use of a virtual host provided by Koi Mobilize, featuring the virtual mentor Miss KOI, which underscored our commitment to merging technological innovation with practical applications to widen engagement. \n\n
Zheng Mingjian, the chairman of the Malacca Elite Association, opened the event emphasizing the transformative potential of Web3.0 technology. He highlighted how it democratizes global market access, fosters a fair competitive landscape, and bolsters social trust and information security. A unique blockchain-based digital thank-you card was presented to attendees, symbolizing a passport to a globalized future and inviting all digitalization and blockchain enthusiasts to join our cause. \n\n
Rex Yeap introduced Tencent’s global strategies and the ecosystems it nurtures, demonstrating the expansive reach of Tencent Cloud's innovations. Chew Kian Kok, Jason Chew, and Shas Fung delved into the practicalities of transitioning businesses into the Web3.0 era, leveraging blockchain technology to unlock fresh opportunities. \n\n
Chung Zhao Farn shared insights on the Malaysian government's current digital subsidies, encouraging local businesses to embrace digital transformation backed by governmental support, thus catalyzing their technological and innovative capacities. \n\n
The event garnered attention from tech enthusiasts and entrepreneurs from both the southern and central regions of Malaysia, including members from the IOTEX Chinese Community, the Bu Whale Community, and the Bitcoin Chat Station. Distinguished advisers from the Malacca Elite Association, Yang Liangyao and Lai Qingmin, also graced the event. \n\n
This assembly marks a significant stride towards integrating Malaysia’s business community with the dynamic Web3.0 landscape. KOI Mobilize SDN BHD remains dedicated to fostering educational and business collaborations within this sphere, aiming to lead as a global pioneer in blockchain education.

    `,
  },
];

const color = "#FFA515";
const color1 = "#9ED441";
const color2 = "#D44161";
const color3 = "#D45741";
const color4 = "#41D499";
const color5 = "#2255D6";
const color6 = "#6D41D4";

export const chartData: IChartData[] = [
  {
    name: "Web3SOC Reward",
    percentage: 50,
    color: "#be80ff",
    image: "Group 1.svg",
  },
  {
    name: "Monokoily Reward",
    percentage: 15,
    color: "#bb39ff",
    image: "Group 2.svg",
  },
  {
    name: "Future Development",
    percentage: 10,
    color: "#cc23bc",
    image: "Group 3.svg",
  },
  {
    name: "VC",
    percentage: 8,
    color: "#ce215f",
    image: "Group 4.svg",
  },
  {
    name: "Private Sales",
    percentage: 5,
    color: "#e05314",
    image: "Group 5.svg",
  },
  {
    name: "Team",
    percentage: 5,
    color: "#f78a11",
    image: "Group 6.svg",
  },
  {
    name: "LP",
    percentage: 5,
    color: "#ffbc64",
    image: "Group 7.svg",
  },
  {
    name: "Advisor",
    percentage: 2,
    color: "#ffc89f",
    image: "Group 8.svg",
  },
];
