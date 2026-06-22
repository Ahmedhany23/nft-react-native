import { Fonts, SIZES } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import avatar from "../../assets/images/avatars/avatar03.jpg";

const HomeHeader = ({
  searchHandler,
}: {
  searchHandler: (value: string) => void;
}) => {
  const { styles, theme } = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            source={avatar}
            resizeMode="contain"
            style={{ width: 44, height: 44, borderRadius: 30 }}
          />
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 3 }}>
            <Text style={styles.userText}>MostafaMohamed</Text>
            <MaterialCommunityIcons
              name="check-decagram"
              size={24}
              color="white"
            />
          </View>
          <View>
            <Text style={{ color: theme.text }}>Creator</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: SIZES.small, paddingHorizontal: 10 }}>
        <View style={styles.searchContainer}>
          <MaterialIcons name="search" size={24} color={theme.text} />
          <TextInput
            placeholder="Search by NFT name"
            placeholderTextColor={theme.text}
            style={{ flex: 1, color: theme.text }}
            onChangeText={searchHandler}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const useStyles = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      padding: SIZES.small,
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      gap: 16,
      paddingHorizontal: 10,
    },
    userText: {
      color: theme.text,
      fontFamily: Fonts.mono,
      fontSize: SIZES.xLarge,
    },
    searchContainer: {
      width: "100%",
      borderRadius: SIZES.small,
      backgroundColor: theme.backgroundElement,
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 8,
      paddingHorizontal: 10,
      marginVertical: 30,
    },
  });

  return { styles, theme };
};
