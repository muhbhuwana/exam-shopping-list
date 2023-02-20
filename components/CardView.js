// React Native Card View for Android and IOS
// https://aboutreact.com/react-native-card-view/

// import React in our code
import React, { Component } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

class CardItem extends Component {
  render(props) {
    return (
      <View style={styles.bgcard}>
        <View style={styles.split}>
          <Text style={styles.textcard}>{this.props.title}</Text>
        </View>
        <View style={styles.split}>
          <Text style={styles.textnumbercard}>Rp.{this.props.number}</Text>{' '}
        </View>
      </View>
    );
  }
}

export default CardItem;

const styles = StyleSheet.create({
  textcard: {
    fontSize: 15,
    // fontWeight: 'bold',
    textAlign: 'left',
  },
  textnumbercard: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#11BECE',
  },
  bgcard: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    paddingTop: 10,
    paddingBottom: 30,
    backgroundColor: 'F7F7F7',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  split: {
    flexBasis: '50%',
    justifyContent: 'center',
  },
});
