import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

import FBFont from '../font';

export default class Scanner extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
        <View>
     
      <View>
            <Text style={[FBFont.AlternateGot(23), styles.heading]}>Scanner</Text>
        </View>
        <View style={ styles.container }>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={styles.scanArea}
        />
        <Text style={[FBFont.AlternateGot(18), styles.scanText]}>Scan QR code</Text>
      </View>
      </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    //code to handle scanned data
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#797d82',
        alignSelf:'center',
        width:'95%',
        height: 450
    },
    scanArea:{
        width: 240,
        height:200,
        alignSelf: 'center',
        marginTop: 100
    },
    heading: {
        marginTop: 31,
        marginBottom: 12.5,
        textAlign: "center"
    },
    scanText: {
        color: '#FFFFFF',
        textAlign:'center',
        marginTop:90
      },
})