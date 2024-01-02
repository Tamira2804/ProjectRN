import { StyleSheet, View, Text } from "react-native";
import { useRoute, useState } from "@react-navigation/native";
import Post from "../components/Post";
import COLORS from "../constans/Colors";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>User info</Text>
      <Post />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
});

export default PostsScreen;

// const route = useRoute();
// const { postsData } = route.params || {};

// const [postDataState, setPostDataState] = useState(postsData || []);

// const renderContent = () => {
//   if (postDataState.length === 0) {
//     return <Text>Ще немає доданих постів</Text>;
//   } else {
//     return (
//       <View>
//         {postDataState.map((post) => (
//           <Post key={post.id} {...post} />
//         ))}
//       </View>
//     );
//   }
// };
