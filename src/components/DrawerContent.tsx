import { Image, ScrollView, View } from 'react-native'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { DrawerButton } from '@/components/DrawerButton'
import { CustomOptions } from '@/@types/navigation'

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

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >
        <View className="mt-2">
          {drawerProps.state.routes.map((route, index) => {
            const isFocused = drawerProps.state.index === index
            const options = drawerProps.descriptors[route.key]
              .options as CustomOptions

            if (options.title === undefined) {
              return <></>
            }

            return (
              <View key={route.key}>
                <DrawerButton
                  title={options.title}
                  iconName={options.iconName}
                  isDivider={options.isDivider}
                  notifications={options.notifications}
                  isFocused={isFocused}
                />
              </View>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}