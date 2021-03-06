// gulpプラグインの読み込み
const gulp = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass');
 
// style.scssをタスクを作成する
gulp.task('default', function () {
    // ★ style.scssファイルを監視
  gulp.watch('src/sass/style.scss', function () {
    // style.scssの更新があった場合の処理

    // style.scssファイルを取得
    gulp.src('src/sass/style.scss')
        // Sassのコンパイルを実行
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        // cssフォルダー以下に保存
        .pipe(gulp.dest('assets/css'));
    }); 
});
