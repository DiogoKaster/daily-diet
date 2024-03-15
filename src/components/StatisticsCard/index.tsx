import { Container, StatisticsCardStyleProp, Subtitle, Title } from "./styles";

interface StatisticsCardProps {
  title: number | string;
  subtitle: string;
  widthChange?: boolean;
  styleType: StatisticsCardStyleProp;
}

export function StatisticsCard({
  title,
  subtitle,
  styleType,
  widthChange = false,
}: StatisticsCardProps) {
  return (
    <Container widthChange={widthChange} styleType={styleType}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
