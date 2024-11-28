import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddTodoScreen from'./src/screev/AddTodoScreen';
import ViewTodoScreen from './src/screen/ViewTodoScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const stack = createStackNavigator();
const App = () => {
    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName = "ViewTodos">
                    <Stack.Screen>
                        name = "AddTodo"
                        componen = {AddTodoScreen}
                        option ={{tyitle: 'Tambah To-do'}}
                    </Stack.Screen>
                    <Stack.Screen>
                        name = "ViewTodos"
                        componen = {ViewTodoScreen}
                        option ={{title: 'Daftar To-Do'}}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default App;