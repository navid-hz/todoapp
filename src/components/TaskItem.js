import React from 'react';
import { View, Text, Button } from 'react-native';

function TaskItem({ task, onDelete }) {
  return (
    <View>
      <Text>{task.name}</Text>
      <Button title="Delete" onPress={() => onDelete(task.id)} />
    </View>
  );
}

export default TaskItem;
