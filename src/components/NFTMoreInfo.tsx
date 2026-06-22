import { SIZES } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { StyleSheet, Text, View } from "react-native";

const NFTMoreInfo = ({ address, tokenId, tokenSt, blockchain }: any) => {
  const styles = useStyles();
  return (
    <View>
      <View style={styles.details}>
        <Text style={styles.title}>Contract Address</Text>
        <Text style={styles.value}>{address}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Token ID</Text>
        <Text style={styles.value}>{tokenId}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Token Standerd</Text>
        <Text style={styles.value}>{tokenSt}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>Blockchain</Text>
        <Text style={styles.value}>{blockchain}</Text>
      </View>
    </View>
  );
};

export default NFTMoreInfo;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    details: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: theme.backgroundSelected,
      marginVertical: SIZES.small - 4,
    },
    title: {
      color: theme.text,
    },
    value: {
      color: theme.textSecondary,
      marginBottom: SIZES.small - 2,
    },
  });
};
