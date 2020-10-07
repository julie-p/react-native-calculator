import React, { useState } from 'react';
import { 
    Text,  
    StyleSheet 
} from 'react-native';
import { 
    Content,
    Icon, 
    Container, 
    Header,
    Right, 
    Button,
    List, 
    ListItem, 
    Body, 
    Switch
} from 'native-base';
import { 
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import Animated from 'react-native-reanimated';
import { useTheme } from '@react-navigation/native';
import { EventRegister } from 'react-native-event-listeners';

function DrawerContent( {progress, ...props} ) {

    const { colors } = useTheme();
    const [ darkMode, setDarkMode ] = useState(false);

    const translateX = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0]
    });

    return ( 
        <Container style={[styles.container, {backgroundColor:colors.backgroundColor}]}> 
            <Animated.View style={{transform: [{translateX}]}}>
                <Header style={[styles.header, {backgroundColor:colors.backgroundColor}]}>
                    <Right>
                        <Button transparent onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}>
                            <Icon ios='ios-menu' android="md-menu" style={[styles.icon, {color:colors.iconColor}]} />
                        </Button>
                    </Right>
                </Header>
            </Animated.View>

            <Content style={styles.content}>
                <DrawerContentScrollView {...props}>
                    <Animated.View style={{transform: [{translateX}]}}>
                        <DrawerItemList {...props} activeTintColor="#8998e3"/>
                    </Animated.View>
                </DrawerContentScrollView>
            </Content>

            <Animated.View style={{transform: [{translateX}]}}>
                <List>
                    <ListItem>
                        <Body>
                            <Text style={[styles.text, {color:colors.iconColor}]}>Dark Mode</Text>
                        </Body>
                        <Right>
                            <Switch 
                                value={darkMode} 
                                onValueChange={(val) => {setDarkMode(val)
                                EventRegister.emit('changeThemeEvent', val)}
                                }
                            />
                        </Right>
                    </ListItem>
                </List>
            </Animated.View>  
        </Container> 
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fafafa',
    },
    header: {
        borderBottomWidth: 0,
    },
    icon: {
        color: '#8998e3'
    },
    content: {
        flex: 1,
    },
    text: {
        color: '#8998e3'
    }
});

export default DrawerContent;
