import * as React from 'react';
import { HeaderNavigation, OrdinoFooter, OrdinoScrollspy, OrdinoScrollspyItem, useScrollToSlug } from 'ordino';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

import { hasCookie } from 'coral';
import coralHero from '../assets/coral-hero.png';
import newSession from '../assets/news/new_session.png';
import exportCohorts from '../assets/news/export_cohorts.png';

const sections = [
  // The versions refer to the version of the product!, i.e., https://github.com/Caleydo/coral_product/blob/develop/package.json
  {
    id: 'v3',
    name: 'Version 3',
    date: '2022-08-04',
    markup: () => (
      <>
        <p className="lead text-muted">
          This update contains various <b>usability improvements</b> and several <b>bug fixes</b>. The most important changes are:
        </p>
        <ul>
          <li>New Colors</li>
        </ul>
      </>
    ),
  },
  {
    id: 'v2',
    name: 'Version 2',
    date: '2022-05-02',
    markup: () => (
      <>
        <p className="lead text-muted">
          This update contains various <b>usability improvements</b> and several <b>bug fixes</b>. The most important changes are:
        </p>
        <ul>
          <li>New Colors</li>
          <li>new prevalence</li>
          <li>cohort numbers</li>
        </ul>
      </>
    ),
  },
  {
    id: 'v1-2',
    name: 'Version 1.2',
    date: '2022-02-24',
    markup: () => (
      <>
        <p className="lead text-muted">
          This update contains new <b>features</b>, <b>style changes</b>, and structural changes of the application. The most important changes are:
        </p>
        <h5 className="mt-4">Export Cohorts</h5>
        <ul>
          <li>It is now possible to export cohorts as a CSV-file from Coral and continue the analysis elsewhere.</li>
          <li>
            <b>How to</b>: Open the <i>Inspect Items</i> operation and add any attributes you would like to include in the export. As soon as the data is loaded
            the export button will be displayed in the top right of the operation area. The exported data will match the displayed table.
          </li>
        </ul>
        <img className="img-fluid border border-gray-300" src={exportCohorts} alt="Export cohorts" />

        <h5 className="mt-4">Start a New Session</h5>
        <ul>
          <li>
            You can now start a new session by clicking the <b>Start New Session</b> button next to the available datasets.
          </li>
        </ul>
        <img className="img-fluid border border-gray-300" src={newSession} alt="Start new session" />

        <h5 className="mt-4">Briefly noted</h5>
        <ul>
          <li>
            New default font: <b>Roboto</b>.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'v1-0',
    name: 'Version 1.0',
    date: '2021-11-11',
    markup: () => (
      <>
        <h4 className="my-4">Hello Coral! 🐣</h4>

        <p>
          This is the first release of Coral. Coral is a cohort analysis tool to interactively create and refine cohorts, which can then be compared,
          characterized, and inspected down to the level of single items.
        </p>

        <img className="img-fluid mb-4" src={coralHero} alt="Screenshot of an analysis in Coral." />

        <p>
          Coral comes with this dedicated homepage to welcome new users, providing an overview of <Link to="/features">the features</Link>,{' '}
          <Link to="/datasets">available datasets</Link>, and <Link to="/publications">publications</Link>. For an overview of Coral&apos;s features, we also
          provide an <Link to="/help">introductory video</Link> to get to know Coral.
        </p>

        <p>
          In the future, we will also present the most recent changes and developments here. <br />
          You can skip this welcome page and start the analysis in Coral directly, by going to the{' '}
          <a href="./app" target="_blank" rel="noopener noreferrer">
            <code>/app</code>
          </a>{' '}
          subsite.
        </p>
      </>
    ),
  },
];

export function NewsPage() {
  useScrollToSlug();

  React.useEffect(() => {
    const celebrationCookieKey = `${sections[0]?.id}_celebrated`;
    if (!hasCookie(celebrationCookieKey)) {
      document.cookie = `${celebrationCookieKey}=true; SameSite=Lax;`;

      // only celebrate recent releases
      const timeDiff = new Date().getTime() - new Date(sections[0].date).getTime();
      const maxTimeDiff = 2 * 7 * 24 * 60 * 60 * 1000; // two weeks in millis
      if (timeDiff < maxTimeDiff) {
        confetti({ particleCount: 150, spread: 100, origin: { x: 0.2, y: 0.7 }, angle: 45 });
        confetti({ particleCount: 150, spread: 100, origin: { x: 0.7, y: 0.7 }, angle: 135 });
      }
    }
  }, []);

  return (
    <>
      <HeaderNavigation bg="none" />
      <div className="position-relative py-6">
        <OrdinoScrollspy items={sections.map((section) => ({ id: section.id, name: section.name }))}>
          {(handleOnChange) => (
            <>
              <div className="container pb-6">
                <div className="row">
                  <div className="col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2">
                    {sections.map((item, index) => {
                      return (
                        // `id` attribute must match the one in the scrollspy
                        <OrdinoScrollspyItem className="pt-6" id={item.id} key={item.name} index={index} handleOnChange={handleOnChange}>
                          <>
                            <h4 className="text-start mt-2 d-flex align-items-center mb-3">
                              <i className="me-2 ordino-icon-1 fas fa-chevron-circle-right" /> {item.name} ({item.date})
                            </h4>
                            <div className="card shadow-sm h-100">
                              <div className="card-body">{item.markup()}</div>
                            </div>
                          </>
                        </OrdinoScrollspyItem>
                      );
                    })}
                  </div>
                </div>
              </div>
              <OrdinoFooter />
            </>
          )}
        </OrdinoScrollspy>
      </div>
    </>
  );
}
