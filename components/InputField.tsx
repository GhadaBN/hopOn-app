import React from "react";
import { View, Text, TextInput, Image } from "react-native";

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  ...props
}) => (
  <View className="my-2 w-full">
    {label && (
      <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle || ""}`}>
        {label}
      </Text>
    )}
    <View
      className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${
        containerStyle || ""
      }`}
    >
      {icon && (
        <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle || ""}`} />
      )}
      <TextInput
        secureTextEntry={secureTextEntry}
        className={`flex-1 px-4 py-2 ${inputStyle || ""}`}
        {...props}
      />
    </View>
  </View>
);

export default InputField;
