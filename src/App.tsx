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
      inactiveClass="text-gray-400 fill-gray-400"
      class="inline-flex items-center gap-1 transition-all"
      activeClass="font-bold text-white fill-white"
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
      class="z-50 m-4 inline-flex max-w-xs flex-row justify-center gap-4 rounded-full bg-zinc-700/20 px-6 py-4 shadow backdrop-blur-lg"
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

        <Motion.div
          class="z-0 grid h-fit w-full"
          initial={{
            transform: 'translateY(-8rem) scale(25%, 75%)',
            filter: 'opacity(0) blur(0.25rem)',
          }}
          animate={{
            transform: 'translateY(0) scale(100%, 100%)',
            filter: 'opacity(1) blur(0)',
          }}
          transition={{
            easing: spring({ damping: 30, stiffness: 200 }),
          }}
        >
          <Presence initial={false}>
            <Routes>
              <Route path="/" component={Home} />
              <Route path="/page1" component={Page1} />
            </Routes>
          </Presence>
        </Motion.div>
      </Router>
    </>
  );
};

export default App;
