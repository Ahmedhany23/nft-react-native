import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { DATA } from "@/constants/data";
import { SIZES } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useRouter } from "expo-router";
import NFTAvatars from "./NFTAvatars";
import NFTImage from "./NFTImage";
import NFTInfo from "./NFTInfo";
import NFTTitle from "./NFTTitle";
import { SafeAreaView } from "react-native-safe-area-context";

const NFTCard = ({ NFTData }: { NFTData: (typeof DATA)[0] }) => {
  const router = useRouter();
  const pressHandler = () => {
    router.push(`/nft-details/${NFTData.id}`);
  };

  const styles = useStyles();

  return (
    <TouchableWithoutFeedback>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={pressHandler}>
          <NFTImage image={NFTData.image} imageStyles={styles.imageStyles} />
        </TouchableOpacity>
        <View style={styles.cardTop}>
          <NFTAvatars avatars={NFTData.avatars} />
        </View>
        <View style={styles.cardBottom}>
          <NFTTitle
            _name={NFTData.name}
            creator={NFTData.creator}
            date={NFTData.date}
          />
          <View style={{ marginTop: SIZES.small + 5 }}>
            <NFTInfo
              comments={NFTData.comments}
              views={NFTData.views}
              price={NFTData.price as any}
              love
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default NFTCard;

const useStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    container: {
      backgroundColor: theme.background,
      borderRadius: SIZES.medium,
      marginBottom: SIZES.xLarge,
      marginVertical: SIZES.small - 5,
      marginHorizontal: 14,
      padding: 12,
    },
    cardTop: {
      width: "100%",
      paddingHorizontal: SIZES.medium,
      marginTop: -30,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    cardBottom: { width: "100%", padding: SIZES.medium },
    imageStyles: {
      width: "100%",
      height: 300,
      borderRadius: 30,
    },
  });
};
