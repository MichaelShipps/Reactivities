import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../../app/layout/LoadingComponent";
import { useStore } from "../../../../app/stores/store";

export default function ActivityDetail() {
  const { activityStore } = useStore();
  const { selectedActivity: activity } = activityStore;

  if (!activity) return <LoadingComponent content={""} />;

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            basic
            color="blue"
            content="Edit"
            onClick={() => activityStore.openForm(activity.id)}
          />
          <Button
            basic
            color="grey"
            content="Cancel"
            onClick={activityStore.cancelSelectedActivity}
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}
