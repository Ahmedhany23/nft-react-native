import Button from "@/components/Button";
import { Fonts, SIZES } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";
import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import nft04 from "../../assets/images/nft04.jpg";
import nft06 from "../../assets/images/nft06.jpg";
import nft08 from "../../assets/images/nft08.jpg";

const index = () => {
  const router = useRouter();
  const styles = useStyles();

  const duration = 1000;

  const delay = duration + 300;

  const fadeImagesAnimation = useRef(new Animated.Value(0)).current;
  const moveImagesAnimation = useRef(
    new Animated.ValueXY({
      x: 100,
      y: 100,
    }),
  ).current;

  const fadeTextAnimation = useRef(new Animated.Value(0)).current;
  const moveButtonAnimation = useRef(new Animated.Value(1)).current;

  /**
   * @desc go to the home page
   */

  const pressHandler = () => {
    router.push("/home");
  };

  /** Animations handlers */

  const imagesAnimationHandler = () => {
    Animated.sequence([
      Animated.timing(fadeImagesAnimation, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
      Animated.spring(moveImagesAnimation, {
        toValue: {
          x: 0,
          y: 0,
        },
        useNativeDriver: true,
      }),
    ]).start();
  };

  const textAnimationHandler = () => {
    Animated.timing(fadeTextAnimation, {
      toValue: 1,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };

  const buttonAnimationHandler = () => {
    Animated.spring(moveButtonAnimation, {
      toValue: 0,
      useNativeDriver: true,
      friction: 4,
      delay,
    }).start();
  };

  useEffect(() => {
    imagesAnimationHandler();
    textAnimationHandler();
    buttonAnimationHandler();
  }, [imagesAnimationHandler, textAnimationHandler, buttonAnimationHandler]);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.imageContainer,
          {
            opacity: fadeImagesAnimation,
            transform: moveImagesAnimation.getTranslateTransform(),
          },
        ]}
      >
        <View style={styles.imageCard}>
          <Image style={styles.image} source={nft06} />
        </View>
        <View style={[styles.imageCard, { top: SIZES.medium + 17 }]}>
          <Image style={styles.image} source={nft08} />
        </View>
        <View style={styles.imageCard}>
          <Image style={styles.image} source={nft04} />
        </View>
      </Animated.View>

      <Animated.View
        style={[styles.textContainer, { opacity: fadeTextAnimation }]}
      >
        <Text style={styles.mainText}>Find, Collect and Sell Amazing NFTs</Text>
        <Text style={styles.subText}>
          Explore the top collection of NFTs and buy and sell your NFTs as well
        </Text>
      </Animated.View>
      <Animated.View
        style={[
          styles.buttonContainer,
          {
            transform: [
              {
                translateY: moveButtonAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ],
          },
        ]}
      >
        <Button
          title="Get Started"
          pressHandler={pressHandler}
          stylesButton={styles.button}
          stylesText={styles.textButton}
        />
      </Animated.View>
    </SafeAreaView>
  );
};

export default index;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      paddingHorizontal: SIZES.small + 10,
      alignItems: "center",
      justifyContent: "center",
      flex: 1,
      backgroundColor: theme.background,
    },
    imageContainer: {
      top: -SIZES.medium,
      flexDirection: "row",
      gap: SIZES.small,
    },
    imageCard: {
      borderRadius: SIZES.medium,
      padding: SIZES.small,
      backgroundColor: theme.backgroundElement,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: SIZES.medium,
    },
    textContainer: {
      margin: SIZES.small,
      padding: SIZES.small,
      marginVertical: SIZES.xLarge + 6,
    },
    mainText: {
      fontFamily: Fonts.mono,
      fontSize: SIZES.xLarge + 5,
      textAlign: "center",
      color: theme.text,
    },
    subText: {
      fontFamily: Fonts.mono,
      textAlign: "center",
      marginTop: SIZES.large,
      color: theme.textSecondary,
    },
    buttonContainer: {
      position: "absolute",
      bottom: SIZES.xLarge + 10,
      marginVertical: SIZES.xLarge,
    },
    button: {
      backgroundColor: theme.backgroundElement,
      padding: SIZES.small + 4,
      width: 240,
      alignItems: "center",
      borderRadius: SIZES.medium,
    },
    textButton: {
      color: theme.text,
      fontFamily: Fonts.mono,
      fontSize: SIZES.large,
    },
  });
};
