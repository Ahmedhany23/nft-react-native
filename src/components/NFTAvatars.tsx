import { Image, StyleSheet, View } from "react-native";

const NFTAvatars = ({ avatars }: { avatars: { id: string; image: any }[] }) => {
  return (
    <View style={styles.container}>
      {avatars.map((avatar) => {
        return (
          <Image
            key={avatar.id}
            source={avatar.image}
            resizeMode="contain"
            style={styles.avatar}
          />
        );
      })}
    </View>
  );
};

export default NFTAvatars;

const styles = StyleSheet.create({
  container: { flexDirection: "row", paddingHorizontal: 5 },
  avatar: {
    width: 40,
    height: 40,
    marginLeft: -5,
    borderRadius: 40,
  },
});
