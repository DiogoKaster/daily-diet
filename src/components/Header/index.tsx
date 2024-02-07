import { Container, Logo, ProfileImage } from "./styles";

import logoImg from "@assets/logo.png";
import profileImg from "@assets/Ellipse.png";

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
      <ProfileImage source={profileImg} />
    </Container>
  );
}
