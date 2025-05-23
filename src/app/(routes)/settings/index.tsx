import { useNavigation } from '@react-navigation/native'
import { ChevronRight, Cloud, Globe, HardDrive, Info, Package, Settings } from '@tamagui/lucide-icons'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, Text, useTheme, XStack, YStack } from 'tamagui'

import { HeaderBar } from '@/components/settings/headerBar'

interface SettingItemConfig {
  title: string
  screen: string
  icon: React.ReactElement
}

interface SettingGroupConfig {
  title: string
  items: SettingItemConfig[]
}

export default function SettingsPage() {
  const { t } = useTranslation()
  const theme = useTheme()
  const navigation = useNavigation()

  const settingsItems: SettingGroupConfig[] = [
    {
      title: t('settings.modelAndService'),
      items: [
        {
          title: t('settings.provider.title'),
          screen: 'ProvidersPage',
          icon: <Cloud size={24} />
        },
        {
          title: t('settings.model'),
          screen: 'ModelSettings',
          icon: <Package size={24} />
        },
        {
          title: t('settings.websearch.title'),
          screen: 'WebSearchSettings',
          icon: <Globe size={24} />
        }
      ]
    },
    {
      title: t('settings.title'),
      items: [
        {
          title: t('settings.general.title'),
          screen: 'GeneralSettings',
          icon: <Settings size={24} />
        },
        {
          title: t('settings.data.title'),
          screen: 'DataSettings',
          icon: <HardDrive size={24} />
        }
      ]
    },
    {
      title: t('settings.dataAndSecurity'),
      items: [
        {
          title: t('settings.about.title'),
          screen: 'AboutSettings',
          icon: <Info size={24} />
        }
      ]
    }
  ]

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background.val }}>
      <ScrollView backgroundColor="$background">
        <YStack padding="$4" gap={4} flex={1}>
          <HeaderBar title={t('settings.title')} onBackPress={() => navigation.goBack()} />

          <YStack gap={24} flex={1} marginTop={16}>
            {settingsItems.map(group => (
              <SettingGroup key={group.title} title={group.title}>
                {group.items.map(item => (
                  <SettingItem key={item.title} title={item.title} screen={item.screen} icon={item.icon} />
                ))}
              </SettingGroup>
            ))}
          </YStack>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  )
}

interface SettingGroupProps {
  title: string
  children: React.ReactNode
}

function SettingGroup({ title, children }: SettingGroupProps) {
  return (
    <YStack gap={8}>
      <Text fontSize="$4" fontWeight="bold" opacity={0.7}>
        {title}
      </Text>
      <YStack backgroundColor="$gray2" gap={8} paddingVertical={12} borderRadius={9}>
        {children}
      </YStack>
    </YStack>
  )
}

interface SettingItemProps {
  title: string
  screen: string
  icon: React.ReactElement
}

function SettingItem({ title, screen, icon }: SettingItemProps) {
  const navigation = useNavigation()
  return (
    <XStack
      height={44}
      paddingHorizontal={16}
      paddingVertical={12}
      borderRadius={9}
      justifyContent="space-between"
      alignItems="center"
      pressStyle={{ opacity: 0.8 }}
      hoverStyle={{ backgroundColor: '$backgroundHover' }}
      // @ts-expect-error navigate type mismatch
      onPress={() => navigation.navigate(screen as any)}>
      <XStack alignItems="center" gap={12}>
        {icon}
        <YStack>
          <Text fontSize="$5">{title}</Text>
        </YStack>
      </XStack>
      <ChevronRight size={24} color="$colorFocus" />
    </XStack>
  )
}
