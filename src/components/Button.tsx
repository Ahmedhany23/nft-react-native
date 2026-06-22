import { Text, TouchableOpacity } from "react-native";

type Props = {
  pressHandler?: any;
  Icon?: any;
  stylesText?: any;
  title?: any;
  stylesButton?: any;
};

const Button = ({
  pressHandler,
  Icon,
  stylesText,
  title,
  stylesButton,
}: Props) => {
  /**
   * @desc we have tow choices
   *   (1) : the button contains text.
   *   (2) : is button contains icon.
   *   this function show content you need
   *
   * @render Text or icon
   */
  const RenderContentIconOrText = () => {
    if (!Icon) {
      return <Text style={stylesText}>{title && title}</Text>;
    } else {
      return Icon;
    }
  };
  return (
    <TouchableOpacity
      style={stylesButton}
      onPress={pressHandler && pressHandler}
    >
      <RenderContentIconOrText />
    </TouchableOpacity>
  );
};

export default Button;
