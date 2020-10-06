import React from 'react';
/* import Numbers from './Numbers';
import Operations from './Operations'; */
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

function Buttons() {

    let rows = [];
    let btns = [['C', '+/-', '%'], [7, 8, 9], [4, 5, 6], [1, 2, 3], [0, '', '.']]
    for (let i = 0; i < 5; i ++) {
        let row = [];
        for (let j = 0; j < 3; j ++) {
            row.push(<TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>{btns[i][j]}</Text>
                     </TouchableOpacity>)
        }
        rows.push(<View style={styles.row}>{row}</View>)
    };

    let column = ['÷', 'x', '-', '+', '='];
    let btnOps = [];
    for (let i = 0; i < 5; i ++) {
        btnOps.push(<TouchableOpacity style={[styles.button, styles.color]}>
                        <Text style={styles.text}>{column[i]}</Text>
                    </TouchableOpacity>)
    };

    return (
        <View style={styles.buttons}>
            <View style={styles.numbers}>
                {rows}
            </View>

            <View style={styles.operations}>
                {btnOps}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
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
            width: 0,
            height: 4,
        },
        shadowColor: '#545454',
        shadowOpacity: 0.47,
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

export default Buttons;
