import { ArrowLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { Button, XStack } from 'tamagui'

import { useTopEntryState } from './hooks/useTopEntryState'
import { LeftSection } from './left-section'
import { MiddleSection } from './middle-section'
import { RightSection } from './right-section'

interface TopEntryProps {
  onBack?: () => void
}

export const TopEntry: React.FC<TopEntryProps> = ({ onBack }) => {
  // 使用主状态hook初始化数据
  useTopEntryState()

  return (
    <XStack
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="$3"
      paddingVertical="$3"
      backgroundColor="$background"
      borderBottomWidth={1}
      borderBottomColor="$borderColor"
      elevation={0}>
      <XStack alignItems="center" gap="$2" width="30%">
        {onBack && (
          <Button
            size="$3"
            circular
            icon={<ArrowLeft size={24} />}
            onPress={onBack}
            chromeless
          />
        )}
        <LeftSection />
      </XStack>
      <XStack width="40%" justifyContent="center">
        <MiddleSection />
      </XStack>
      <XStack width="30%" justifyContent="flex-end">
        <RightSection />
      </XStack>
    </XStack>
  )
}
