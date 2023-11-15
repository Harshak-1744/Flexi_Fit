import { View, Text, Image, Touchable } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Index(){
    return (
        <View className="flex-1 flex justify-end">
        <StatusBar style="light" />
        <Image className="h-full w-full absolute" source={require('../assets/images/welcome.jpg')} blurRadius={0} />
        <LinearGradient
            colors={['transparent', '#18181b']}
            style={{ width: wp(100), height: hp(70) }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.8 }}
            className="flex justify-end pb-12 space-y-8" >
        <View className="flex items-center">
            <Text style={{fontSize: hp(5), marginBottom: hp(1)}} className="text-white font-bold tracking-wide">
                Best <Text className="text-rose-500"> Workouts</Text>
            </Text>

            <Text style={{fontSize: hp(5), marginBottom: hp(1)}} className="text-white font-bold tracking-wide">
                For You 
            </Text>
        </View>
        
        <View>
            <TouchableOpacity style={{fontSize: hp(7), width: wp(50), height: hp(7)}}
                className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
            >
                <Text style={{fontSize: hp(3)}} className="text-white font-bold tracking-widest">
                    Get Started
                </Text>    
            </TouchableOpacity>    
        </View>

    </LinearGradient>
</View>
    )
}