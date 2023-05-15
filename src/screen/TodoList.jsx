import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  deleteTodo,
  addTodo,
  toggleTodo,
} from '../redux/features/todo/todoSlice';

const TodoList = () => {
  const [title, setTitle] = useState('Aruuu');
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todos);

  const deleteTodoItem = todoId => {
    dispatch(deleteTodo({todoId}));
    setTitle('');
  };

  const addTodoItem = () => {
    dispatch(addTodo({title}));
  };

  const toggleTodoItem = todoId => {
    dispatch(toggleTodo({todoId}));
  };

  return (
    <>
      <Text style={styles.header}>Todo List </Text>

      <View style={styles.inputWrp}>
        <TextInput
          style={styles.input}
          placeholder="enter Item"
          onChangeText={setTitle}
          value={title}
        />
        <TouchableOpacity onPress={() => addTodoItem()}>
          <Text style={styles.addsBtn}>+</Text>
        </TouchableOpacity>
      </View>

      {todoList.map(todo => (
        <View
          style={[
            styles.listWrap2,
            {
              backgroundColor: todo.isCompleted ? 'lightgreen' : 'pink',
            },
          ]}
          key={todo.id}>
          <TouchableOpacity
            onPress={() => toggleTodoItem(todo.id)}
            style={styles.listWrp}>
            <Text style={styles.title}>{todo.title}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => deleteTodoItem(todo.id)}>
            <Text style={styles.plusBtn}>X</Text>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  header: {
    fontWeight: '500',
    fontSize: 20,
    color: 'purple',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 14,
  },
  listWrap2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '88%',
    backgroundColor: 'pink',
    alignSelf: 'center',
    height: 42,
    marginBottom: 10,
  },
  listWrp: {
    flex: 0.8,
    marginTop: 8,
  },
  title: {
    fontSize: 15,
    color: 'black',
  },
  plusBtn: {
    fontWeight: '400',
    fontSize: 16,
    color: 'red',
    marginTop: 8,
  },
  addsBtn: {
    fontWeight: '400',
    fontSize: 24,
    marginTop: 2,
    borderWidth: 1,
    backgroundColor: 'pink',
    paddingHorizontal: 13,
  },
  inputWrp: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 12,
    flex: 0.9,
  },
});
