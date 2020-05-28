module.exports = {
    target: '/Users/marshall/Documents/GitHub/qualtus-client',
    ignored: [
        '**/node_modules/**/*',
        '**/.git/**/*',
        `/Users/marshall/Documents/GitHub/qualtus-client/build`,
        '/Users/marshall/Documents/GitHub/qualtus-client/.DS_Store'
    ],
    script: [
        'npm start --prefix /Users/marshall/Documents/github/qualtus-client',
        'find /usr/local/var/www/. ! -name . -prune -exec rm -rf {} +',
        'mv -v /Users/marshall/Documents/github/qualtus-client/build/* /usr/local/var/www',
    ]
}