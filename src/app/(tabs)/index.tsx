import { Avatar } from '@/components/Avatar'
import { Input } from '@/components/Input'
import { MenuButton } from '@/components/MenuButton'
import { View } from 'react-native'

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4">
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail..." />
        <Avatar
          size="small"
          source={{ uri: 'https://github.com/Guilherme-Silva0.png' }}
        />
      </Input>
    </View>
  )
}
