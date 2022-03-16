/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
// You can specify which plugins you need

import './styles/app.scss';
import { Tooltip, Toast, Popover, Collapse, Modal } from 'bootstrap';

// start the Stimulus application
import './bootstrap';
require('./js/speedLiveVideo');
