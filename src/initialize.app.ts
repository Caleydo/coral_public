/**
 * Created by Caleydo Team on 31.08.2016.
 */

import { Coral } from 'coral';
import loginDialog from './LoginDialog.html';

const APP_NAME = 'Coral';

document.title = APP_NAME;
const tdpApp = new Coral(APP_NAME, loginDialog); // assign to variable to avoid linting errors
