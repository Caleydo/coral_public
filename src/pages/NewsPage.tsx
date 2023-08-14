import * as React from 'react';
import { HeaderNavigation, OrdinoFooter, OrdinoScrollspy, OrdinoScrollspyItem, useScrollToSlug } from 'ordino';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

import { hasCookie } from 'coral';

import coralHero from '../assets/coral-hero.png';

import v120_newSession from '../assets/news/v120_new_session.png';
import v120_exportCohorts from '../assets/news/v120_export_cohorts.png';

import v200_plotsWithoutGridLines from '../assets/news/v200_plots-without-grid-lines.png';

/** *****************************************************************************************
 * REMINDER: UPDATE THE TEASER ON THE HOME PAGE WHEN ADDING A NEW NEWS ITEM!
 ******************************************************************************************** */

const sections = [
  {
    id: 'v2-0',
    name: 'Version 2.0',
    date: '2023-08-11',
    markup: () => (
      <>
        <p className="lead text-muted">
          This update contains several <b>style changes</b>, <b>bugfixes</b>, and structural changes of the application. The most important changes are:
        </p>
        <h5 className="mt-4">Remove grid lines from visualizations</h5>
        <p>The grid lines in the visualizations have been removed to improve the readability of the visualizations.</p>
        <img className="img-fluid border border-gray-300" src={v200_plotsWithoutGridLines} alt="Plots without grid lines." />

        <h5 className="mt-4">Fix colors assignment in plots</h5>
        <p>
          Previously, the color assignment for cohorts with the same name (e.g., after filtering two cohorts by <i>Gender: Female</i>) in plots was wrong. We
          have fixed this issue and the correct color of the cohort should be assigned now.
        </p>

        <h5 className="mt-4">Select root cohort automatically after onboarding</h5>
        <p>The onboarding is only displayed when users launch the application for the first time. Afterwards, the root cohort is selected automatically.</p>
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
        <img className="img-fluid border border-gray-300" src={v120_exportCohorts} alt="Export cohorts" />

        <h5 className="mt-4">Start a New Session</h5>
        <ul>
          <li>
            You can now start a new session by clicking the <b>Start New Session</b> button next to the available datasets.
          </li>
        </ul>
        <img className="img-fluid border border-gray-300" src={v120_newSession} alt="Start new session" />

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
