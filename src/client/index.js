import {getSentimentData} from './js/getSentimentData';
import {fetchSentimentData} from './js/fetchSentimentData';
import {validateTextFields} from './js/validateTextFields';
import {updateUI} from './js/lib/updateUI';
import {updateErrorUI} from './js/lib/updateErrorUI';
import {clearUI} from './js/lib/clearUI';

import './styles/resets.scss';
import './styles/base.scss';
import './styles/form.scss';
import './styles/footer.scss';
import './styles/header.scss';

export {fetchSentimentData,updateUI,getSentimentData,validateTextFields,updateErrorUI,clearUI};