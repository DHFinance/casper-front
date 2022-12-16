import type { NextPage } from 'next';
import WithAuth from '../hoc/withAuth';
import SliderContainer from '../src/components/Layout/SliderContainer';

const Home: NextPage = () => {
  return (
    <WithAuth>
      <SliderContainer>
        Welcome to platform for payment operations on CSPR blockchain. We
        provides a reliable payments infrastructure that caters for the needs of
        both merchants and their customers: accessible, convenient and customer
        oriented.
      </SliderContainer>
    </WithAuth>
  );
};

export default Home;
