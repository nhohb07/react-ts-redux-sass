# ReactJS  - TypeScript - Redux

### Create ReactJS App
```
npx create-react-app react-ts --scripts-version=react-scripts-ts
cd react-ts && yarn start
```

### Structure
```
  src/
    __test__/
    actions/
    assets/
      images/
      
    components/
      Layout.tsx
      Header.tsx
      Footer.tsx
      Spinner.tsx
      index.tsx
      
    constants/
      index.tsx
      
    modules/
      Home/
        Home.tsx
      index.tsx

    styles/
      _globals.scss
      _variables.scss
      index.scss
      Spinner.scss
    App.tsx
    index.tsx
    package.json
    registerServiceWorker.ts
```

### React Router Dom
```
yarn add react-router-dom
yarn add @types/react-router-dom --dev
```

### SASS Preprocessor
```
yarn add sass-loader node-sass --dev
```
 - Edit file `config/webpack.config.dev.js`
```
 {
   test: /\.css$/,
   ...
 },
 {
  test: /\.scss$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: "css-loader",
      options: {
        sourceMap: true
      }
    },
    {
      loader: require.resolve('sass-loader'),
      options: {
        sourceMap: true,
        data: '@import "globals";',
        includePaths: [
          path.join(__dirname, 'src/styles'),
        ]
      },
    },
  ],
},
{
  ...
  exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$**/],
  ...
},
```

- Edit file `config/webpack.config.prod.js`
```
 {
   test: /\.css$/,
   ...
 },
 {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract(
      Object.assign(
        {
          fallback: {
            loader: require.resolve('style-loader'),
            options: {
              hmr: false,
            },
          },
          use: [
            {
              loader: require.resolve('css-loader'),
              options: {
                importLoaders: 1,
                minimize: true,
                sourceMap: shouldUseSourceMap,
              },
            },
            {
              loader: require.resolve('sass-loader'),
              options: {
                sourceMap: shouldUseSourceMap,
                minimize: true,
                data: '@import "globals";',
                includePaths: [
                  path.join(__dirname, 'src/styles')
                ]
              },
            },
          ],
        },
        extractTextPluginOptions
      )
    ),
    // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
  },
{
  ...
  exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$**/],
  ...
},
```
