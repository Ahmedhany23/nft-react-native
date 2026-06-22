import { Fonts, SIZES } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, Text, View } from "react-native";

const NFTDate = ({ date }: { date: string }) => {
  const styles = useStyles();
  return (
    <View>
      <Text style={styles.textDate}>{date}</Text>
    </View>
  );
};
const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    textDate: {
      fontFamily: Fonts.mono,
      fontSize: SIZES.medium,
      color: theme.backgroundSelected,
    },
  });
};

export default NFTDate;
