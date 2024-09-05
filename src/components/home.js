import React from "react";
import HeroSection from "./homeComponents/Hero";
import Promotions from "./homeComponents/Promotions";
import FeaturedProducts from "./homeComponents/FeaturedProducts";
import WhyChooseUs from "./homeComponents/WhyChooseUs";
import Testimonials from "./homeComponents/Testimonials";
import NewsletterSignup from "./homeComponents/Newsletter";

const HomePage = () => {
    return (
       <div>
        <HeroSection/>
        <Promotions/>
        <FeaturedProducts/>
        <WhyChooseUs/>
        <Testimonials/>
        <NewsletterSignup/>
      </div>
    );
}

export default HomePage;