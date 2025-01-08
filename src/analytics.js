import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize(' G-PTXE2L75N0');  

}

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
}