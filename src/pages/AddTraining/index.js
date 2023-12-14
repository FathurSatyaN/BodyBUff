import { useNavigation } from "@react-navigation/native";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
import { SearchNormal1,Notification, AddCircle,AddSquare,Add } from "iconsax-react-native";
import React, { useState } from "react";
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
<<<<<<< HEAD
=======
=======
import { SearchNormal1,Notification, AddCircle } from "iconsax-react-native";
import React, { useState } from "react";
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from "react-native";
import {fontType} from '../../assets/theme';
<<<<<<< HEAD
import FastImage from "react-native-fast-image";
const AddTraining = () => {
    const [loading, setLoading] = useState(false);
=======
<<<<<<< HEAD
import FastImage from "react-native-fast-image";
const AddTraining = () => {
    const [loading, setLoading] = useState(false);
=======
const AddTraining = () => {
<<<<<<< HEAD
    const [loading, setLoading] = useState(false);
=======
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
    const [trainingData, setTrainingData] = useState({
        title: "",
        description: "",
        duration: "",
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
        image: "",
        totalLikes: 0,
        totalComments: 0,
    });
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
    const handleImagePick = async () => {
        ImagePicker.openPicker({
          width: 1920,
          height: 1080,
          cropping: true,
        })
          .then(image => {
            console.log(image);
            setImage(image.path);
          })
          .catch(error => {
            console.log(error);
          });
      };
    const handleUpload = async () => {
        let filename = image.substring(image.lastIndexOf('/') + 1);
        const extension = filename.split('.').pop();
        const name = filename.split('.').slice(0, -1).join('.');
        filename = name + Date.now() + '.' + extension;
        const reference = storage().ref(`image/${filename}`);
        setLoading(true);
        try {
        await reference.putFile(image);
        const url = await reference.getDownloadURL();
        await firestore().collection('item').add({
            title: trainingData.title,
            description: trainingData.description,
            image: url,
            duration: trainingData.duration,
            totalComments: trainingData.totalComments,
            totalLikes: trainingData.totalLikes,
            createdAt: new Date(),
        });
        setLoading(false);
        console.log('Item added!');
        navigation.navigate('Training');
        } catch (error) {
        console.log(error);
        }
        };
<<<<<<< HEAD
=======
=======
    const handleUpload = async () => {
        setLoading(true);
        try {
          await axios.post('https://6570c63f09586eff6641ed29.mockapi.io/bodybuff/training', {
              title: trainingData.title,
              description: trainingData.description,
              duration: trainingData.duration,
              image,
              totalComments: trainingData.totalComments,
              totalLikes: trainingData.totalLikes,
              createdAt: new Date(),
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          setLoading(false);
          navigation.navigate('Training');
        } catch (e) {
          console.log(e);
        }
      };
=======
        totalLikes: 0,
        totalComments: 0,
    });
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
    const handleChange = (key, value) => {
        setTrainingData({
        ...trainingData,
        [key]: value,
        });
    };
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    return (
        <View style={{flex: 1}}>
             <View style={{flexDirection: 'row',alignItems: 'center',padding: 25, justifyContent:'flex-end', gap: 28,backgroundColor: '#252727'}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")}>
                        <SearchNormal1 size="27" color="#F7F7F7"variant="Linear"/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Mailbox")}>
                        <Notification size="27" color="#F7F7F7" variant="Linear"/>
                    </TouchableWithoutFeedback>
            </View>
            <ScrollView>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Nama Latihan."
                    value={trainingData.title}
                    onChangeText={(text) => handleChange("title", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Deskripsi Latihan."
<<<<<<< HEAD
                    value={trainingData.description}
=======
<<<<<<< HEAD
                    value={trainingData.description}
=======
<<<<<<< HEAD
                    value={trainingData.description}
=======
                    value={trainingData.title}
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
                    onChangeText={(text) => handleChange("description", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Durasi Latihan."
<<<<<<< HEAD
                    value={trainingData.duration}
=======
<<<<<<< HEAD
                    value={trainingData.duration}
=======
<<<<<<< HEAD
                    value={trainingData.duration}
=======
                    value={trainingData.title}
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
                    onChangeText={(text) => handleChange("duration", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
                {image ? (
                    <View style={{position: 'relative'}}>
                        <FastImage
                        style={{width: '100%', height: 127, borderRadius: 5}}
                        source={{
                            uri: image,
                            headers: {Authorization: 'someAuthToken'},
                            priority: FastImage.priority.high,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                        />
                        <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: -5,
                            right: -5,
                            backgroundColor: 'blue',
                            borderRadius: 25,
                        }}
                        onPress={() => setImage(null)}>
                        <Add
                            size={20}
                            variant="Linear"
                            color="white"
                            style={{transform: [{rotate: '45deg'}]}}
                        />
                        </TouchableOpacity>
                    </View>
                    ) : (
                    <TouchableOpacity onPress={handleImagePick}>
                        <View
                        style={[
                            textInput.borderDashed,
                            {
                            gap: 10,
                            paddingVertical: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            },
                        ]}>
                        <AddSquare color="" variant="Linear" size={42} />
                        <Text
                            style={{
                            fontFamily: fontType['Pjs-Regular'],
                            fontSize: 12,
                            color: 'gray',
                            }}>
                            Upload Thumbnail
                        </Text>
                        </View>
                    </TouchableOpacity>
                    )}
            </ScrollView>
            <TouchableOpacity onPress={handleUpload} style={{backgroundColor: '#3693F4',padding: 15, flexDirection: 'row',alignItems: 'center', gap: 12, marginHorizontal: 120, borderRadius: 14, position: 'absolute', top: 670,left:192}}>
<<<<<<< HEAD
=======
=======
                <View style={textInput.board}>
                    <TextInput
                    placeholder="URL."
<<<<<<< HEAD
                    value={trainingData.image}
                    onChangeText={(text) => setImage(text)}
=======
                    value={trainingData.title}
                    onChangeText={(text) => handleChange("image", text)}
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
            </ScrollView>
<<<<<<< HEAD
            <TouchableOpacity onPress={handleUpload} style={{backgroundColor: '#3693F4',padding: 15, flexDirection: 'row',alignItems: 'center', gap: 12, marginHorizontal: 120, borderRadius: 14, position: 'absolute', top: 670,left:192}}>
=======
            <TouchableOpacity style={{backgroundColor: '#3693F4',padding: 15, flexDirection: 'row',alignItems: 'center', gap: 12, marginHorizontal: 120, borderRadius: 14, position: 'absolute', top: 670,left:192}}>
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
                <AddCircle variant="Linear" color="white" size={'30'}/>
            </TouchableOpacity>
        </View>
    )
}

export default AddTraining

const styles = StyleSheet.create({})
const textInput = StyleSheet.create({
    title:{
        fontSize: 20,
        fontFamily: fontType['Oswald-Light']
    },
    board: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    boardDescription: {
        padding: 10,
        marginVertical: 10,
        marginTop: -5,
        marginHorizontal: 20,
    }
})