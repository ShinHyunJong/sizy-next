import FeatureAlimtalk from '@/components/landing/FeatureAlimtalk';
import FeatureDelivery from '@/components/landing/FeatureDelivery';
import FeaturePickup from '@/components/landing/FeaturePickup';
import FeatureRegister from '@/components/landing/FeatureRegister';
import FeatureSearch from '@/components/landing/FeatureSearch';
import Footer from '@/components/landing/Footer';
import Greeting from '@/components/landing/Greeting';
import Hard from '@/components/landing/Hard';
import Review from '@/components/landing/Review';
import Smart from '@/components/landing/Smart';

const Index = () => {
  return (
    <>
      <Greeting></Greeting>
      {/* <Why></Why> */}
      <FeatureAlimtalk></FeatureAlimtalk>
      <FeatureRegister></FeatureRegister>
      <FeatureDelivery></FeatureDelivery>
      <FeaturePickup></FeaturePickup>
      <FeatureSearch></FeatureSearch>
      <Review></Review>
      <Hard></Hard>
      <Smart></Smart>
      <Footer></Footer>
    </>
  );
};

export default Index;
