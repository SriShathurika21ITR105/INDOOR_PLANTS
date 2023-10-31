import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AboutUs.css';

const AboutUs = () => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="about-us">
      <center><h1>About Us</h1></center>
      {showDetails && (
        <div>
    <p>Welcome ! Where we go beyond just being a gifting brand in India. We are a team driven by the passion to spread happiness, love, and joy through our wide range of exquisite gifts and heartfelt services.We understand the profound impact that gifting can have on relationships. It's not just about the physical exchange of presents; it's about the emotions, sentiments, and heartfelt connections that are nurtured through these selfless gestures. Whether it's a bouquet of vibrant flowers, a scrumptious cake, a personalised gift, or a delightful hamper, FlowerAura believes that every gift has the power to touch lives and bring people closer.
What sets us apart from our adversaries is our resolute commitment to quality and excellence. FlowerAura leaves no stone unturned in ensuring each gift ordered by our customers is shipped with utmost care and attention to detail. But our journey doesn't end there! We understand that gifting is a language of love that transcends distances. That's why we have built a strong network of fulfillment centres, channel stores, and owned dark stores that enable us to deliver your heartfelt expressions to over 600 cities across India and multiple international locations.
As we continue to grow, we are constantly inspired by your desire to discover new and innovative gifting ideas. We collaborate with small brands, skilled regional artisans and trusted vendors, taking pride in delivering products that exceed expectations while connecting with a larger audience.</p>

          <center><h1>Delivery Timings</h1></center>
          <p>For all same day orders, orders have to be made before 5 pm on the same day. All orders made after this shall be considered for delivery latest by the next day.
We do not guarantee any timed delivery, our regular delivery timings are between 9:00 am to 9:00 pm. Clients can request specific timings in the Special Instructions section of payment form, we will try our best to honour the client's request but cannot commit 100% efficiency in the timing of delivery.
Delivery timings if promised cannot be guaranteed in case of special circumstances like extreme weather conditions, riots, strikes, elections, bandhs, during rush hour days like Valentine's Day, Mothers Day, Rakhi, New year Eve etc, the order cancelation would not be possible in such circumstances
</p>

          <center><h1>Discounts</h1></center>
          <p><center>All the discounts are decided by FlowerAura team and none of the Discount and offers can be clubbed together.</center>
</p>
        </div>
      )}
      <center><button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'click to know About us'}
      </button></center>
     
    </div>
  );
};

export default AboutUs;
