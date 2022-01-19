import { EP_ORDINO_START_MENU_TAB, EStartMenuSection } from 'ordino';
export default function (registry) {
    registry.push(EP_ORDINO_START_MENU_TAB, 'ordino_help_tab', () => import('./menu/HelpTab'), {
        icon: 'fas fa-question-circle fa-fw',
        menu: EStartMenuSection.RIGHT,
    });
}
//# sourceMappingURL=phovea.js.map