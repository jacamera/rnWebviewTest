/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View, Button, WebView} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { showWebView: false };
    this._toggleWebView = () => {
      this.setState(prevState => ({ showWebView: !prevState.showWebView }));
    };
  }
  render() {
    return (
      <View style={{ flex: 1, padding: 50 }}>
        <Button
          onPress={this._toggleWebView}
          title="Toggle WebView"
        />
        {this.state.showWebView ?
          <WebView
            source={{ uri: 'https://www.google.com' }}
            useWebKit
          /> :
          null}
      </View>
    );
  }
}
