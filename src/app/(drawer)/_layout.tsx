import { CustomOptions } from '@/@types/navigation'
import { DrawerContent } from '@/components/DrawerContent'
import { Drawer } from 'expo-router/drawer'

export default function DrawerLayout() {
  return (
    <Drawer
      defaultStatus="open"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '75%',
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={
          {
            title: 'Todas as caixas de entrada',
            iconName: 'all-inbox',
            isDivider: true,
            notifications: 5,
          } as CustomOptions
        }
      />
    </Drawer>
  )
}
