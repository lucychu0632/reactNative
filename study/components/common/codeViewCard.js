import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CodeViewCard extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    // this._onForward = this._onForward.bind(this);
    // this._onBack = this._onBack.bind(this);
  }

  render() {
    const {componentName,customComponent}=this.props;
    return (
      <View styles={styles.container}>
        <View>
          {
            customComponent
          }
        </View>
        <View style={styles.info}>
          <Text>
            {componentName}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop:(Platform.OS === 'ios')?20:0,
    borderWidth:1,
    borderColor:'#ccc'
  },
});

