import React, { useState } from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity
} from 'react-native';
import { 
    Icon,  
    Header,
    Left,
    Button
} from 'native-base';
import { DrawerActions } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';

function HomeScreen( {navigation} ) {

    const { colors } = useTheme();
    const [ currentValue, setCurrentValue ] = useState("");
    const [ displayResult, setDisplayResult ] = useState("");
    const [ operator, setOperator ] = useState(['√', '/', '*', '-', '+']);
    const [ buttons, setButtons ] = useState([['AC', 'C', '%'], [7, 8, 9], [4, 5, 6], [1, 2, 3], [0, '.', '=']]);

    //Bouton clear all
    function clear() {
        setCurrentValue("");
        setDisplayResult("");
    };

    //Bouton delete
    function del() {
        let text = currentValue.split('');
        text.pop();
        setCurrentValue(text.join(''));
    };

    //Pourcentage
    function percent() {
        setCurrentValue(`${parseFloat(currentValue) / 100}`);
    };

    //Racine carrée
    function squareRoot() {
        setCurrentValue(`${Math.sqrt(currentValue).toFixed(8)}`);
    };

    function buttonPressed(input) {
        switch (input) {
            case '=':
                return calculateResult();
            case 'AC':
                return clear();
            case 'C':
                return del();
            case '%':
                return percent();
        }
        setCurrentValue(currentValue + input);
    };

    function operation(op) {
        switch (op) {
            case '√':
                return squareRoot();
            case '+':
            case '-':
            case '*':
            case '/':
                if (currentValue === "") return;
                setCurrentValue(currentValue + op);  
                break;
        }
    };

    function calculateResult() {
        setCurrentValue(eval(currentValue));
    };

    let rows = [];
    for (let i = 0; i < buttons.length; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(<TouchableOpacity key={buttons[i][j]} onPress={() => buttonPressed(buttons[i][j])} style={[styles.button, {backgroundColor:colors.buttonColor}]}>
                        <Text style={[styles.text, {color:colors.text}]}>{buttons[i][j]}</Text>
                     </TouchableOpacity>)
        }
        rows.push(<View key={i} style={styles.row}>{row}</View>);
    };
    
    let ops = [];
    for (let i = 0; i < operator.length; i++) {
        ops.push(<TouchableOpacity key={operator[i]} onPress={() => operation(operator[i])} style={[styles.button, {backgroundColor:colors.altButton}]}>
                    <Text style={[styles.text, {color:colors.altText}]}>{operator[i]}</Text>
                 </TouchableOpacity>)
    };

    return (
        <View style={[styles.container, {backgroundColor:colors.backgroundColor}]}>
            <Header style={[styles.header, {backgroundColor:colors.backgroundColor}]}>
                <Left>
                    <Button transparent onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Icon ios='ios-menu' android="md-menu" style={[styles.icon, {color:colors.iconColor}]} />
                    </Button>
                </Left>
            </Header>

            <View style={styles.calculation}>
                <Text style={styles.calculationText}>{ currentValue || 0 }</Text>
            </View>

            <View style={styles.buttons}>
                <View style={styles.numbers}>
                    {rows}
                </View>

                <View style={styles.operations}>
                    {ops}
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        paddingVertical: 30,
        paddingHorizontal: 15
    },
    header: {
        backgroundColor: '#fafafa',
        borderBottomWidth: 0,
        marginLeft: 10
    },
    icon: {
        color: '#8998e3',
        fontSize: 30
    },
    calculation: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20,
        marginTop: 40
    },
    calculationText: {
        fontSize: 30,
        fontWeight: '600',
        color: '#d5ddfd'
    },
    buttons: {
        flex: 7,
        flexDirection: 'row',
    },
    numbers: {
        flexGrow: 3
    }, 
    row: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginRight: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        borderRadius: 100,
        backgroundColor: '#fafafa',
        shadowOffset: {
            width: 2,
            height: 4,
        },
        shadowColor: '#555',
        shadowOpacity: 0.37,
        shadowRadius: 5,
        elevation: 6,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    operations: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        paddingRight: 40
    },
    text: {
        color: '#8998e3',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default HomeScreen;
