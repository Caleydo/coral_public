/**
 * Created by Caleydo Team on 31.08.2016.
 */

import {App} from 'coral';
import loginDialog from './LoginDialog.html';

const APP_NAME = 'Coral';

document.title = APP_NAME;
const tdpApp = new App(APP_NAME, loginDialog); // assign to variable to avoid linting errors
