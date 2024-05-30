// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import TaskList from '../components/TaskList';
import { createTable, getTasks, addTask, deleteTask } from '../services/Database';
import styles from '../styles/global';

function HomeScreen({ navigation }) {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    createTable();
    getTasks(setTasks);
  }, []);

  const handleAddTask = () => {
    addTask(taskName);
    setTaskName('');
    getTasks(setTasks);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
    getTasks(setTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <TextInput
        value={taskName}
        onChangeText={setTaskName}
        placeholder="Enter task name"
      />
      <Button title="Add Task" onPress={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;
