import { useTheme } from "@/hooks/use-theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

import { Fonts, SIZES } from "@/constants/theme";
import NFTDate from "./NFTDate";

const NFTTitle = ({
  _name,
  creator,
  date,
}: {
  _name: string;
  creator: string;
  date: string;
}) => {
  const { styles } = useStyles();
  return (
    <View>
      <View>
        <Text style={styles.textName}>{_name}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: SIZES.small,
          }}
        >
          <Text style={styles.textCreator}>{creator}</Text>
          <MaterialCommunityIcons
            name="check-decagram"
            size={20}
            color="white"
          />
        </View>
        <NFTDate date={date} />
      </View>
    </View>
  );
};

export default NFTTitle;

const useStyles = () => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    textName: {
      color: theme.text,
      fontFamily: Fonts.mono,
      fontSize: 20,
    },
    textCreator: {
      color: theme.text,
      fontFamily: Fonts.mono,
      fontSize: 16,
    },
  });

  return {
    styles,
    theme,
  };
};
