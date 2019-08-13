

import getABC from './functions/getABC';


const domData = {
    name: 'lpButtonAuto',
    retry: 0,
    retryLimit: 5,
};

const newPageCall = () => {
    window.lpTag.newPage(document.URL, { section: window.lpTag.section });
};

const creatDomID = () => {
    // Append div to body
    if (document.getElementById(domData.name) === null) {
        const elem = window.document.createElement('div');
        elem.setAttribute('id', domData.name);
        document.body.appendChild(elem);
        setTimeout(() => {
            newPageCall();
        });
    } else if (domData.retry >= domData.retryLimit) {
        console.log('retry');
        setTimeout(() => {
            creatDomID();
        }, 100);
    }
};

const pageInit = () => {
    getABC();
    creatDomID();
};

pageInit();
