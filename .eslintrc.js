module.exports = {
    extends: [
        'airbnb-typescript'
    ],
    plugins: ['import'],
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
        'react/jsx-filename-extension': 'off', 
    },
};
