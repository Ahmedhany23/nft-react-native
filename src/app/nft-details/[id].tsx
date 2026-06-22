import { Animated, SafeAreaView, StyleSheet, Text, View } from "react-native";

import { DATA } from "@/constants/data";
import { Fonts, SIZES } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import Button from "../../components/Button";
import NFTAvatars from "../../components/NFTAvatars";
import NFTImage from "../../components/NFTImage";
import NFTInfo from "../../components/NFTInfo";
import NFTMoreinfo from "../../components/NFTMoreInfo";
import NFTTitle from "../../components/NFTTitle";

const NFTDetails = () => {
  const moveAnimation = useRef(new Animated.Value(0)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;

  const styles = useStyles();
  const router = useRouter();

  const { id } = useLocalSearchParams<{ id: string }>();

  const NFTData = DATA.find((item) => item.id === id) as typeof DATA[0];

  /**
   * @desc go back to home
   */
  const pressHandler = () => {
    router.back();
  };

  const moveAnimationHandler = () => {
    Animated.spring(moveAnimation, {
      toValue: 1,
      friction: 6,
      tension: 80,
      useNativeDriver: true,
    }).start();
  };
  const fadeAnimationHandler = () => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration: 1000,
      delay: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    moveAnimationHandler();
    fadeAnimationHandler();
  }, [moveAnimationHandler, fadeAnimationHandler]);


  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          flex: 1,
          transform: [
            {
              translateY: moveAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [200, 0],
              }),
            },
          ],
        }}
      >
        <NFTImage
          image={NFTData.image}
          imageStyles={styles.imageStyles}
          love
          arrow
          pressHandler={pressHandler}
        />
        <View style={{ paddingHorizontal: SIZES.xLarge }}>
          <View style={{ marginTop: -SIZES.xLarge }}>
            <NFTAvatars avatars={NFTData.avatars} />
          </View>
          <View style={{ marginVertical: SIZES.medium }}>
            <NFTTitle
              _name={NFTData.name}
              creator={NFTData.creator}
              date={NFTData.date}
            />
          </View>
          <View style={{ marginVertical: SIZES.medium }}>
            <NFTInfo
              price={NFTData.price}
              views={NFTData.views}
              comments={NFTData.comments}
            />
          </View>
          <View style={{ marginVertical: SIZES.medium }}>
            <NFTMoreinfo
              address={NFTData.address}
              tokenId={NFTData.tokenId}
              tokenSt={NFTData.tokenSt}
              blockchain={NFTData.blockchain}
            />
          </View>
        </View>

        <Animated.View
          style={[
            styles.buttonContainer,
            {
              opacity: fadeAnimation,
            },
          ]}
        >
          <View style={styles.wrapper}>
            <View>
              <Text style={styles.text}>Tob bid</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 2,
                  padding: SIZES.small - 4,
                }}
              >
                <FontAwesome name="dollar" size={15} color="white" />
                <Text style={styles.text}>{NFTData.topBid}</Text>
              </View>
            </View>
            <Button
              title="Place a bid"
              stylesButton={styles.button}
              stylesText={styles.textButton}
            />
          </View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default NFTDetails;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.background },

    imageStyles: {
      width: "100%",
      height: 400,
      borderRadius: 20,
    },
    text: {
      fontSize: SIZES.medium,
      fontFamily: Fonts.mono,
      color: theme.text,
    },
    buttonContainer: {
      width: "100%",
      position: "absolute",
      bottom: SIZES.small,
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1,
    },
    wrapper: {
      backgroundColor: theme.background,
      width: 300,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 20,
      borderRadius: 20,
    },
    button: {
      backgroundColor: theme.backgroundElement,
      padding: 16,
      width: 150,
      borderRadius: 20,
    },
    textButton: {
      color: theme.text,
      textAlign: "center",
      fontFamily: Fonts.mono,
      fontSize: 16,
    },
  });
};
