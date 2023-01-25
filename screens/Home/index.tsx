import React, {useCallback, useEffect, useState} from 'react';
import {View, Text} from "react-native";
import {getHitokoto, getImageByRandom, getShici} from "../../http";
import ReloadButton from "../../components/ReloadButton";
import SayCard from "../../components/SayCard";
import {defaultTheme} from "@rneui/base";

const Home = ({navigation}) => {
    const [sayData, setSayData] = useState<{ id: string, content: string, author: string } | null>({
        id: "1",
        content: "好好学习，天天向上!",
        author: "毛泽东"
    })
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <ReloadButton
                    loading={loading}
                    containerStyle={{marginRight: 10}}
                    onPress={async () => {
                        await getData();
                        await getImage();
                    }}
                />
            ),
        });
        getData();
        getImage();
    }, [])


    /**
     * Author: Moki
     * Date: 2023-01-22
     * Todo: 获取每日一言
     **/
    const getData = () => {
        const rand = Number((Math.random() * 100).toFixed(0));
        if (rand % 2 === 0) {
            setLoading(true)
            getShici()
                .then((data) => {
                    setSayData({
                        id: data?.data?.id,
                        content: data?.data?.content,
                        author: `${data?.data?.origin?.dynasty} - ${data?.data?.origin?.author} - [${data?.data?.origin?.title}]`
                    })
                })
                .finally(() => {
                    setLoading(false)
                })
        } else {
            setLoading(true)
            getHitokoto()
                .then(
                    (data) => {
                        setSayData({
                            id: data?.id,
                            content: data?.hitokoto,
                            author: data?.from || data?.from_who
                        })
                    }
                )
                .finally(() => {
                    setLoading(false)
                })
        }
    }

    /**
     * Author: Moki
     * Date: 2023-01-22
     * Todo: 获取图片
     **/
    const getImage = () => {
        const num = Math.random();
        setImage(`https://api.ixiaowai.cn/gqapi/gqapi.php?${num}`)
    };


    return (
        <View style={{display: "flex", justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <SayCard
                width={"80%"}
                height={"80%"}
                content={sayData?.content}
                author={sayData?.author}
                image={image}
            />
        </View>
    );
};

export default Home;
