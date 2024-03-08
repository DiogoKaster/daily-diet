import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonStyleTypeProps, Container, Icon } from "./styles";
import { Title } from "./styles";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  type: ButtonStyleTypeProps;
}

export function Button({ title, icon, type, ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      {icon && <Icon name={icon} type={type} />}
      <Title type={type}>{title}</Title>
    </Container>
  );
}
