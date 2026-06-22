import HomeHeader from "@/components/home-header";
import NFTCard from "@/components/NFTCard";
import { DATA } from "@/constants/data";
import { Fonts, SIZES } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { FlashList } from "@shopify/flash-list";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const [nftsData, setNftsData] = useState(DATA);
  const moveSearchAnimation = useRef(new Animated.Value(0)).current;
  const styles = useStyles();

  /**
   * @desc search for nfts data about name
   *  @param value : input value
   */

  const searchHandler = (value: string) => {
    if (value) {
      const filteredData = DATA.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      );

      setNftsData(filteredData);
    } else {
      setNftsData(DATA);
    }
  };

  const moveSearchAnimationHandler = () => {
    Animated.spring(moveSearchAnimation, {
      toValue: 1,
      friction: 4,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    moveSearchAnimationHandler();
  }, [moveSearchAnimationHandler]);

  const NotFoundNFT = () => {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Opps... ! </Text>
        <Text style={styles.notFoundText}> Not found the NFT</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              top: -100,
              transform: [
                {
                  translateY: moveSearchAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100],
                  }),
                },
              ],
            }}
          >
            <HomeHeader searchHandler={searchHandler} />
          </Animated.View>

          {!nftsData.length ? (
            <NotFoundNFT />
          ) : (
            <FlashList
              data={nftsData}
              renderItem={({ item }) => <NFTCard NFTData={item} />}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Home;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 50 : 50,
    },
    notFoundContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: SIZES.xLarge,
    },
    notFoundText: {
      color: theme.text,
      fontFamily: Fonts.mono,
      fontSize: SIZES.xLarge,
    },
  });
};
