import {resolve} from 'path';

export default {
    base: process.env.VITE_BASE_URL || '/',
    server: {
        host: '0.0.0.0'
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'pages/login.html'),
                register: resolve(__dirname, 'pages/register.html'),
                recovery_password: resolve(__dirname, 'pages/recovery_password.html'),
                courses_index: resolve(__dirname, 'pages/courses_index.html'),
                courses_view: resolve(__dirname, 'pages/courses_view.html'),
                courses_add: resolve(__dirname, 'pages/courses_add.html'),
                courses_edit: resolve(__dirname, 'pages/courses_edit.html'),
            }
        }
    }
}