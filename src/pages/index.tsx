import FeatureNote from '@/components/landing/FeatureNote';
import FeatureNotice from '@/components/landing/FeatureNotice';
import FeatureNumber from '@/components/landing/FeatureNumber';
import Greeting from '@/components/landing/Greeting';
import Hard from '@/components/landing/Hard';
import Smart from '@/components/landing/Smart';

const Index = () => {
  return (
    <>
      <Greeting></Greeting>
      <FeatureNumber></FeatureNumber>
      <FeatureNote></FeatureNote>
      <FeatureNotice></FeatureNotice>
      <Hard></Hard>
      <Smart></Smart>
    </>
  );
};

export default Index;
