/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
import {
  EP_ORDINO_FOOTER_MENU,
  EP_ORDINO_HEADER_MENU,
  EP_ORDINO_LOGO,
  EP_ORDINO_START_MENU_TAB,
  EP_ORDINO_START_MENU_TAB_SHORTCUT,
  EStartMenuSection,
  IOrdinoFooterMenuDesc,
  IOrdinoHeaderMenuDesc,
  IOrdinoLogoDesc,
  IStartMenuTabShortcutDesc,
} from 'ordino';
import { IRegistry, PluginRegistry } from 'visyn_core';
import { EXTENSION_POINT_CUSTOMIZED_LOGIN_FORM } from 'tdp_core';

export default function (registry: IRegistry) {
  registry.push(EP_ORDINO_START_MENU_TAB, 'ordino_help_tab', () => import('./menu/HelpTab'), {
    icon: 'fas fa-question-circle fa-fw',
    menu: EStartMenuSection.RIGHT,
  });

  // Coral's custom login form
  registry.push(EXTENSION_POINT_CUSTOMIZED_LOGIN_FORM, 'tdpBioinfoLoginForm', () => import('./LoginDialog'), {});

  // Welcome Page:
  // -------------------------------------------------------------------------------------------------------

  registry.push(EP_ORDINO_START_MENU_TAB, 'ordino_dataset_tab', () => import('ordino/dist/internal/menu/tabs/DatasetsTab'), {
    text: 'Datasets',
    menu: EStartMenuSection.MAIN,
    priority: 10,
  });

  registry.push(EP_ORDINO_START_MENU_TAB, 'ordino_sessions_tab', () => import('ordino/dist/internal/menu/tabs/SessionsTab'), {
    text: 'Analysis Sessions',
    menu: EStartMenuSection.MAIN,
    priority: 20,
  });

  registry.push(EP_ORDINO_START_MENU_TAB_SHORTCUT, 'ordino_sessions_shortcut', () => ({}), <Partial<IStartMenuTabShortcutDesc>>{
    text: 'Current Analysis Session',
    icon: 'fas fa-history',
    tabId: 'ordino_sessions_tab',
    setHighlight: true,
    priority: 10,
  });

  registry.push(EP_ORDINO_HEADER_MENU, 'ordino_header_menu', () => ({}), <IOrdinoHeaderMenuDesc>{
    links: [
      {
        faIcon: 'fas fa-newspaper fa-fw',
        text: "What's new?",
        page: '/news',
      },
      {
        faIcon: 'fas fa-list fa-fw',
        text: 'Features',
        page: '/features',
      },
      {
        faIcon: 'fas fa-database fa-fw',
        text: 'Datasets',
        page: '/datasets',
      },
      {
        faIcon: 'fas fa-fw fa-book-open',
        text: `Publications`,
        page: '/publications',
      },
      {
        faIcon: 'fas fa-question-circle fa-fw',
        text: 'Help',
        page: '/help',
      },
    ],
  });

  registry.push(EP_ORDINO_FOOTER_MENU, 'ordino_footer_menu', () => ({}), <IOrdinoFooterMenuDesc>{
    lists: [
      [
        {
          page: '/news',
          faIcon: 'fas fa-fw fa-newspaper',
          text: `What's new?`,
        },
        {
          page: '/features',
          faIcon: 'fas fa-fw fa-list',
          text: `Features`,
        },
        {
          page: '/datasets',
          faIcon: 'fas fa-fw fa-database',
          text: `Loaded datasets`,
        },
        {
          page: '/publications',
          faIcon: 'fas fa-fw fa-book-open',
          text: `Publications`,
        },
      ],
      [
        {
          page: '/help/coral-at-a-glance',
          faIcon: 'fas fa-fw fa-eye',
          text: `Coral at a Glance`,
        },
        {
          page: '/help/contact-us',
          faIcon: 'fas fa-fw fa-at',
          text: `Contact us`,
        },
        {
          page: '/help/disclaimer',
          faIcon: 'fas fa-fw fa-exclamation-triangle',
          text: `Disclaimer`,
        },
        {
          page: '/help/terms-of-use',
          faIcon: 'fas fa-fw fa-user-tie',
          text: `Terms of use`,
        },
        {
          page: '/help/source-code-licenses',
          faIcon: 'fas fa-fw fa-code',
          text: `Source code & licenses`,
        },
      ],
    ],
  });

  registry.push(EP_ORDINO_LOGO, 'coral_logo', () => import('coral/dist/assets/favicon.svg').then(PluginRegistry.getInstance().asResource), <IOrdinoLogoDesc>{
    text: 'Coral',
    width: 24,
    height: 24,
  });
}
