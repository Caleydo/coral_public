import * as React from 'react';
import { HeaderNavigation, OrdinoFooter, useScrollToSlug } from 'ordino';
import { DevelopedByAffiliations } from './components/DevelopedByAffiliations';
import { CoralHelpSection } from './components/CoralHelpSection';

export function HelpPage() {
  useScrollToSlug();

  return (
    <>
      <HeaderNavigation bg="none" />
      <div className="container-fluid ordino-help-page h-100 position-relative pt-6">
        <CoralHelpSection>
          <DevelopedByAffiliations />
          <OrdinoFooter />
        </CoralHelpSection>
      </div>
    </>
  );
}
