import React from 'react';
import FeatureBox from './FeatureBox';
import { useAuth } from '../contexts/AuthContext';
import { Typography } from 'antd';
import fimage1 from '../images/AngelOne.png';
import fimage8 from '../images/groww.png';
import fimage3 from '../images/upstox.png';
import fimage4 from '../images/M-stock.png';
import fimage5 from '../images/Appreciate-logo.png';
import fimage6 from '../images/Yes bank.png';
import fimage7 from '../images/Bank of baroda.png';

function FeatureDetailsLoan() {
  const { userData } = useAuth(); // Assuming userData contains user information

   if (!userData){
      return null;
   }
  return ( 
    <div id="features1" style={{marginTop:'80px'}}>
      <Typography.Title level={2} >Hi, {userData.name}</Typography.Title>
      <Typography.Title level={2}>
        Explore Our Exclusive Financial Products and Start Earning Today!
      </Typography.Title>

      <div className="a-container">
        <FeatureBox
          image={fimage1}
          title="Angel Broking"
          text="Angel One - India’s largest broker introduced ZERO cost brokerage services for trades executed in cash delivery, and only Rs.20 per order will be charged for Intraday, F&O, etc. Open your Demat account now."
          link="http://paychat.fuse-cloud.com/tl?a=1486&o=4094&aff_click_id={AFF_CLICK_ID}&sub_affid={SUB_AFFID}&device_id={DEVICE_ID}"
        />
        <FeatureBox
          image={fimage8}
          title="Groww"
          text="Groww is India’s growing financial services platform where users can find their investment solutions pertaining to mutual funds, stocks, US Stocks, ETFs, IPO, and F&Os, to invest their money without hassles."
          link="http://paychat.fuse-cloud.com/tl?a=1486&o=4075&aff_click_id={AFF_CLICK_ID}&sub_affid={SUB_AFFID}&device_id={DEVICE_ID}"
        />
        <FeatureBox
          image={fimage3}
          title="Upstox"
          text="Upstox Free Demat &Trading A/c — Access over 100+ indicators and various charting tools. 9M+ investors. Paperless A/c opening. Visit now to open demat account Instantly & Trade at lowest flat fee."
          link="http://paychat.fuse-cloud.com/tl?a=1486&o=5436&aff_click_id={AFF_CLICK_ID}&sub_affid={SUB_AFFID}&device_id={DEVICE_ID}"
        />
        <FeatureBox
          image={fimage4}
          title="M-Stock"
          text="₹0 brokerage on Intraday trade — All Intraday, Options, Delivery, Currency trades @ zero brokerage for life. No order limits. 1-click order, fast platform, advanced tools at zero brokerage for life! Open Demat A/c."
          link="http://paychat.fuse-cloud.com/tl?a=1486&o=4559&aff_click_id={AFF_CLICK_ID}&sub_affid={SUB_AFFID}&device_id={DEVICE_ID}"
        />
        <FeatureBox
          image={fimage5}
          title="Appreciate Wealth"
          text="Appreciate is an online trading and investment platform. With Appreciate you can easily invest in US equities, fixed deposits, ETFs, bonds, digital gold, savings accounts and many more lucrative investment products at a very low cost to diversify your portfolio and enjoy higher returns."
          link="http://paychat.fuse-cloud.com/tl?a=1486&o=5202&aff_click_id={AFF_CLICK_ID}&sub_affid={SUB_AFFID}&device_id={DEVICE_ID}"
        />
        <FeatureBox
          image={fimage6}
          title="Yes Bank"
          text="At YES BANK, we are driven by a deep purpose and relentless commitment to our path. Our differentiated approach to growth is built on expanding our existing businesses and diversifying our loan portfolios, paving the way for a brighter future."
          link="http://paychat.fuse-cloud.com/tl?a=1486&o=5451&aff_click_id={AFF_CLICK_ID}&sub_affid={SUB_AFFID}&device_id={DEVICE_ID}"
        />
        <FeatureBox
          image={fimage7}
          title="Bank Of Baroda"
          text="Bank of Baroda is a government of India owned Multinational Public Sector Bank headquartered in Vadodara, Gujarat. It is the second largest Public Sector Bank in India after State Bank of India, with 153 million customers, a total business of US$291 billion, and a global presence of 100 overseas offices."
          link="http://paychat.fuse-cloud.com/tl?a=1486&o=5425&aff_click_id={AFF_CLICK_ID}&sub_affid={SUB_AFFID}&device_id={DEVICE_ID}"
        />
      </div>
    </div>
  );
}

export default FeatureDetailsLoan;
