import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'tasks.db', location: 'default' });

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'
    );
  });
};

export const getTasks = (setTasks) => {
  db.transaction(tx => {
    tx.executeSql('SELECT * FROM tasks', [], (tx, results) => {
      let rows = results.rows.raw();
      setTasks(rows);
    });
  });
};

export const addTask = (taskName) => {
  db.transaction(tx => {
    tx.executeSql('INSERT INTO tasks (name) VALUES (?)', [taskName]);
  });
};

export const deleteTask = (taskId) => {
  db.transaction(tx => {
    tx.executeSql('DELETE FROM tasks WHERE id = ?', [taskId]);
  });
};
