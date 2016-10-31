// default settings. fis3 release

fis.set('project.ignore',['bower_components/**','src/**','node_modules/**', 'output/**', '.git/**', 'fis-conf.js', 'editorconfig','.gitignore','LICENSE','package.json','webpack.config.js','webpack.dev.config.js','cfg/**','.DS_Store']);

// fis.match('/dist/assets/(**.js)',{
//     release: '/fis/js/$1',
//     url: '/fis/js/$1'
// });

// fis.match('/dist/assets/(**.html)',{
//     release: '/fis/$1'
// });

fis.match('/src/lib/framework/(*.js)',{
    release: '/assets/$1'
});
