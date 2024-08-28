import {company} from './config.js';    //Changed form to from and added curly braces
import {year} from './config.js';

const message = '© ' + company + ' (' + year + ')' // Removed brackets
document.querySelector('footer').innerText = message

