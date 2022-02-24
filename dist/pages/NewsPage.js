import * as React from 'react';
import { HeaderNavigation, OrdinoFooter, OrdinoScrollspy, OrdinoScrollspyItem, useScrollToSlug } from 'ordino';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import coralHero from '../assets/coral-hero.png';
import newSession from '../assets/news/new_session.png';
import exportCohorts from '../assets/news/export_cohorts.png';
import { hasCookie } from 'coral';
const sections = [
    {
        id: 'v1-2',
        name: 'Version 1.2',
        date: '2022-24-02',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("p", { className: "lead text-muted" },
                "This update contains new ",
                React.createElement("b", null, "features"),
                ", ",
                React.createElement("b", null, "style changes"),
                ", and structural changes of the application. The most important changes are:"),
            React.createElement("h5", { className: "mt-4" }, "Export Cohorts"),
            React.createElement("ul", null,
                React.createElement("li", null, "It is now possible to export cohorts as a CSV-file from Coral and continue the analysis elsewhere."),
                React.createElement("li", null,
                    React.createElement("b", null, "How to"),
                    ": Open the ",
                    React.createElement("i", null, "Inspect Items"),
                    " operation and add any attributes you would like to include in the export. As soon as the data is loaded the export button will be displayed in the top right of the operation area. The exported data will match the displayed table.")),
            React.createElement("img", { className: "img-fluid border border-gray-300", src: exportCohorts, alt: "Export cohorts" }),
            React.createElement("h5", { className: "mt-4" }, "Start a New Session"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "You can now start a new session by clicking the ",
                    React.createElement("b", null, "Start New Session"),
                    " button next to the available datasets.")),
            React.createElement("img", { className: "img-fluid border border-gray-300", src: newSession, alt: "Start new session" }),
            React.createElement("h5", { className: "mt-4" }, "Briefly noted"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    "New default font: ",
                    React.createElement("b", null, "Roboto"),
                    "."))))
    },
    {
        id: 'v1-0',
        name: 'Version 1.0',
        date: '2021-11-11',
        markup: () => (React.createElement(React.Fragment, null,
            React.createElement("h4", { className: "my-4" }, "Hello Coral! \uD83D\uDC23"),
            React.createElement("p", null, "This is the first release of Coral. Coral is a cohort analysis tool to interactively create and refine cohorts, which can then be compared, characterized, and inspected down to the level of single items."),
            React.createElement("img", { className: "img-fluid mb-4", src: coralHero, alt: "Screenshot of an analysis in Coral." }),
            React.createElement("p", null,
                "Coral comes with this dedicated homepage to welcome new users, providing an overview of ",
                React.createElement(Link, { to: "/features" }, "the features"),
                ", ",
                React.createElement(Link, { to: "/datasets" }, "available datasets"),
                ", and ",
                React.createElement(Link, { to: "/publications" }, "publications"),
                ". For an overview of Coral's features, we also provide an ",
                React.createElement(Link, { to: "/help" }, "introductory video"),
                " to get to know Coral."),
            React.createElement("p", null,
                "In the future, we will also present the most recent changes and developments here. ",
                React.createElement("br", null),
                "You can skip this welcome page and start the analysis in Coral directly, by going to the ",
                React.createElement("a", { href: "./app", target: "_blank", rel: "noopener noreferrer" },
                    React.createElement("code", null, "/app")),
                " subsite.")))
    }
];
export function NewsPage() {
    useScrollToSlug();
    React.useEffect(() => {
        var _a;
        const celebrationCookieKey = ((_a = sections[0]) === null || _a === void 0 ? void 0 : _a.id) + '_celebrated';
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
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, { bg: "none" }),
        React.createElement("div", { className: "position-relative py-6" },
            React.createElement(OrdinoScrollspy, { items: sections.map((section) => ({ id: section.id, name: section.name })) }, (handleOnChange) => React.createElement(React.Fragment, null,
                React.createElement("div", { className: "container pb-6" },
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" }, sections.map((item, index) => {
                            return (
                            // `id` attribute must match the one in the scrollspy
                            React.createElement(OrdinoScrollspyItem, { className: "pt-6", id: item.id, key: item.name, index: index, handleOnChange: handleOnChange },
                                React.createElement(React.Fragment, null,
                                    React.createElement("h4", { className: "text-start mt-2 d-flex align-items-center mb-3" },
                                        React.createElement("i", { className: "me-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                                        " ",
                                        item.name,
                                        " (",
                                        item.date,
                                        ")"),
                                    React.createElement("div", { className: "card shadow-sm h-100" },
                                        React.createElement("div", { className: "card-body" }, item.markup())))));
                        })))),
                React.createElement(OrdinoFooter, null))))));
}
//# sourceMappingURL=NewsPage.js.map