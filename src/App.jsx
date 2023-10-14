import { useState } from 'react';
import Nav from './common/nav';
import Hero from './sections/hero/hero';
import PerformanceMarketing from './sections/pmarketing';
import GrowthConsulting from './sections/gconsulting';
import AppAudit from './sections/appaudit';
import Footer from './sections/footer';

function App() {
  return (
    <div style={{ width: '100%' }}>
      <Nav />
      <Hero />
      <PerformanceMarketing />
      <GrowthConsulting />
      <AppAudit />
      <Footer />
    </div>
  );
}

export default App;
