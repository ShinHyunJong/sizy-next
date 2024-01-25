import FeatureNote from '@/components/landing/FeatureNote';
import FeatureNotice from '@/components/landing/FeatureNotice';
import FeatureNumber from '@/components/landing/FeatureNumber';
import Footer from '@/components/landing/Footer';
import Greeting from '@/components/landing/Greeting';
import Hard from '@/components/landing/Hard';
import Smart from '@/components/landing/Smart';
import Why from '@/components/landing/Why';

const Index = () => {
  return (
    <>
  
      <Greeting></Greeting>
      <Why></Why>
      <FeatureNote></FeatureNote>
      <FeatureNumber></FeatureNumber>
      <FeatureNotice></FeatureNotice>
      <Hard></Hard>
      <Smart></Smart>
      <Footer></Footer>
    </>
  );
};

export default Index;
