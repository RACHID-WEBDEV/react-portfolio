import React, { Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './components/Themes';
import GlobalStyle from './globalStyles';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Loading = styled('div')`
  font-width: 600;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* position the div in center */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

//components
// import Main from './components/Main';
// import AboutPage from './components/AboutPage';
// import BlogPage from './components/BlogPage';
// import WorkPage from './components/WorkPage';
// import MySkillsPage from './components/MySkillsPage';
const Main = React.lazy(() => import('./components/Main'));
const AboutPage = React.lazy(() => import('./components/AboutPage'));
const BlogPage = React.lazy(() => import('./components/BlogPage'));
const WorkPage = React.lazy(() => import('./components/WorkPage'));
const MySkillsPage = React.lazy(() => import('./components/MySkillsPage'));

function App() {
  const location = useLocation();
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence exitBeforeEnter>
          <Suspense
            fallback={
              <Loading>
                <h1 style={{ position: 'relative' }}>Loading...</h1>
              </Loading>
            }
          >
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Main} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/blog" component={BlogPage} />
              <Route exact path="/work" component={WorkPage} />
              <Route exact path="/skills" component={MySkillsPage} />
            </Switch>
          </Suspense>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
