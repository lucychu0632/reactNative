import React, { Component } from 'react';
import { Platform,WebView,ScrollView,Dimensions } from 'react-native';
const BaseScript =
  `
    (function () {
        var height = null;
        function changeHeight() {
          if (document.body.scrollHeight != height) {
            height = document.body.scrollHeight;
            if (window.postMessage) {
              window.postMessage(JSON.stringify({
                type: 'setHeight',
                height: height,
              }))
            }
          }
        }
        setTimeout(changeHeight, 300);
    } ())
    `
export default class WebViewScreen extends React.Component {
  constructor (props) {
    super(props);
    this.state = ({
      height: 0
    })
  }
  onMessage (event) {
    try {
      const action = JSON.parse(event.nativeEvent.data)
      if (action.type === 'setHeight' && action.height > 0) {
        this.setState({ height: action.height })
      }
    } catch (error) {
      // pass
    }
  }
  render() {
    const source = (Platform.OS === 'ios') ? require('../../html/viewDemo.html') : { uri: 'file:///android_asset/html/viewDemo.html' }
    return (
      <ScrollView>
        <WebView
          injectedJavaScript={BaseScript}
          style={{
            width: Dimensions.get('window').width,
            height: this.state.height
          }}
          automaticallyAdjustContentInsets
          source={source}// 这里可以使用uri
          decelerationRate='normal'
          scalesPageToFit
          javaScriptEnabled // 仅限Android平台。iOS平台JavaScript是默认开启的。
          domStorageEnabled // 适用于安卓
          scrollEnabled={false}
          onMessage={this.onMessage.bind(this)}
        />
      </ScrollView>
    )
  }
}