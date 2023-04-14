import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {isValidElement, useState} from 'react';
import Digit from '../components/Digit';

const Calculator = () => {
  const [value, setValue] = useState('');

  function OnHandleSubmit(value) {
    setValue(eval(value));
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
        <Digit text={'C'} color={'#393E46'} onPress={() => setValue('')} />
        <Digit text={'AC'} color={'#222831'} onPress={() => setValue('')} />
        <Digit
          text={'%'}
          color={'#222831'}
          onPress={() => setValue(value + '%')}
        />
        <Digit
          text={'/'}
          color={'#222831'}
          onPress={() => setValue(value + '/')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Digit
          text={'7'}
          onPress={() => {
            setValue(value + 7);
            console.log(value);
          }}
        />
        <Digit text={'8'} onPress={() => setValue(value + '8')} />
        <Digit text={'9'} onPress={() => setValue(value + '9')} />
        <Digit
          text={'*'}
          color={'#222831'}
          onPress={() => setValue(value + '*')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Digit
          text={'4'}
          color={'white'}
          onPress={() => setValue(value + '4')}
        />
        <Digit
          text={'5'}
          color={'white'}
          onPress={() => setValue(value + '5')}
        />
        <Digit
          text={'6'}
          color={'white'}
          onPress={() => setValue(value + '6')}
        />
        <Digit
          text={'-'}
          color={'#222831'}
          onPress={() => setValue(value + '-')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Digit
          text={'1'}
          color={'white'}
          onPress={() => setValue(value + '1')}
        />
        <Digit
          text={'2'}
          color={'white'}
          onPress={() => setValue(value + '2')}
        />
        <Digit
          text={'3'}
          color={'white'}
          onPress={() => setValue(value + '3')}
        />
        <Digit
          text={'+'}
          color={'#222831'}
          onPress={() => setValue(value + '+')}
        />
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
          onPress={() => setValue(value + '0')}
        />
        <Digit
          text={'.'}
          color={'white'}
          onPress={() => setValue(value + '.')}
        />
        <Digit
          text={'='}
          color={'white'}
          bgcolor={'#222831'}
          onPress={() => OnHandleSubmit(value)}
        />
      </View>
    </View>
  );
};

export default Calculator;
