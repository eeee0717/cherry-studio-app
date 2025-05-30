import { t } from 'i18next'
import React from 'react'
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, styled, Text, useTheme, View, YStack } from 'tamagui'

import { MessageInput } from '@/components/message-input'
import { TopEntry } from '@/components/top-entry'

const HomeScreen = () => {
  const theme = useTheme()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background.val }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <YStack backgroundColor="$background" flex={1} onPress={Keyboard.dismiss}>
          <TopEntry />

          {/* 主要内容区域 */}
          <ContentContainer>
            <Image
              source={require('@/assets/images/adaptive-icon.png')}
              width={100}
              height={100}
              resizeMode="contain"
              borderRadius={50}
              overflow="hidden"
            />

            <YStack alignItems="center" space="$2">
              <Text fontSize="$6" fontWeight="bold" color="$color12">
                {t('chat.title')}
              </Text>
              <Text fontSize="$3" color="$color11" textAlign="center" maxWidth={300}>
                {t('chat.welcome')}
              </Text>
            </YStack>
          </ContentContainer>

          <InputContainer>
            <MessageInput />
          </InputContainer>
        </YStack>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const ContentContainer = styled(YStack, {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
})

const InputContainer = styled(View, {
  marginHorizontal: '$3',
  paddingHorizontal: 16,
  paddingVertical: 12,
  backgroundColor: '$gray2',
  borderRadius: 9
})

export default HomeScreen
