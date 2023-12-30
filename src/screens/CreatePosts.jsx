import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { Feather } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import makePhoto from "../helpers/makePhoto";
import getLocation from "../helpers/getLocation";
import uuid from "react-native-uuid";
import COLORS from "../constans/Colors";
import Button from "../components/Button";

const CreatePosts = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);
  const [post, setPost] = useState({
    id: "",
    uri: null,
    titlePost: "",
    place: "",
    location: {},
  });
  const { uri, titlePost, place } = post;

  const isFocused = useIsFocused();
  // const [uri, setUri] = useState(null);
  // const [titlePost, setTitlePost] = useState("");
  // const [place, setPlace] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    const { uri, titlePost, place } = post;
    const isDisabled = !uri || !titlePost || !place;
    setIsDisabled(isDisabled);
  }, [post]);

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleMakePhoto = async () => {
    const uri = await makePhoto(cameraRef);
    setPost((prevState) => ({ ...prevState, uri: uri }));
  };

  const handleLocation = async () => {
    const location = await getLocation();
    setPost((prevState) => ({ ...prevState, location: location }));
  };

  const clearForm = () => {
    setPost({
      id: "",
      uri: null,
      titlePost: "",
      place: "",
      location: {},
    });
    setIsDisabled(true);
    console.log("clearForm", post);
  };

  const createPost = () => {
    const newId = uuid.v4();
    handleLocation();
    setPost((prevState) => ({ ...prevState, id: newId }));
    console.log("createPost", post);
    clearForm();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <View style={styles.photoView}>
          {isFocused && uri === null ? (
            <Camera style={styles.camera} type={type} ref={cameraRef}>
              <TouchableOpacity
                style={styles.buttonCamera}
                onPress={handleMakePhoto}
              >
                <Feather name="camera" size={24} color="black" />
              </TouchableOpacity>
            </Camera>
          ) : (
            <Image source={{ uri }} style={styles.image} resizeMode="cover" />
          )}
        </View>

        {uri === null ? (
          <Text>Завантажте фото</Text>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setPost((prevState) => ({ ...prevState, uri: null }));
            }}
          >
            <Text>Редагувати фото</Text>
          </TouchableOpacity>
        )}

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Назва..."
              value={titlePost}
              styles={styles.input}
              onChangeText={(text) => {
                setPost((prevState) => ({ ...prevState, titlePost: text }));
              }}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Feather
              name="map-pin"
              styles={{ marginRight: 4 }}
              size={24}
              color={COLORS.grey}
            />
            <TextInput
              placeholder="Місцевість..."
              value={place}
              styles={styles.input}
              onChangeText={(text) => {
                setPost((prevState) => ({ ...prevState, place: text }));
              }}
            />
          </View>
          <Button
            title="Опубліковати"
            onPress={createPost}
            isDisabled={isDisabled}
          />
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },

  photoView: {
    width: "100%",
    height: 240,
    overflow: "hidden",
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: COLORS.inputBg,
  },
  camera: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCamera: {
    width: 60,
    height: 60,
    opacity: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "rgba(255,255,255, 0.3)",
  },
  inputWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
  },
  input: {
    color: COLORS.secondaryText,
    fontFamily: "Roboto-Regular",
    flexGrow: 1,
    fontSize: 16,
    height: 50,
  },
});

export default CreatePosts;
