import { useState } from "react";
import {View, ScrollView, SafeAreaView } from "react-native"
import { Stack, useRouter } from "expo-router";

import {COLORS, icons, images, SIZES} from "../constants";
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from "../components";

const router = useRouter();
/*const [searchTerm, setSearchTerm] = useState("");
const handleClick = () => {
    if (searchTerm){
        console.log(searchTerm)
        router.push(`/search/${searchTerm}`)
    }
};*/

const Home =() => {
    return (
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen
            options={{
                headerStyle:{ backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerLeft:()=>(
                    <ScreenHeaderBtn iconURL={icons.menu} dimension="60%"/>
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn iconURL={images.profile} dimension="100%"/>
                ),
                headerTitle:""
            }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
            style={{
                flex:1,
                padding:SIZES.medium
            }}>
            <Welcome
               /* searchTerm = {searchTerm}
                setSearchTerm = {setSearchTerm}               
                handleClick = {handleClick}*/
            />
            <Popularjobs/>
            <Nearbyjobs/>


            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

export default Home;