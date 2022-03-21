import * as React from 'react';
import { Link } from 'react-router-dom';
export function VideoCard({ openInNewWindow }) {
    const newWindowProps = openInNewWindow ? {
        target: '_blank',
        rel: 'noopener noreferrer'
    } : {};
    return (React.createElement("div", { style: { overflow: 'hidden' }, className: "card p-2 shadow-sm coral-video-card" },
        React.createElement("div", { className: "card-body" },
            React.createElement("p", { className: "card-text lead" },
                "Coral is a cohort analysis tool to interactively create and refine patient cohorts, while visualizing their provenance in the Cohort Evolution Graph. ",
                React.createElement("br", null),
                "The resulting cohorts can then be compared, characterized, and inspected down to the level of single entities."),
            React.createElement("iframe", { className: "w-100 pt-2 pb-1", src: "https://www.youtube-nocookie.com/embed/vSd3a9J63wQ?autoplay=0", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }),
            React.createElement("h5", { className: "card-title mt-4" },
                React.createElement("i", { className: "me-2 fas fa-check" }),
                "Workflow and Features"),
            React.createElement("p", { className: "card-text" },
                "The workflow of Coral consists of two steps: creating cohorts, and characterizing them. Operations from these two categories are carried out in an iterative workflow.",
                React.createElement("br", null),
                React.createElement("i", null, "Creation operations"),
                " allow users to create new sub-cohorts based on different attributes and attribute combinations.",
                React.createElement("i", null, "Characterization operations"),
                " give insights into the cohorts."),
            React.createElement("p", { className: "card-text" },
                "You can find more details on Coral's workflow and features in the ",
                React.createElement(Link, { className: "card-link", to: "/features" }, "Features"),
                " section."),
            React.createElement("h5", { className: "card-title mt-4" },
                React.createElement("i", { className: "me-2 fas fa-database" }),
                "Datasets"),
            React.createElement("p", { className: "card-text" }, "Coral's database contains  metadata as well as mutation data from the AACR Project GENIE, mRNA expression, DNA copy number, and mutation data from The Cancer Genome Atlas (TCGA) and the Cell Line Encyclopedia (CCLE). Furthermore, two CRISPR / RNAi loss-of-function screen data sets (DRIVE and Avana) are included."),
            React.createElement("p", { className: "card-text" },
                "You can find more detailed information about the datasets ",
                React.createElement(Link, { ...newWindowProps, className: "card-link", to: "/datasets" }, "here"),
                "."),
            React.createElement("h5", { className: "card-title mt-4" },
                React.createElement("i", { className: "me-2 fas fa-book-open" }),
                "Publications"),
            React.createElement("p", { className: "card-text" }, "Coral and its components have been described in the following scientific publications."),
            React.createElement("p", { className: "card-text text-muted" },
                "Patrick Adelberger, Klaus Eckelt, Markus J. Bauer, Marc Streit, Christian Haslinger, Thomas Zichner.",
                React.createElement("br", null),
                React.createElement("b", null, "Coral: a web-based visual analysis tool for creating and characterizing cohorts."),
                React.createElement("br", null),
                React.createElement("i", null, " Bioinformatics, doi:10.1093/bioinformatics/btab695, 2021.")),
            React.createElement("p", { className: "card-text text-muted" },
                "Marc Streit, Samuel Gratzl, Holger Stitz, Andreas Wernitznig, Thomas Zichner, Christian Haslinger.",
                React.createElement("br", null),
                React.createElement("b", null, "Ordino: visual analysis tool for ranking and exploring genes, cell lines, and tissue samples."),
                React.createElement("br", null),
                React.createElement("i", null, " Bioinformatics, 35(17): 3140-3142, 2019.")),
            React.createElement("p", { className: "card-text text-muted" },
                "Klaus Eckelt, Patrick Adelberger, Thomas Zichner, Andreas Wernitznig, Marc Streit.",
                React.createElement("br", null),
                React.createElement("b", null, "TourDino: A Support View for Confirming Patterns in Tabular Data."),
                React.createElement("br", null),
                React.createElement("i", null, "EuroVis Workshop on Visual Analytics (EuroVA '19), 2019.")),
            React.createElement("p", { className: "card-text text-muted" },
                "Katarina Furmanova, Samuel Gratzl, Holger Stitz, Thomas Zichner, Miroslava Jaresova, Martin Ennemoser, Alexander Lex, Marc Streit.",
                React.createElement("br", null),
                React.createElement("b", null, "Taggle: Combining Overview and Details in Tabular Data Visualizations."),
                React.createElement("br", null),
                React.createElement("i", null, "Information Visualization, 19(2): 114-136, 2019.")),
            React.createElement("p", { className: "card-text" }, "Please cite the first article when using Coral and publishing your results."),
            React.createElement("p", { className: "card-text" },
                "You can find more information about the publications ",
                React.createElement(Link, { ...newWindowProps, className: "card-link", to: "/publications" }, "here"),
                "."))));
}
//# sourceMappingURL=VideoCard.js.map