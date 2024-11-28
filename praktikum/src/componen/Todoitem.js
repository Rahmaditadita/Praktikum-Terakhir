import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const TodoItem = React.memo(({ todo, onUpdateStatus }) => {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{todo.time}</Text>
            <Text style={styles.title}>{todo.description}</Text>
            <Text style={styles.title}>{todo.status}</Text>
            <Button
                title={`Update Status to ${todo.status === 'Doing' ? 'Done' : 'Doing'}`}
                onPress={() => onUpdateStatus(todo)}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    item: {
        padding: 15,
        marginVertical: 9,
        borderRadius: 9,
        backgroundColor: "#f2f2f2",
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.1,
        elevation: 3,
        backgroundColor: "#f9f9f9",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    label:{
        fontWeight: 'bold'
    }
});

export default TodoItem;
