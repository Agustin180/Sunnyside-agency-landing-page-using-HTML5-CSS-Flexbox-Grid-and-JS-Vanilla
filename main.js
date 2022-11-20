const about = document.getElementById('selector-about');
const services = document.getElementById('selector-services');
const projects = document.getElementById('selector-projects');
const contact = document.getElementById('selector-contact');
const aboutmodal = document.getElementById('selector-aboutmodal');
const servicesmodal = document.getElementById('selector-servicesmodal');
const projectsmodal = document.getElementById('selector-projectsmodal');
const contactmodal = document.getElementById('selector-contactmodal');
const footerlogo = document.getElementById('selector-logo');
const footerabout = document.getElementById('selector-footerabout');
const footerservices = document.getElementById('selector-footerservices');
const footerprojects = document.getElementById('selector-footerprojects');
const setmodal = document.getElementById('general-navbar-hamburger');
const modal = document.getElementById('general-modal-open');
const displaymodal = modal.style;


setmodal.addEventListener('click', () => {
    displaymodal.display === 'none' ? displaymodal.display = 'flex' : displaymodal.display = 'none';
});

about.addEventListener('click', () => {
    const zoneabout = document.getElementById('zone-about');
    zoneabout.scrollIntoView();
});

services.addEventListener('click', () => {
    const zoneservices = document.getElementById('zone-services');
    zoneservices.scrollIntoView();
});

projects.addEventListener('click', () => {
    const zoneprojects = document.getElementById('zone-projects');
    zoneprojects.scrollIntoView();
});

contact.addEventListener('click', () => {
    const zonecontact = document.getElementById('zone-contact');
    zonecontact.scrollIntoView();
});

aboutmodal.addEventListener('click', () => {
    const zoneabout = document.getElementById('zone-about');
    zoneabout.scrollIntoView();
    displaymodal.display = 'none';
});

servicesmodal.addEventListener('click', () => {
    const zoneservices = document.getElementById('zone-services');
    zoneservices.scrollIntoView();
    displaymodal.display = 'none';
});

projectsmodal.addEventListener('click', () => {
    const zoneprojects = document.getElementById('zone-projects');
    zoneprojects.scrollIntoView();
    displaymodal.display = 'none';
});

contactmodal.addEventListener('click', () => {
    const zonecontact = document.getElementById('zone-contact');
    zonecontact.scrollIntoView();
    displaymodal.display = 'none';
});

footerabout.addEventListener('click', () => {
    const zoneabout = document.getElementById('zone-about');
    zoneabout.scrollIntoView();
});

footerservices.addEventListener('click', () => {
    const zoneservices = document.getElementById('zone-services');
    zoneservices.scrollIntoView();
});

footerprojects.addEventListener('click', () => {
    const zoneprojects = document.getElementById('zone-projects');
    zoneprojects.scrollIntoView();
});

footerlogo.addEventListener('click', () => {
    const sun = document.getElementById('zone-sun');
    sun.scrollIntoView();
});
