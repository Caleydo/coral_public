import * as React from 'react';
import { OrdinoFooter } from 'ordino';
import { CoralHero } from './components/CoralHero';
import { DevelopedByAffiliations } from './components/DevelopedByAffiliations';
import { CoralTeaserCards } from './components/CoralTeaserCards';
import { GettingStarted } from './components/GettingStarted';

export function HomePage() {
  return (
    <>
      <CoralHero />
      <div className="ordino-getting-started-wrapper">
        <GettingStarted />
        <hr className="m-0" />
        <DevelopedByAffiliations />
      </div>
      <CoralTeaserCards />
      <OrdinoFooter />
    </>
  );
}
