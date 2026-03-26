import React from "react";
import { View, Text, StyleSheet, Image ,Dimensions} from "react-native";
import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

const slider = Array.from({ length: 5 }).map((_, i) => ({
    id: i.toString(),
    title: 'Slide ${i + 1}',
    image: 'https://picsum.photos/800/400?random=${i}',
}));

const Example = () => {
    return (
        <View style={styles.container}>
            <Swiper autoplay loop showsPagination>
                {slider.map((item) => (
                    <View>
                        <Image source={{ uri: item.image }}/>
                        <Text>{item.title}</Text>
                    </View>
                ))}
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },

    swiper: {
        width: width,
        height: 250
    },
    slide: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#fff",
        fontSize: 20,
        position: "absolute",
        bottom: 10,
        backgroundColor: "#000",
        paddingHorizontal: 10,
        borderRadius: 5,
    },
});

export default Example;  