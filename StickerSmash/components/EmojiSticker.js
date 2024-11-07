import { View } from "react-native-web"
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { Animated, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export default function EmojiSticker({imageSize, stickerSource}) {
    return (
        <View style={{top: -350}}>
            <Animated.Image source={stickerSource}
                resizeMode="contain"
                style={{width: imageSize, height:imageSize}}/>
        </View>
    );
}