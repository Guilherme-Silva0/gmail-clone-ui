import { FlatList, View, Text } from 'react-native'

import { Avatar } from '@/components/Avatar'
import { Email } from '@/components/Email'
import { Input } from '@/components/Input'
import { MenuButton } from '@/components/MenuButton'
import { EMAILS } from '@/utils/emails'
import { FloatButton } from '@/components/FloatButton'

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

      <FlatList
        data={EMAILS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Email data={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (
          <Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">
            Entrada
          </Text>
        )}
      />

      <FloatButton icon="edit" text="Escrever" />
    </View>
  )
}
