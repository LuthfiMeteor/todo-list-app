import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { firebase } from "../config/firebase";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

interface TodoItem {
  id: string;
  heading: string;
}

const Home = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const todoRef = firebase.firestore().collection("todos");
  const [addData, setAddData] = useState("");
  const navigation = useNavigation<any>();

  // fetch or read the data from firestore
  useEffect(() => {
    const unsubscribe = todoRef
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        const todos: TodoItem[] = [];
        querySnapshot.forEach((doc) => {
          const { heading } = doc.data();
          todos.push({
            id: doc.id,
            heading,
          });
        });
        setTodos(todos);
        setLoading(false);
      }, (error) => {
        console.error("Firestore error:", error);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  // delete a todo from firestore db
  const deleteTodo = (todo: TodoItem) => {
    todoRef
      .doc(todo.id)
      .delete()
      .then(() => {
        // show a successful alert
        alert("Deleted successfully");
      })
      .catch((error) => {
        // show an error alert
        alert(error);
      });
  };

  // add a todo
  const addTodo = () => {
    // check if we have a todo.
    if (addData && addData.length > 0) {
      // get the timestamp
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        heading: addData,
        createdAt: timestamp,
      };
      todoRef
        .add(data)
        .then(() => {
          // release todo state
          setAddData("");
          // release keyboard
          Keyboard.dismiss();
        })
        .catch((error) => {
          // show an alert in case of error
          alert(error);
        });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.textHeadingContainer}>
        <Text style={styles.textHeading}>Todos App</Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new todo"
          placeholderTextColor="#aaaaaa"
          onChangeText={(heading) => setAddData(heading)}
          value={addData}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={addTodo}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#788eec" />
          <Text style={styles.loaderText}>Memuat Todos...</Text>
        </View>
      ) : (
        <FlatList
          style={{}}
          data={todos}
          numColumns={1}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Belum ada todo. Tambahkan sekarang!</Text>
            </View>
          }
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={styles.container}
                onPress={() => navigation.navigate("Detail", { item })}
              >
                <FontAwesome
                  name="trash-o"
                  color="red"
                  onPress={() => deleteTodo(item)}
                  style={styles.todoIcon}
                />
                <View style={styles.innerContainer}>
                  <Text style={styles.itemHeading}>{item.heading}</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e5e5e5",
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textHeadingContainer: {
    paddingVertical: 20,
    alignContent: "center",
    alignItems: "center",
  },
  textHeading: {
    fontWeight: "bold",
    fontSize: 24,
  },
  innerContainer: {
    alignItems: "center",
    flexDirection: "column",
    marginLeft: 45,
  },
  itemHeading: {
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 22,
  },
  formContainer: {
    flexDirection: "row",
    height: 80,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    paddingLeft: 16,
    flex: 1,
    marginRight: 5,
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: "#788eec",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },

  todoIcon: {
    marginTop: 5,
    fontSize: 20,
    marginLeft: 14,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  loaderText: {
    marginTop: 12,
    fontSize: 16,
    color: "#666",
  },
  emptyContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
  },
});

export default Home;
