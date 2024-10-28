import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  StyleProp,
  TextStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import React from 'react';
import colors from 'src/shared/constants/colors';
import dimensions from 'src/shared/constants/dimensions';

const screenWidth = Dimensions.get('window').width;

type Props = {
  value: string;
  defaultValue?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
  placeholderTextColor?: string; // optional prop to set custom placeholder text color, defaults to gray if not provided
  inputName?: string;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  error: { touched: boolean; name: string | undefined };
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
};

const input = ({
  style,
  value,
  defaultValue,
  onChangeText,
  secureTextEntry,
  placeholder,
  placeholderTextColor,
  inputName,
  onBlur,
  error,
  autoCapitalize,
}: Props) => {
  let inputStyle: StyleProp<TextStyle> = [styles.input];
  if (error.name && error.touched) {
    inputStyle = [styles.input, { borderBottomColor: colors.red, color: colors.red }];
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.textName}>{inputName}</Text>
      <TextInput
        style={[style, inputStyle]}
        value={value}
        autoCapitalize={autoCapitalize ?? 'none'}
        defaultValue={defaultValue ?? value}
        placeholder={placeholder ?? value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={
          placeholderTextColor ?? `${error.name && error.touched ? colors.red : 'gray'}`
        }
        onBlur={onBlur}
      />
      <Text style={styles.errorText}>{error.name && error.touched && error.name}</Text>
    </View>
  );
};

export default input;

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: screenWidth * 0.8,
  },
  textName: {
    color: colors.midBlue,
  },
  errorText: {
    color: colors.red,
    fontSize: 12,
  },
  inputContainer: {
    marginBottom: dimensions.screenWidth * 0.1,
  },
});
