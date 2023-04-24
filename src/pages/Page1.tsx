import { Component } from 'solid-js';
import BounceText from '../components/BounceText';
import PageWrapper from '../components/PageWrapper';

const Page1: Component = () => {
  return (
    <PageWrapper>
      <BounceText
        initialDelay={0.1}
        text="This is Page1"
        class="mt-10 text-center text-4xl font-bold text-white"
      />
      <BounceText
        initialDelay={0.2}
        text="Awesome! We got more than 1 page!!!"
        class="mt-2 text-center font-mono text-2xl text-white"
      />
    </PageWrapper>
  );
};

export default Page1;
