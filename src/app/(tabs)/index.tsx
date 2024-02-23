import { View } from 'react-native'

import { Avatar } from '@/components/Avatar'
import { Email } from '@/components/Email'
import { Input } from '@/components/Input'
import { MenuButton } from '@/components/MenuButton'

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

      <Email />
    </View>
  )
}
