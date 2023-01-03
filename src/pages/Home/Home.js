import React from 'react';
import BoxSection from './Home/BoxSection';
import BoxSectionLast from './Home/BoxSectionLast';
import CardSection from './Home/CardSection';
import HeroSection from './Home/HeroSection';
import ListItemSection from './Home/ListItemSection';
import ReviewSection from './Home/ReviewSection';
import SponsoredSection from './Home/SponsoredSection';
import UserReviewSection from './Home/UserReviewSection';
import WebsiteStartUpSection from './Home/WebsiteStartUpSection';

const Home = () => {
    return (
        <div className='grid gap-y-5'>
          <HeroSection/>
          <SponsoredSection/>
          <BoxSection/>
          <ListItemSection/>
          <CardSection/>
          <ReviewSection/>
          <UserReviewSection/>
          <WebsiteStartUpSection/>
          <BoxSectionLast/>
        </div>
    );
};

export default Home;