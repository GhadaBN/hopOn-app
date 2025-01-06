import {
  View,
  Text,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}) => (
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="my-2 w-full">
        {label && (
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
        )}
        <View
          className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-full border border-neutral-100 focus:border-primary-500 ${
            containerStyle
          }`}
        >
          {icon && (
            <Image source={icon} className={`w-6 h-6 ml-4 ${iconStyle}`} />
          )}
          <TextInput
            secureTextEntry={secureTextEntry}
            className={`rounded-full flex-1 px-4 py-2 JakartaSemiBold text-[15px] ${inputStyle} text-left`}
            {...props}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default InputField;
