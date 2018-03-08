
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

Vue.use(require('vue-moment'));
Vue.use(require('./filters/pretty-bytes'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
//Vue.component('example', require('./components/Example.vue'));
// Auth
Vue.component('carousel', require('./components/auth/Carousel.vue'));
// Layout
Vue.component('navbar', require('./components/layout/Navbar.vue'));
Vue.component('notifications', require('./components/layout/Notifications.vue'));
// Users
Vue.component('users', require('./components/users/Users.vue'));
Vue.component('roles', require('./components/users/Roles.vue'));
// Profile
Vue.component('profileSidebar', require('./components/profile/read/Sidebar.vue'));
Vue.component('profile', require('./components/profile/read/Profile.vue'));
Vue.component('profileWork', require('./components/profile/read/Work.vue'));
// Profile Edit
Vue.component('profileSidebarEdit', require('./components/profile/edit/Sidebar.vue'));
Vue.component('profileEdit', require('./components/profile/edit/Profile.vue'));
Vue.component('profilePersonalEdit', require('./components/profile/edit/Personal.vue'));
Vue.component('profileContactEdit', require('./components/profile/edit/Contact.vue'));
Vue.component('profileEducationEdit', require('./components/profile/edit/Education.vue'));
Vue.component('profileFamilyEdit', require('./components/profile/edit/Family.vue'));
Vue.component('profilePlaceEdit', require('./components/profile/edit/Place.vue'));
Vue.component('profileWorkEdit', require('./components/profile/edit/Work.vue'));
Vue.component('profilePasswordEdit', require('./components/profile/edit/Password.vue'));

// Students
Vue.component('students-register', require('./components/students/Register.vue'));
Vue.component('students-list', require('./components/students/List.vue'));
Vue.component('students-edit', require('./components/students/Edit.vue'));


const app = new Vue({
    el: '#app'
});
