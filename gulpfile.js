//variables
const {series, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const cssbeautify = require('gulp-cssbeautify');
const concat = require('gulp-concat');

//Rutas genericas para archivos de produccion ya compilados
const path = {
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js',
}

//Compilar sass y mandar carpeta css de produccion
function css(){
    return src(path.scss)
         .pipe(sass())
         .pipe(cssbeautify())
         .pipe(dest('./build/css'))
         .pipe(notify({message: 'Transformando sass en css'}));
}

//compilar js y mandar a carpeta de produccion
function js() {
    return src(path.js)
        .pipe(concat('app.js'))
        .pipe(dest('./build/js'));
}

//Funcion para refrescar los cambios automaticamente
function watchFiles() {
    watch(path.scss, css);
    watch(path.js, js);
}

//Mandar a llamar las funciones
exports.default = series(css, js, watchFiles);