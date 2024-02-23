import { Text, View } from 'react-native'
import { Avatar } from './Avatar'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '@/styles/colors'

export function Email() {
  return (
    <View className="w-full flex-row gap-4">
      <Avatar source={{ uri: 'https://github.com/Guilherme-Silva0.png' }} />

      <View className="flex-1">
        <View className="flex-row items-center gap-1">
          <MaterialIcons
            name="label-important"
            size={16}
            color={colors.yellow[600]}
          />

          <Text className="text-lg font-subtitle text-gray-400 flex-1">
            Guilherme Silva
          </Text>

          <Text className="text-sm font-body text-gray-400">23 Fev.</Text>
        </View>
        <Text
          className="text-base font-body text-gray-400"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          Assunto do e-mail
        </Text>

        <View className="flex-row items-center gap-4">
          <Text
            className="text-base font-body text-gray-400 flex-1"
            numberOfLines={1}
            lineBreakMode="tail"
          >
            Menssagem do e-mail
          </Text>
          <MaterialIcons name="star" size={22} color={colors.blue[600]} />
        </View>
      </View>
    </View>
  )
}
