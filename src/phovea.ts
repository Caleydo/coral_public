/* *****************************************************************************
 * Caleydo - Visualization for Molecular Biology - http://caleydo.org
 * Copyright (c) The Caleydo Team. All rights reserved.
 * Licensed under the new BSD license, available at http://caleydo.org/license
 **************************************************************************** */
import {IRegistry} from 'tdp_core';
import {EP_ORDINO_START_MENU_TAB, EStartMenuSection} from 'ordino';


export default function (registry: IRegistry) {
    registry.push(EP_ORDINO_START_MENU_TAB, 'ordino_help_tab', () => import('./menu/HelpTab'), {
        icon: 'fas fa-question-circle fa-fw',
        menu: EStartMenuSection.RIGHT,
    });

}
