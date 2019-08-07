const presets = [
    [
        '@babel/env',
        {
            targets: {
                edge: '17',
                firefox: '60',
                chrome: '67',
                safari: '11.1',
            },
            useBuiltIns: 'usage',
            corejs: {
                version: 2,
            },
        },
    ],
];

const plugins = [
    'transform-es2015-arrow-functions',
];

module.exports = { presets, plugins };