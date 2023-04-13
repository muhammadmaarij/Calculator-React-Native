import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Digit = ({text, bgcolor, color, width, onPress}) => {
  var text;
  switch (text) {
    case '*': {
    }
  }
  if (parseInt(text) == Number) {
    text = parseInt(text);
  } else {
    text;
  }
  var onPress;
  if (onPress) {
    onPress = onPress;
  } else {
    // onPress = 70;
  }
  var width;
  if (width) {
    width = width;
  } else {
    width = 70;
  }
  var bgcolor;
  if (bgcolor) {
    bgcolor = bgcolor;
  } else {
    bgcolor = '#00ADB5';
  }
  var color;
  if (color) {
    color = color;
  } else {
    color = '#EEEEEE';
  }
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          onPress;
        }}>
        <View
          style={{
            height: 70,
            width: width,
            borderRadius: 50,
            backgroundColor: bgcolor,
            borderWidth: 2,
            borderColor: 'black',
          }}>
          <Text style={{fontSize: 45, textAlign: 'center', color: color}}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Digit;
