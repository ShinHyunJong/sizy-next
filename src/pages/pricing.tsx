import Footer from '@/components/landing/Footer';
import Inquiry from '@/components/pricing/Inquiry';
import Price from '@/components/pricing/Pricing';
import Process from '@/components/pricing/Process';
import WhyPrice from '@/components/pricing/WhyPrice';

export default function PricingPage() {
  return (
    <>
      <Price></Price>
      <WhyPrice></WhyPrice>
      <Process></Process>
      <Inquiry></Inquiry>
      <Footer></Footer>
    </>
  );
}
