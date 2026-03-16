import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [display, setDisplay] =useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operator, setOperador] = useState(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const handleNumberPress = (num) => {
    if (waitingForNewValue) {
      setDisplay(String(num));
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const handleClear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperador(null);
    setWaitingForNewValue(false);
  }

  const handleOperatorPress = (op) => {
   const inputValue = parseFloat(display);

   if (previousValue == null) {
    setPreviousValue(inputValue);
   } else if (operator){
    const result = calculate(previousValue, inputValue, operator);
    setDisplay(String(result));
    setPreviousValue(result);
   }

   setWaitingForNewValue(true);
   setOperador(op);
  } 

   const calculate = (firstValue, secondValue, operator) => {
    switch (operator) {
      case '+': return firstValue + secondValue;
      case '-': return firstValue - secondValue;
      case 'x': return firstValue * secondValue;
      case '/': return firstValue / secondValue;
      default: return secondValue;
    }
   }

   const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue != null && operator){
      const result = calculate(previousValue, inputValue, operator);
      setDisplay(String(result));
      setPreviousValue(null);
      setOperador(null);
      setWaitingForNewValue(true);
    }
   }

   const handlePorcentage = () => {
    setDisplay(String(parseFloat(display) / 100));
   }

   const handleDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    }else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
   }

   const handleToggleSign = () => {
    setDisplay(String(parseFloat(display) * -1));
   }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

     {/* Display da Calculadora */}
      <View style={styles.displayContainer}>
        <Text style={styles.displayText} numberOfLines={1}>
          {display}
        </Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.functionButton} on onPress={handleClear}>
          <Text style={styles.functionText}>C</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.functionButton} onPress={handleToggleSign}>
          <Text style={styles.functionText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.functionButton} onPress={handlePorcentage}>
          <Text style={styles.functionText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton} onPress={() => handleOperatorPress('/')}>
          <Text style={styles.operatorText}>/</Text>
        </TouchableOpacity>
      </View>

       <View style={styles.row}>
         <TouchableOpacity style={[styles.buttonNumber]} onPress={() => handleNumberPress(7)}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPress(8)}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPress(9)}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPress('x')}>
          <Text style={styles.operatorText}>x</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.row}>
         <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPress(4)}>
          <Text style={styles.buttonText}>4</Text >
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber}onPress={() => handleNumberPress(5)}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPress(6)}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber} onPress={() => handleOperatorPress('-')}>
          <Text style={styles.operatorText}>-</Text>
        </TouchableOpacity>
        </View>

         <View style={styles.row}>
         <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPress(1)}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPress(2)}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPress(3)}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber} onPress={() => handleOperatorPress('+')}>
          <Text style={styles.operatorText}>+</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.row}>
         <TouchableOpacity style={styles.buttonNumber} onPress={() => handleNumberPress(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber} >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.operadorText}>=</Text>
        </TouchableOpacity>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  displayContainer: {
    flex: 2.5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  displayText: {
    color: '#FFFFFF',
    fontSize: 72,
    fontWeight: '300'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingHorizontal: 10,
  },
  functionButton:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 5,
  borderRadius: 50,
  height: '75%',
  backgroundColor: '#A5A5A5'
  },
  functionText: {
  color:'#000000',
  fontSize: 28,
  },
  operatorButton: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 5,
  borderRadius: 50,
  height: '75%',
  backgroundColor: '#FF9500'
  },

  functionText: {
  color:'#FFFFFF',
  fontSize: 28,
  },

buttonNumber: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginHorizontal: 5,
  borderRadius: 50,
  height: '75%',
  backgroundColor: '#333333'
},

buttonText: {
  color:'#FFFFFF',
  fontSize: 32,
  },

  doubleWidthButton: {
    flex: 2,
    alignItems: 'flex-start',
    paddingLeft: 32,
  },
});
