import * as React from 'react';
import './style.scss';
import { HashRouter as Router, Route } from 'react-router-dom';
import DocumentManager from './portal/pages/Product/CheckoutPage';
import { Provider } from 'unstated';


class App extends React.Component<object> {
  onHandleProfileClick() {
    const profile = document.getElementById('profile') as HTMLElement;
    if (profile !== undefined && profile !== null) {
      profile.style.display = 'none';
    }
  }

  render() {
    return (
      <div >
        <Provider>
          <Router>
            <React.Fragment>
              <Route path="/" exact={true} component={DocumentManager} />
            </React.Fragment>
          </Router>
        </Provider>
      </div>
    );
  }
}

export { App };
