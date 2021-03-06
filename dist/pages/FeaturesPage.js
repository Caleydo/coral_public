import { HeaderNavigation, OrdinoFooter } from 'ordino';
import * as React from 'react';
import areaChart from '../assets/feature_icons/areaChart.png';
import barChart from '../assets/feature_icons/barChart.png';
import boxPlot from '../assets/feature_icons/boxPlot.png';
import densityPlot from '../assets/feature_icons/densityPlot.png';
import scatterPlot from '../assets/feature_icons/scatterPlot.png';
import survivalPlot from '../assets/feature_icons/survivalPlot.png';
import { FeatureCard } from './components/FeatureCard';
import intro from '../assets/welcome_tour/030_Workflow_Intro.svg';
import overview1 from '../assets/welcome_tour/100_Overview.svg';
import overview2 from '../assets/welcome_tour/110_Overview.svg';
import split1 from '../assets/welcome_tour/200_Split.svg';
import split2 from '../assets/welcome_tour/210_Split.svg';
import filter1 from '../assets/welcome_tour/300_Filter.svg';
import filter2 from '../assets/welcome_tour/310_Filter.svg';
import prevalence from '../assets/welcome_tour/400_Prevalence.svg';
import compare1 from '../assets/welcome_tour/500_Compare.svg';
import compare2 from '../assets/welcome_tour/510_Compare.svg';
import details from '../assets/welcome_tour/600_Details.svg';
export function FeaturesPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderNavigation, { bg: "none" }),
        React.createElement("div", { className: "position-relative py-6" },
            React.createElement("div", { className: "ordino-container" },
                React.createElement("div", { className: "container pb-6 pt-4" },
                    React.createElement("div", { className: "row workflow-carousel text-center" },
                        React.createElement("div", { className: "col-12 offset-lg-1 col-lg-10" },
                            React.createElement("div", { id: "carousel-welcome", className: "carousel slide carousel-fade", "data-bs-slide": "carousel", "data-bs-interval": "false" },
                                React.createElement("ol", { className: "carousel-indicators" },
                                    React.createElement("li", { "data-bs-target": "#carousel-welcome", "data-bs-slide-to": "0", className: "active" }),
                                    React.createElement("li", { "data-bs-target": "#carousel-welcome", "data-bs-slide-to": "1" }),
                                    React.createElement("li", { "data-bs-target": "#carousel-welcome", "data-bs-slide-to": "2" }),
                                    React.createElement("li", { "data-bs-target": "#carousel-welcome", "data-bs-slide-to": "3" }),
                                    React.createElement("li", { "data-bs-target": "#carousel-welcome", "data-bs-slide-to": "4" }),
                                    React.createElement("li", { "data-bs-target": "#carousel-welcome", "data-bs-slide-to": "5" }),
                                    React.createElement("li", { "data-bs-target": "#carousel-welcome", "data-bs-slide-to": "6" })),
                                React.createElement("div", { className: "carousel-inner" },
                                    React.createElement("div", { className: "carousel-item active" },
                                        React.createElement("img", { src: intro }),
                                        React.createElement("div", { className: "carousel-caption" })),
                                    React.createElement("div", { className: "carousel-item" },
                                        React.createElement("img", { src: overview1 }),
                                        React.createElement("img", { src: overview2 }),
                                        React.createElement("div", { className: "carousel-caption" })),
                                    React.createElement("div", { className: "carousel-item" },
                                        React.createElement("img", { src: split1 }),
                                        React.createElement("img", { src: split2 }),
                                        React.createElement("div", { className: "carousel-caption" })),
                                    React.createElement("div", { className: "carousel-item" },
                                        React.createElement("img", { src: filter1 }),
                                        React.createElement("img", { src: filter2 }),
                                        React.createElement("div", { className: "carousel-caption" })),
                                    React.createElement("div", { className: "carousel-item" },
                                        React.createElement("img", { src: prevalence }),
                                        React.createElement("div", { className: "carousel-caption" })),
                                    React.createElement("div", { className: "carousel-item" },
                                        React.createElement("img", { src: compare1 }),
                                        React.createElement("img", { src: compare2 }),
                                        React.createElement("div", { className: "carousel-caption" })),
                                    React.createElement("div", { className: "carousel-item" },
                                        React.createElement("img", { src: details }),
                                        React.createElement("div", { className: "carousel-caption" }))),
                                React.createElement("button", { className: "carousel-control-prev", type: "button", "data-bs-target": "#carousel-welcome", "data-bs-slide": "prev" },
                                    React.createElement("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
                                    React.createElement("span", { className: "visually-hidden" }, "Previous")),
                                React.createElement("button", { className: "carousel-control-next", type: "button", "data-bs-target": "#carousel-welcome", "data-bs-slide": "next" },
                                    React.createElement("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
                                    React.createElement("span", { className: "visually-hidden" }, "Next"))))),
                    React.createElement("div", { className: "row mt-6" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("h3", { className: "text-start d-flex align-items-center mb-3" }, "Features"))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("h4", { className: "text-start d-flex align-items-center mb-3" },
                                React.createElement("i", { className: "me-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                                " Onboarding"))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("p", { className: "lead text-gray-600" }, "Coral offers onboarding tooltips to guide new users through the application. The tooltips indicate what elements represent and what roles they play in Coral. A general workflow will be supported with these onboarding tooltips to explain the iterative workflow, cohort creation and how cohorts can be characterized."))),
                    React.createElement("div", { className: "row mt-3" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("h4", { className: "text-start d-flex align-items-center mb-3" },
                                React.createElement("i", { className: "me-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                                " Cohort Tracking"))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("p", { className: "lead text-gray-600" },
                                "The ",
                                React.createElement("b", null, "Cohort Evolution View"),
                                " (upper panel) presents how all cohorts were generated as well as their relationships as a graph. Operations and cohorts are encoded as nodes connected by edges to represent the analysis flow. The first cohort includes all items of the loaded dataset and is created automatically. When the user selects a cohort in the graph, it is assigned a color that is used consistently in all visualizations."))),
                    React.createElement("div", { className: "row mt-3" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("h4", { className: "text-start d-flex align-items-center mb-3" },
                                React.createElement("i", { className: "me-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                                " Cohort Creation"))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("p", { className: "lead text-gray-600" },
                                "Selected cohorts are loaded into the ",
                                React.createElement("b", null, "Action View"),
                                " (lower panel), which allows users to perform cohort characterization and creation operations. New cohorts created by these operations are also added to the graph, which results in an iterative cohort definition and analysis workflow. The Action View is divided into three areas: the Input Area, the Operation Area, and the optional Output Area, which is shown if the operation results in new cohorts. The Operation Area provides the several operations that can be applied to the input cohorts."),
                            React.createElement("h5", null, "Filter & Split"),
                            React.createElement("p", { className: "lead text-gray-600" }, "The Filter & Split operation is used to create cohorts from the loaded dataset. Filtering works by selecting the values of interest to create a new cohort. In contrast, the Split operation can be used to divide a cohort into mulitple sub-cohorst."))),
                    React.createElement("div", { className: "row mt-3" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("h4", { className: "text-start d-flex align-items-center mb-3" },
                                React.createElement("i", { className: "me-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                                " View"))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("p", { className: "lead text-gray-600" }, "The View operation is the main route to exploring the dataset and investigating how the values of one or more attributes are distributed across cohorts."),
                            React.createElement("p", { className: "lead text-gray-600" }, "Coral offers different visualizations, based on the number and type of attributes:"))),
                    React.createElement("div", { className: "row row-cols-1 row-cols-md-2 row-cols-xl-3" },
                        React.createElement(FeatureCard, { image: { file: barChart, altText: 'Image for a bar chart.' }, title: "Bar Chart", config: { numbAttr: 1, attribute: 'Categorical' } },
                            React.createElement("p", { className: "mb-0" }, "A categorical attribute will be shown with a bar chart, which shows the distribution of values for each category. If more than one cohort is selected, a grouped bar chart will be shown.")),
                        React.createElement(FeatureCard, { image: { file: densityPlot, altText: 'Image for a desnity plot.' }, title: "Density Plot", config: { numbAttr: 1, attribute: 'Quantitative' } },
                            React.createElement("p", { className: "mb-0" }, "A quantitative attribute will be displayed with a density plot and will superimpose the different curves for multiple selected cohorts.")),
                        React.createElement(FeatureCard, { image: { file: survivalPlot, altText: 'Image for a survival plot.' }, title: "Kaplan-Meier/Survival Plot", config: { numbAttr: 1, attribute: 'Quantitative' } },
                            React.createElement("p", { className: "mb-0" }, "The survival plot is only used for quantitative attributes related to the survival, if multiple cohorts are selected the multiple curves will be superimposed.")),
                        React.createElement(FeatureCard, { image: { file: boxPlot, altText: 'Image for a box plot.' }, title: "Box Plot", config: { numbAttr: 2, attribute: '1 Quantitative and 1 Categorical' } },
                            React.createElement("p", { className: "mb-0" }, "Selecting a categorical and a quantitative attribute will show a boxplot, with a box for each category. For multiple cohorts a box plot with mutliple boxes for each category will be shown, each representing a cohort.")),
                        React.createElement(FeatureCard, { image: { file: scatterPlot, altText: 'Image for a scatterplot.' }, title: "Scatterplot", config: { numbAttr: 2, attribute: '2 Quantitative' } },
                            React.createElement("p", { className: "mb-0" }, "A scatterplot will be used to display two quantitative attributes. In case of multiple cohorts, all datapoints of each cohort will be plotted corresponding with the color of the cohort.")),
                        React.createElement(FeatureCard, { image: { file: areaChart, altText: 'Image for an area chart.' }, title: "Area Chart", config: { numbAttr: 2, attribute: '2 Categorical' } },
                            React.createElement("p", { className: "mb-0" }, "Choosing two categorical attributes will result in an area chart. For multiple cohorts each category combination will have an area representing one cohort."))),
                    React.createElement("div", { className: "row mt-3" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("h4", { className: "text-start d-flex align-items-center mb-3" },
                                React.createElement("i", { className: "me-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                                " Estimate the Prevalence"))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("p", { className: "lead text-gray-600" }, "Prevalence is the proportion of items with a certain characteristic in a cohort. An exmaple would be the proportion of patients with a gene mutation among female Asian patients with NSCLC. Coral provides a dedicated analysis view to assess prevalence estimates. After selecting the sample cohort with items that have the characteristic of interest, the user can flexibly define the reference cohort by applying or skipping Filter & Split operations used to create the sample cohort. The cohorts\u2019 sizes and the resulting prevalences are then displayed in a bar chart."))),
                    React.createElement("div", { className: "row mt-3" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("h4", { className: "text-start d-flex align-items-center mb-3" },
                                React.createElement("i", { className: "me-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                                " Perform Basic Statistical Analyses"))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("p", { className: "lead text-gray-600" }, "Seeking relationships and patterns in tabular data is a common data exploration task. To confirm hypotheses that are based on visual patterns observed during exploratory data analysis, users need to be able to quickly compare data subsets, and get further information on the significance of the result and the statistical test applied."),
                            React.createElement("p", { className: "lead text-gray-600" },
                                "The ",
                                React.createElement("b", null, "Comparison"),
                                " operation enables users who are not experts in statistics to verify generated hypotheses and confirm insights gained during the exploration of tabular data. Concretely, it presents an overview of the statistical significance of various cohort comparisons. On demand, it shows further details, including the ",
                                React.createElement("b", null, "test score"),
                                ", a ",
                                React.createElement("b", null, "textual description"),
                                ", and a ",
                                React.createElement("b", null, "detail visualization"),
                                " explaining the results."))),
                    React.createElement("div", { className: "row mt-3" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("h4", { className: "text-start d-flex align-items-center mb-3" },
                                React.createElement("i", { className: "me-2 ordino-icon-1 fas fa-chevron-circle-right" }),
                                " Inspect the Items in a Cohort"))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12 col-xl-10 offset-xl-1 col-xxl-8 offset-xxl-2" },
                            React.createElement("p", { className: "lead text-gray-600" },
                                "Coral uses the tabular visualization technique ",
                                React.createElement("a", { href: "http://lineup.js.org/", target: "_blank", rel: "noopener" }, "LineUp"),
                                " for visualizing the items of the cohorts. This makes it possible to identify outliers or to assess single data points.",
                                React.createElement("br", null),
                                "Attributes can be selected to display their data in the table, and sort, filter, and group the data.")))),
                React.createElement(OrdinoFooter, null)))));
}
//# sourceMappingURL=FeaturesPage.js.map