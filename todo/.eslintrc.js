module.exports = {
    env: {
        node: true,
        commonjs: true,
        browser: true,
        es6: true,
        jest: true,
    },

    extends: ['airbnb', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    plugins: ['react', 'react-hooks', 'testing-library', 'prettier'],
    rules: {
        'prettier/prettier': 'warn',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.jsx', '.js'] },
        ],
        'import/prefer-default-exports': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            { packageDir: './', devDependencies: true },
        ],
    },
};
