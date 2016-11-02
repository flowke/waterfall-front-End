const gulp = require('gulp'),
    clean = require('gulp-clean');

gulp.task('move',['clean'],function(){
    return gulp.src(['src/static/images/*.{jpg,png}','./src/lib/framework/**','src/static/fonts/*'])
    .pipe(gulp.dest('dist/public/assets'));
});

gulp.task('clean', function(){
    return gulp.src('./dist/')
    .pipe(clean({force: true}));
});

gulp.task('toDist',()=>{
    gulp.src('/Applications/MAMP/htdocs/waterfall/public/assets/')
    .pipe(clean({force: true}));

    gulp.src('./dist/public/assets/**')
    .pipe(gulp.dest('/Applications/MAMP/htdocs/waterfall/public/assets/'));

    gulp.src('./dist/index.html')
    .pipe(gulp.dest('/Applications/MAMP/htdocs/waterfall/app/view/home/'))
    .pipe(gulp.dest('/Applications/MAMP/htdocs/waterfall/public/'));
});

gulp.task('watch',() => {
    gulp.watch('dist/**',['toDist']);
});
