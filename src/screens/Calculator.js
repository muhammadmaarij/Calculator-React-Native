import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Digit from '../components/Digit';

const Calculator = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={{flexWrap: 'wrap', backgroundColor: '#393E46', flex: 1}}>
      <View style={{height: 100, marginTop: 150, width: 400}}>
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
        <Digit text={'C'} color={'#393E46'} />
        <Digit text={'AC'} color={'#222831'} />
        <Digit text={'%'} color={'#222831'} />
        <Digit text={'/'} color={'#222831'} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Digit text={'7'} />
        <Digit text={'8'} />
        <Digit text={'9'} />
        <Digit text={'*'} color={'#222831'} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Digit text={'4'} color={'white'} />
        <Digit text={'5'} color={'white'} />
        <Digit text={'6'} color={'white'} />
        <Digit text={'-'} color={'#222831'} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Digit text={'1'} color={'white'} />
        <Digit text={'2'} color={'white'} />
        <Digit text={'3'} color={'white'} />
        <Digit text={'+'} color={'#222831'} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
        }}>
        <Digit text={'0'} color={'white'} width={140} />
        <Digit text={'.'} color={'white'} />
        <Digit text={'='} color={'white'} bgcolor={'#222831'} />
      </View>
    </View>
  );
};

export default Calculator;
