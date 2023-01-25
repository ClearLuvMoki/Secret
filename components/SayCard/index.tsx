/**
 * Author: Moki
 * Date: 2023-01-22
 * FileName: 每日一言的Card
 **/

import React from 'react';
import {Text, View, Image} from "react-native";

interface SayCardProps {
    width?: number | string
    height?: number | string
    content?: string
    author?: string
    image?: string
}

const SayCard = ({width, height = "100%", content, author, image}: SayCardProps) => {
    return (
        <View
            style={{
                width,
                height,
                borderRadius: 10,
                overflow: "hidden",
                backgroundColor: "#fff",
                shadowColor: "rgb(98,98,98)",
                elevation: 15
            }}
        >
            <Image
                style={{
                    width: "100%",
                    height: 200
                }}
                source={{
                    uri: image,
                }}
            />
            <View style={{ marginTop: 20, padding: 10 }}>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ fontSize: 18 }}>{content}</Text>
                </View>
                <View style={{ display: "flex", alignItems: "flex-end" }}>
                    <Text style={{ fontSize: 14, color: "grey" }}>{author}</Text>
                </View>
            </View>

        </View>
    );
};

export default SayCard;
