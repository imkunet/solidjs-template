import { Component } from 'solid-js';
import BounceText from '../components/BounceText';
import PageWrapper from '../components/PageWrapper';
import { BiLogosGithub } from 'solid-icons/bi';
import { Motion } from '@motionone/solid';
import { spring } from 'motion';

const Home: Component = () => {
  return (
    <PageWrapper>
      <BounceText
        initialDelay={0.1}
        text="Hello solidjs-template!"
        class="mt-10 text-center text-4xl font-bold text-white"
      />
      <BounceText
        initialDelay={0.2}
        text="Check out the README.md for more!"
        class="mt-2 text-center font-mono text-2xl text-white"
      />

      <Motion.div
        class="mx-auto pt-10 text-center"
        initial={{ opacity: 0, transform: 'translateY(2rem)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{
          allowWebkitAcceleration: true,
          easing: spring({ damping: 15, stiffness: 100 }),
          delay: 0.75,
        }}
      >
        <a
          href="https://github.com/imkunet/solidjs-template"
          target="_blank"
          class="inline-flex items-center gap-1 fill-white text-xl text-white underline decoration-cyan-500 decoration-wavy decoration-2"
        >
          <BiLogosGithub />
          GitHub
        </a>
      </Motion.div>
    </PageWrapper>
  );
};

export default Home;
