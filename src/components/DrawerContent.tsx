import { Image, View } from 'react-native'
import { DrawerContentComponentProps } from '@react-navigation/drawer'

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View className="flex-1 bg-gray-700 overflow-hidden">
      <View className="mt-20 w-full border-b border-gray-600 pb-6">
        <Image
          alt="GMail logo"
          source={require('@/assets/logo.png')}
          className="w-28 ml-5"
          resizeMode="contain"
        />
      </View>
    </View>
  )
}
