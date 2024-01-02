import * as MediaLibrary from "expo-media-library";

const makePhoto = async (cameraRef) => {
  try {
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync();
      await MediaLibrary.createAssetAsync(data.uri);
      return data.uri;
    }
  } catch (error) {
    console.log(error);
  }
};

export default makePhoto;
