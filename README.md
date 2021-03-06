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

    scss/
      _globals.scss
      _mixins.scss
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
- Usage:
  - `index.tsx`
    ```jsx
    import { BrowserRouter as Router } from 'react-router-dom';

    ReactDOM.render((
      <Router>
        <App />
      </Router>
    ), document.getElementById('root') as HTMLElement);
    ```
  - `App.tsx`
    ```jsx
    import * as React from 'react';
    import { Route, Switch } from 'react-router-dom';

    import { Spinner } from './components';
    import {
      Home,
      Login,
    } from './modules';

    class App extends React.Component {
      public render() {
        return (
          <div className="app">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
            </Switch>
            <Spinner />
          </div>
        );
      }
    }

    export default App;

    ```

### SASS Preprocessor
`yarn add sass-loader node-sass sass-resources-loader --dev`

- Edit file `config/webpack.config.dev.js`
  ```js
  {
    test: /\.css$/,
    ...
  },
  {
    test: /\.scss$/,
    use: [
      { loader: 'style-loader' },
      { loader: 'css-loader', options: { sourceMap: true } },
      { loader: 'sass-loader', options: { sourceMap: true } },
      {
        loader: 'sass-resources-loader',
        options: {
          sourceMap: true,
          resources: [
            'src/scss/_globals.scss'
          ]
        }
      }
    ]
  },
  {
    ...
    exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/],
    ...
  },
  ```

- Edit file `config/webpack.config.prod.js`
  ```js
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
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                sourceMap: shouldUseSourceMap,
                minimize: true,
                resources: [
                  'src/scss/_globals.scss'
                ]
              }
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
    exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/, /\.scss$/],
    ...
  },
  ```


### Redux
`yarn add redux react-redux @types/react-redux`

