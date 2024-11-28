import React,{useEffect, useState, useCallback} from "react";
import { View, FlatList, Button, StyleSheet, RefreshControl } from "react-native-web";
import { collection, getDocs, updateDocs, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import TodoItem from "../componen/TodoItem";
import { StyleSheet } from "react-native";

const ViewTodoScreen =({navigation}) => {
    const[todos,setTodso] = useState([]);
    const [refreshing, setRefreshing] = useState([]);

    const fectTodo = useCallback(async() => {
        try{
            const querySnapshot = await getDocs(collection(db, 'todos'));
            consttodosData =querySnapshot.docs.map(docSnap => ({
                id: docSnap.id,
                ...docSnap.data()
            }));
            setTodso(todosData);
        } catch (error){
            console.error('error fetching data: ', error);
        }
    }, []);

    useEffect(() => {
        fectTodo();
    }, [fectTodo]);

    const HandleUpdateStatus = useCallback(async(id,currentStatus) =>{
        const newStatus = currentStatus === 'Doing' ? 'Done' : 'Doing';
        try{
            const todoRef = doc(db, 'todos', id);
            await updateDoc(todoRef, {status:newStatus});
            setTodso(prevTodos =>
                prevTodos.map(todo =>
                    todo.id === id ? {...todo, status:newStatus} : todo
                )
            );
        } catch (error){
            console.error("error update data :", error);
        }
    }, []);

    const onRefresh = useCallback(async() => {
        setRefreshing(true);
        await fectTodo();
        setRefreshing(false);
    }, [fectTodo]);

    return (
        <View style={style.container}>
            <Button
                title="Tambah To-Do Baru"
                onPress={() => navigation.navigate('AddTodo')}
            />
            <FlatList
                data={todos}
                keyExtractor={({item}) => item.id}
                renderItem={({item}) => (
                    <TodoItem
                        todo={item}
                        onUpdateStatus= {() => HandleUpdateStatus(item.id, item.status)}
                    />
                )}
                refreshControl={
                    <refreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
                ListEmptyComponent={<View style={style.empty}><Button title="Reload" onPress={fectTodo}></View>}
                />
        </View>
    );
};

const style = StyleSheet.create({
    container: {flex:1, padding: 20, backgroundColor:'#fff'},
    empty: {flex:1, padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: 50},
})
export default ViewTodoScreen