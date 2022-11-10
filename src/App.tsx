import type { Component } from 'solid-js';
import BounceText from './components/BounceText';

const App: Component = () => {
  return (
    <>
      <BounceText
        text="Hello solidjs-template!"
        class="text-6xl text-white font-bold text-center mt-20"
      />
      <BounceText
        text="Check out the README.md for more!"
        initialDelay={0.15}
        class="text-4xl text-white font-mono text-center mt-5 p-4"
      />
    </>
  );
};

export default App;
