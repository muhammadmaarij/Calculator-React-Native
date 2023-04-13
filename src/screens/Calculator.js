import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Digit from '../components/Digit';

const Calculator = () => {
  const [value, setValue] = useState(null);
  const [prevValue, setprevValue] = useState(null);
  const [operator, setOperator] = useState('');

  function OnHandleSubmit(prevValue, value) {
    switch (operator) {
      case '+':
        prevValue = prevValue + value;
        break;
      case '-':
        prevValue = prevValue - value;
        break;
      default:
        prevValue;
        // prevValue = prevValue + value;
        break;
    }
  }

  return (
    <View style={{flexWrap: 'wrap', backgroundColor: '#393E46', flex: 1}}>
      <View style={{height: 100, marginTop: 70, width: 400}}>
        <Text
          style={{
            textAlign: 'right',
            fontSize: 48,
            color: '#EEEEEE',
            marginRight: 20,
          }}>
          {value}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Digit text={'C'} color={'#393E46'} onPress={() => setOperator('C')} />
        <Digit
          text={'AC'}
          color={'#222831'}
          onPress={() => setOperator('AC')}
        />
        <Digit text={'%'} color={'#222831'} onPress={() => setOperator('%')} />
        <Digit text={'/'} color={'#222831'} onPress={() => setOperator('/')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Digit text={'7'} onPress={() => setValue(7)} />
        <Digit text={'8'} onPress={() => setValue(8)} />
        <Digit text={'9'} onPress={() => setValue(9)} />
        <Digit text={'*'} color={'#222831'} onPress={() => setOperator('*')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Digit text={'4'} color={'white'} onPress={() => setValue(4)} />
        <Digit text={'5'} color={'white'} onPress={() => setValue(5)} />
        <Digit text={'6'} color={'white'} onPress={() => setValue(6)} />
        <Digit text={'-'} color={'#222831'} onPress={() => setOperator('-')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Digit text={'1'} color={'white'} onPress={() => setValue(1)} />
        <Digit text={'2'} color={'white'} onPress={() => setValue(2)} />
        <Digit text={'3'} color={'white'} onPress={() => setValue(3)} />
        <Digit text={'+'} color={'#222831'} onPress={() => setOperator('+')} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Digit
          text={'0'}
          color={'white'}
          width={140}
          onPress={() => setValue(0)}
        />
        <Digit text={'.'} color={'white'} onPress={() => setOperator('.')} />
        <Digit
          text={'='}
          color={'white'}
          bgcolor={'#222831'}
          onPress={() => OnHandleSubmit}
        />
      </View>
    </View>
  );
};

export default Calculator;
