import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: String = 'The Business News';

  breakingNews: String = 'Breaking News :';

  scrollingContent2: String =
    '[Adani Group, Apollo Hospitals considering majority stake in Metropolis Healthcare.]_____[Report Mitsubishi Electric to invest Rs 220 crore to set up factory in Maharashtra.]_____[PSBs to hold credit outreach drive across all districts on June 8.]';

  newsHeadline1: String =
    'Commercial, industrial entities reduce electricity bills by using renewable energy: Mercom India';

  new1Image: String =
    'https://assets-news-bcdn.dailyhunt.in/cmd/resize/770x433_90/fetchdata16/images/75/1a/31/751a31740b4ef62d907eb8e315b0222053f1e6529b2636f40452bf1805fe8061.webp';

  newsContent1a: String =
    'Commercial and industrial entities from various sectors, including steel and cement, have reduced their electricity expenses by using renewable energy, according to Mercom India.';

  newsContent1b: String =
    "The 'C&I Clean Energy Meet 2022' held in Bengaluru witnessed participation from players operating in solar, IT, automobile, manufacturing, chemical, textiles and FMCG sectors, Mercom India said in a statement on Monday. Over 100 players joined the one-day event to discuss opportunities in the domestic renewable energy sector, available technologies, business models, financing mechanisms and regulatory guidance to set up green units. Narayana Health is saving over Rs 40 million every year through solar power. Representatives from Kurlon, a mattress company with rooftop solar installations at its manufacturing units in three different states with a combined capacity of 2.5 MW, have saved more than Rs 75 million since its first installation in 2016,the research firm said. According to Mercom, the commercial and industrial customers in India are seeing their power bills increase annually. We are working towards helping the industry realise the Prime Minister's aim to install 300 gigawatts (GW) of solar by 2030. The event will spread awareness about how renewable energy can cater to the huge power needs of the C&I sector, save costs, and protect the environment by going green, Mercom India's Managing Director Priyadarshini Sanjay said. Mercom Communications India, a subsidiary of the US-based Mercom Capital Group, is a clean energy research and communications firm with expertise in cleantech markets.";

  newsHeadline2: String =
    'LIC continues to disappoint investors, share price hits new low since market debut';

  new2Image: String =
    'https://assets-news-bcdn.dailyhunt.in/cmd/resize/715x402_90/fetchdata16/images/7a/29/6e/7a296e9bbb8b211abb8be980c734325968cae7bbcbeac24d972523e8dacde3f3.webp';

  newsContent2a: String =
    'LIC share price hits new low since market debut LIC Share Price: Life Insurance Corporations (LIC) share price on Monday hit a new all-time low after crashing nearly 3 per cent in todays session.While LIC share price settled at Rs 776.50 apiece on NSE after falling 2.97 per cent, it ended at Rs 777.40 on BSE after moving southward 2.86 per cent.';

  newsContent2b: String =
    "This is the lowest level since the listing of the state-run insurance behemoth on May 17. After todays fall, the market capitalisation of the insurer slipped below the Rs 5 lakh crore-mark, according to the BSE data. Market capitalisation is the total valuation of a company based on its share price.With today's fall, LIC share price has slumped 17 per cent below the issue price of Rs 949.'LIC shares have broken 800 levels after a consolidation. It can go towards Rs 770 and Rs 749 levels. Investors should avoid carrying a heavy position and rather go for buy on dips strategy,'Manoj Dalmia, founder and director, Proficient Equities, said.The shares of LIC which is the country's largest insurer had made a weak debut on the bourses. Its shares were listed at a discount of 8.11 per cent at Rs 872 per share on NSE. On BSE, the shares started trading at Rs 867.20 apiece, down 8.62 per cent from the issue price..";

  newsContent2c: String =
    "The government sold over 22.13 crore shares or a 3.5 per cent stake in LIC through the IPO. It fetched Rs 20,557 crore. LIC IPO was also India's largest to date. Paytm IPO in 2021 had mobilised Rs 18,300 crore, surpassing the state-owned Coal India's record of fetched nearly Rs 15,500 crore in 2010. Anil Ambani's Reliance Power had in 2008 mobilised Rs 11,700 crore through the public offer.LIC had made it to the list of the top five most valued companies in the country with a market capitalisation of Rs 5.54 lakh crore on the day of listing, as per BSE data.LIC was formed by merging and nationalising 245 private life insurance companies on September 1, 1956, with an initial capital of Rs 5 crore.";

  title2: String = 'Latest Updates';

  LU1: String =
    'Reserve Bank of India comes out with provisioning norms for large NBFCs';

  LUI1: String =
    'https://assets-news-bcdn.dailyhunt.in/cmd/resize/700x400_90/fetchdata16/images/c9/d4/7b/c9d47bbf13ca2b395cd4300dd9810637136e0381ab0fb7c7dc3c45d579a09599.webp';

  LUC1: String =
    'New Delhi: Reserve Bank of India (RBI) on Monday came out with a set of norms for provisioning for standard assets by large Non-Banking Financial Companies (NBFCs) in view of the increasing role played by such entities in the financial system.In October last year, RBI had issued a framework for scale-based regulation for NBFCs. Regulatory structure for NBFCs comprise four layers based on their size, activity, and perceived riskiness.';

  LU2: String =
    'Adani Enterprises To Set Up Hyper-scale Data Centre At Bengal Silicon Valley: Minister';

  LUI2: String =
    'https://assets-news-bcdn.dailyhunt.in/cmd/resize/768x439_90/fetchdata16/images/1f/e9/38/1fe9387911bba9e6fc78a034c68f8451e14fdf23ca351aaf59e95bc02c928aab.webp';

  LUC2: String =
    'West Bengal Industry Minister Partha Chatterjee on Monday said the state government has given its nod to Adani Enterprises for setting up a hyper-scale data centre at Bengal Silicon Valley in the New Town area on the outskirts of the city.';

  LU3: String =
    'Over 90% Land Acquired For Ahmedabad-Mumbai Bullet Train Project: NHSRCL';

  LUI3: String =
    'https://assets-news-bcdn.dailyhunt.in/cmd/resize/768x437_90/fetchdata16/images/a2/48/96/a24896175e32994537b72b490a0db94086fc4a83d7a96051a79f8f89b7f6ae2f.webp';

  LUC3: String =
    'Over 90% of the total land required for the ambitious Ahmedabad-Mumbai bullet train project spread across Gujarat, Maharashtra and the Union Territory of Dadra and Nagar Haveli has been acquired, the projects implementing agency NHSRCL said on Monday.';
}
