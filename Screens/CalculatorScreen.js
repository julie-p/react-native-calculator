import React, { useState } from 'react';
import Menu from '../Components/Menu';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function CalculatorScreen() {

    const [ currentValue, setCurrentValue ] = useState("");
    const [ displayResult, setDisplayResult ] = useState("");
    const [ operator, setOperator ] = useState(['√', '/', '*', '-', '+']);
    const [ buttons, setButtons ] = useState([['C', '+/-', '%'], [7, 8, 9], [4, 5, 6], [1, 2, 3], [0, '.', '=']]);

    function calculateResult() {
        console.log(currentValue, eval(currentValue))
        setCurrentValue(eval(currentValue));
    };

    function clear() {
        setCurrentValue("");
        setDisplayResult("");
    };

    function sign() {
        setCurrentValue(currentValue.charAt(0) === '-' ? currentValue.slice(1) : `-${currentValue}`);
    };

    function percent() {
        setCurrentValue(`${parseFloat(currentValue) / 100}`);
    };

    function squareRoot() {
        setCurrentValue(`${Math.sqrt(currentValue).toFixed(8)}`);
    };

    function buttonPressed(input) {
        switch (input) {
            case '=':
                return calculateResult();
            case 'C':
                return clear();
            case '+/-':
                return sign();
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
                const lastChar = currentValue.split('').pop();
                if (operator.indexOf(lastChar) > 0) return;
                if (currentValue === "") return;
                setCurrentValue(currentValue + op);   
        }
    };

    let rows = [];
    for (let i = 0; i < buttons.length; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            row.push(<TouchableOpacity key={buttons[i][j]} onPress={() => buttonPressed(buttons[i][j])} style={styles.button}>
                        <Text style={styles.text}>{buttons[i][j]}</Text>
                     </TouchableOpacity>)
        }
        rows.push(<View key={i} style={styles.row}>{row}</View>);
    };
    
    let ops = [];
    for (let i = 0; i < operator.length; i++) {
        ops.push(<TouchableOpacity key={operator[i]} onPress={() => operation(operator[i])} style={[styles.button, styles.color]}>
                    <Text style={styles.text}>{operator[i]}</Text>
                 </TouchableOpacity>)
    };

    return (
        <View style={styles.container}>

            <Menu />
            
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
        marginBottom: 10
    },
    calculation: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20
    },
    calculationText: {
        fontSize: 30,
        color: '#2c3a6a'
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
        backgroundColor: '#8998e3',
        shadowOffset: {
            width: 5,
            height: 4,
        },
        shadowColor: '#545454',
        shadowOpacity: 0.54,
        shadowRadius: 5.65,
        elevation: 6,
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    color: {
        backgroundColor: '#ec873c'
    },
    operations: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'stretch',
        paddingRight: 40
    },
    text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default CalculatorScreen;
