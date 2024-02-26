import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

type FloatButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap
  text?: string
}

export function FloatButton({ icon, text, ...rest }: FloatButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...rest}
      className="px-6 py-4 bg-gray-600 rounded-full absolute bottom-6 right-6 gap-2 flex-row items-center"
    >
      {icon && (
        <MaterialIcons name={icon} size={22} color={colors.orange[500]} />
      )}
      {text && <Text className="font-subtitle text-orange-500">{text}</Text>}
    </TouchableOpacity>
  )
}
