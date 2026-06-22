import { StyleSheet, Text, View } from "react-native";

import { Fonts, SIZES } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "./Button";
const NFTInfo = ({
  comments,
  views,
  price,
  love,
}: {
  comments: number;
  views: string;
  price: number;
  love?: boolean;
}) => {
  const { styles, theme } = useStyles();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Feather name="eye" size={20} color={theme.text} />
        <Text style={styles.text}>{views}</Text>
      </View>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons
          name="comment-text-outline"
          size={17}
          color={theme.text}
        />
        <Text style={styles.text}>{comments}</Text>
      </View>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons name="ethereum" size={20} color="white" />
        <Text style={styles.text}>{price}</Text>
      </View>
      {love && (
        <View>
          <Button
            Icon={
              <AntDesign name="heart" size={18} color={theme.textSecondary} />
            }
            stylesButton={styles.buttonHeart}
          />
        </View>
      )}
    </View>
  );
};

export default NFTInfo;

const useStyles = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    wrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: theme.background,
      width: 90,
      borderRadius: SIZES.xLarge,
      paddingVertical: 3,
      gap: 4,
    },
    text: {
      fontFamily: Fonts.mono,
      fontSize: SIZES.medium,
      color: theme.text,
    },
    buttonHeart: {
      backgroundColor: theme.background,
      padding: 5,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.backgroundSelected,
    },
  });

  return {
    styles,
    theme,
  };
};
