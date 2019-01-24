import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";

import ImagePicker from "react-native-image-picker";
import RNFetchBlob from "rn-fetch-blob";

export default class App extends React.Component {
  state = {
    avatarSource: null,
    data: null,
    id: 10
  };

  selectPhotoTapped() {
    const options = {
      title: "Select Image",
      storageOptions: {
        skipBackup: true,
        path: "images"
      },
      maxWidth: 1920,
      maxHeight: 1080
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else {
        let source = { uri: "data:image/jpeg;base64," + response.data };

        this.setState({
          avatarSource: source,
          data: response.data
        });
      }
    });
  }

  uploadPhoto = () => {
    RNFetchBlob.fetch(
      "POST",
      "http://apitatica.temet.com.br/api/upload",
      { "Content-Type": "multipart/form-data" },
      [
        {
          name: "imagem",
          filename: "fotografia.jpeg",
          data: this.state.data
        },
        { name: "tipo_documento", data: "RG" },
        { name: "cliente_id", data: this.state.id.toString() }
      ]
    )
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View style={styles.container}>
        <View
          style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}
        >
          {this.state.avatarSource === null ? (
            <Text>Select a Photo</Text>
          ) : (
            <Image style={styles.avatar} source={this.state.avatarSource} />
          )}
        </View>

        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
          <Text style={styles.btn}>Select Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.uploadPhoto.bind(this)}>
          <Text style={styles.btn}>Upload Photo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  avatarContainer: {
    borderColor: "#f19234",
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    borderRadius: 75,
    width: 250,
    height: 250
  },
  btn: {
    fontSize: 20
  }
});
