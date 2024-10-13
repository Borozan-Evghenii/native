import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingHorizontal: 27
  },
  tabBar: {
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: '#1D1F22',
    padding: 8
  },

  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 4
  },
  buttonActive: {
    backgroundColor: '#2E86EF',
    borderRadius: 20
  },
  buttonText: {
    fontSize: 14,
    verticalAlign: 'middle',
    textAlign: 'center',
    color: 'white',
    fontWeight: 500
  }
});

export const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        let label;

        if (options.tabBarLabel !== undefined) {
          label = options.tabBarLabel;
        } else if (options.title !== undefined) {
          label = options.title;
        } else {
          label = route.name;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          });
        };

        return (
          <Pressable
            key={route.key}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            style={{ ...styles.button, ...(isFocused && styles.buttonActive) }}
            testID={options.tabBarTestID}
            onLongPress={onLongPress}
            onPress={onPress}
          >
            <View>
              <Text style={{ fontSize: 32, color: 'white' }}>X</Text>
            </View>
            {isFocused && <Text style={{ ...styles.buttonText }}>{label.toString()}</Text>}
          </Pressable>
        );
      })}
    </View>
  </SafeAreaView>
);
