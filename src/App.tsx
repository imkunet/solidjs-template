import type { Component, ComponentProps } from 'solid-js';
import { Link, Route, Router, Routes } from '@solidjs/router';
import Home from './pages/Home';
import { Motion, Presence } from '@motionone/solid';
import { spring } from 'motion';
import { BiSolidHome, BiSolidBolt } from 'solid-icons/bi';
import Page1 from './pages/Page1';

type PageNavLinkProps = ComponentProps<'a'> & {
  label: string;
  href: string;
  end?: boolean;
};

const PageNavLink: Component<PageNavLinkProps> = (props: PageNavLinkProps) => {
  return (
    <Link
      class="inline-flex items-center gap-1 text-gray-400 transition-all"
      activeClass="font-bold text-gray-100"
      {...props}
    >
      {props.children}
      {props.label}
    </Link>
  );
};

const PageNav: Component = () => {
  return (
    <Motion.div
      class="z-50 m-4 inline-flex max-w-xs flex-row justify-center gap-4 rounded-full bg-zinc-700/20 px-6 py-4 shadow outline outline-2 outline-zinc-700/40 backdrop-blur-lg"
      initial={{
        transform: 'rotate3d(1, 0, 0, 90deg) translateZ(4rem) scaleX(25%)',
        filter: 'blur(0.5rem)',
      }}
      animate={{
        transform: 'rotate3d(0, 0, 0, 0deg)',
        filter: 'blur(0)',
      }}
      transition={{
        delay: 0.1,
        easing: spring({ damping: 30, stiffness: 200 }),
      }}
    >
      <PageNavLink label="Home" href="/" end>
        <BiSolidHome />
      </PageNavLink>
      <PageNavLink label="Page1" href="/page1">
        <BiSolidBolt />
      </PageNavLink>
    </Motion.div>
  );
};

const App: Component = () => {
  return (
    <>
      <Router>
        <div class="flex justify-center">
          <PageNav />
        </div>

        <div class="z-0 grid h-fit w-full">
          <Presence>
            <Routes>
              <Route path="/" component={Home} />
              <Route path="/page1" component={Page1} />
            </Routes>
          </Presence>
        </div>
      </Router>
    </>
  );
};

export default App;
