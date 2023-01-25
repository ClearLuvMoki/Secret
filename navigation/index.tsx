import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from "../screens/Home";
import Setting from "../screens/Setting";
import ReloadButton from "../components/ReloadButton";


const Tab = createBottomTabNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            >
                <Tab.Screen
                    name="订阅"
                    component={Home}
                    options={{
                        headerTitleAlign: "center",
                        tabBarLabelStyle: {
                            display: "none"
                        },
                        headerRightContainerStyle: {
                            marginRight: 10
                        },
                        headerRight: () => (
                            <ReloadButton
                                containerStyle={{marginRight: 10}}
                            />
                        ),
                        tabBarActiveTintColor: "#2f54eb",
                        tabBarInactiveTintColor: "#595959",
                        tabBarIcon: ({color, size}) => (
                            <Icon name="home" color={color} size={size}/>
                        ),
                        tabBarStyle: {
                            backgroundColor: "rgb(245,245,245)",
                            paddingTop: 10,
                            paddingBottom: 10,
                            height: 60
                        }
                    }}
                />
                {/*<Tab.Screen*/}
                {/*    name="个人主页"*/}
                {/*    component={Setting}*/}
                {/*    options={{*/}
                {/*        headerShown: false,*/}
                {/*        tabBarLabelStyle: {*/}
                {/*            display: "none"*/}
                {/*        },*/}
                {/*        tabBarActiveTintColor: "#2f54eb",*/}
                {/*        tabBarInactiveTintColor: "#595959",*/}
                {/*        tabBarIcon: ({color, size}) => (*/}
                {/*            <Icon name="user" color={color} size={size}/>*/}
                {/*        ),*/}
                {/*        tabBarStyle: {*/}
                {/*            backgroundColor: "rgb(245,245,245)",*/}
                {/*            paddingTop: 10,*/}
                {/*            paddingBottom: 10,*/}
                {/*            height: 60*/}
                {/*        }*/}
                {/*    }}*/}
                {/*/>*/}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;


