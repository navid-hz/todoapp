import React from 'react';
import { View, FlatList } from 'react-native';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete }) {
  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} onDelete={onDelete} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default TaskList;
