import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.displayContainer}>
        <Text style={styles.displayText} numberOfLines={1}>
          1634,00
        </Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.functionButton}>
          <Text style={styles.functionButton}>C</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.functionButton}>
          <Text style={styles.functionButton}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.functionButton}>
          <Text style={styles.functionButton}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operatorButton}>
          <Text style={styles.operatorButtonText}>/</Text>
        </TouchableOpacity>
      </View>
       <View style={styles.row}>
         <TouchableOpacity style={[styles.buttonNumber, styles.doubleWidthButton]}>
          <Text style={styles.buttonTextutton}>7</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonTextutton}>8</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonTextutton}>9</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonTextutton}>x</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonTextutton}>4</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonTextutton}>5</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonTextutton}>6</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonTextutton}>-</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonTextutton}>1</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonTextutton}>2</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonTextutton}>3</Text>
        </TouchableOpacity>
         <TouchableOpacity style={styles.buttonNumber}>
          <Text style={styles.buttonTextutton}>+</Text>
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
  color:'000000',
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
