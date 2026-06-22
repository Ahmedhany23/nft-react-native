import { useTheme } from "@/hooks/use-theme";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Image, StatusBar, StyleSheet, View } from "react-native";
import Button from "./Button";

const NFTImage = ({
  image,
  imageStyles,
  love,
  arrow,
  pressHandler,
}: {
  image: any;
  imageStyles: any;
  love?: boolean;
  arrow?: boolean;
  pressHandler?: any;
}) => {
  const { styles, theme } = useStyles();

  return (
    <View style={styles.container}>
      <Image source={image} style={imageStyles} resizeMode="cover" />
      {love && (
        <Button
          stylesButton={styles.buttonHeart}
          Icon={<AntDesign name="heart" size={20} color={theme.text} />}
        />
      )}
      {arrow && (
        <Button
          stylesButton={styles.buttonArrow}
          Icon={
            <Feather name="arrow-left" size={20} color={theme.textSecondary} />
          }
          pressHandler={pressHandler && pressHandler}
        />
      )}
    </View>
  );
};

const useStyles = () => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "relative",
    },

    buttonHeart: {
      position: "absolute",
      top: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 10,
      right: 10,
      backgroundColor: theme.background,
      padding: 10,
      borderRadius: 40,
    },
    buttonArrow: {
      position: "absolute",
      top: StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 10,
      left: 10,
      backgroundColor: theme.background,
      padding: 10,
      borderRadius: 40,
    },
  });

  return {
    styles,
    theme,
  };
};

export default NFTImage;
