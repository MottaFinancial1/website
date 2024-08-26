import Layout from '@/components/layout/Layout';
import About2 from '@/components/sections/About2';
import Banner1 from '@/components/sections/Banner1';
import Callback1 from '@/components/sections/Callback1';
import Counter1 from '@/components/sections/Counter1';
import Services3 from '@/components/sections/Services3';
import Team2 from '@/components/sections/Team2';
import Slider1 from '@/components/sections/Slider1';

export const metadata = {
  title: 'Motta Financial',
};

export default function Home() {
  return (
    <>
      <Layout headerStyle={5} footerStyle={1} transparent>
        <Slider1 />
        {/* <Counter1 /> */}

        <About2 />

        <Team2 />

        <Services3 />

        <Callback1 />
      </Layout>
    </>
  );
}
