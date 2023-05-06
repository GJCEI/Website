import { IconHeart } from '@tabler/icons-react';
import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    width:"80%",
    margin:"20px 10px"
  },

  section: {
    borderBottom: ` solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));


function BadgeCard(props) {
  const { classes, theme } = useStyles();

  const features = () =>  {
    //  <Badge
    //   color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
    //   key={badge.label}
    //   leftSection={badge.emoji}
    // >
    //   {badge.label}
    // </Badge>
  }
    


  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={props.image}  height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500} >
            {props.title}
          </Text>
        </Group>
        <Text fz="sm" mt="xs" style={{textAlign:"center"}}>
          {props.description}
        </Text>
      </Card.Section>


      
    </Card>
  );
}

export default BadgeCard;