import { ScrollView,StyleSheet, Text, View,Animated,TouchableOpacity,ActivityIndicator,Modal } from 'react-native'
import React, {useState, useRef, useEffect} from 'react';
import {ArrowLeft, Like1, Receipt21, Message, Share, More} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import {formatNumber} from '../../utils/formatNumber';
import {formatDate} from '../../utils/formatDate';
<<<<<<< HEAD
import firestore from '@react-native-firebase/firestore';
=======
<<<<<<< HEAD
import firestore from '@react-native-firebase/firestore';
=======
import axios from 'axios';
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
import { fontType } from '../../assets/theme';

const DetailTraining = ({route}) => {
    const {trainingId} = route.params;
    const [iconStates, setIconStates] = useState({
        liked: {variant: 'Linear', color: 'gray'},
        bookmarked: {variant: 'Linear', color: 'gray'},
    });
<<<<<<< HEAD
    const [selectedItem, setTrainingData] = useState(null);
    const [loading, setLoading] = useState(true);
=======
<<<<<<< HEAD
    const [selectedItem, setTrainingData] = useState(null);
    const [loading, setLoading] = useState(true);
=======
    const [trainingData, setTrainingData] = useState(null);
    const [loading, setLoading] = useState(true);

>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
    const actionSheetRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false);
    const openActionSheet = () => {
        actionSheetRef.current?.show();
    };
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
    const closeActionSheet = () => {
        actionSheetRef.current?.hide();
    };
    useEffect(() => {
        const subscriber = firestore()
            .collection('item')
            .doc(trainingId)
            .onSnapshot(documentSnapshot => {
                const itemData = documentSnapshot.data();
                if (itemData) {
                console.log('Item data: ', itemData);
                setTrainingData(itemData);
                } else {
                console.log(`Item with ID ${trainingId} not found.`);
                }
            });
            setLoading(false);
            return () => subscriber();
        }, [trainingId]);
        
        const navigateEdit = () => {
            closeActionSheet()
            navigation.navigate('EditTraining', {trainingId})
        }
        const handleDelete = async () => {
            setLoading(true);
            try {
            await firestore()
                .collection('item')
                .doc(trainingId)
                .delete()
                .then(() => {
                console.log('Item deleted!');
                });
            if (selectedItem?.image) {
                const imageRef = storage().refFromURL(selectedItem?.image);
                await imageRef.delete();
            }
            console.log('Item deleted!');
            closeActionSheet();
            setTrainingData(null);
            setLoading(false)
            navigation.navigate('Training');
            } catch (error) {
            console.error(error);
            }
        };
    
<<<<<<< HEAD
=======
=======

    const closeActionSheet = () => {
        actionSheetRef.current?.hide();
    };

    useEffect(() => {
        getData();
    }, [trainingId]);

    const getData = async () => {
        try {
        const response = await axios.get(
            `https://6570c63f09586eff6641ed29.mockapi.io/bodybuff/training/${trainingId}`,
        );
        setTrainingData(response.data);
        setLoading(false);
        } catch (error) {
        console.error(error);
        }
    };

    const navigateEdit = () => {
        closeActionSheet()
        navigation.navigate('EditTraining', {trainingId})
    }
    const handleDelete = async () => {
    await axios.delete(`https://6570c63f09586eff6641ed29.mockapi.io/bodybuff/training/${trainingId}`)
        .then(() => {
            closeActionSheet()
            navigation.navigate('Training');
        })
        .catch((error) => {
            console.error(error);
        });
    }
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
    const navigation = useNavigation();
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 52);
    const headerY = diffClampY.interpolate({
        inputRange: [0, 52],
        outputRange: [0, -52],
    });
    const bottomBarY = diffClampY.interpolate({
        inputRange: [0, 52],
        outputRange: [0, 52],
    });
    const toggleIcon = iconName => {
        setIconStates(prevStates => ({
        ...prevStates,
        [iconName]: {
            variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
            color:
            prevStates[iconName].variant === 'Linear'
                ? 'blue'
                : 'gray',
        },
        }));
    };
    return (
            <View style={{flex: 1}}>
            <Animated.View
            style={[styles.header, {transform: [{translateY: headerY}]}]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft color='gray' variant="Linear" size={24} />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <More
                color='gray'
                variant="Linear"
                style={{transform: [{rotate: '90deg'}]}}
                />
            </TouchableOpacity>
            </View>
        </Animated.View>
        {loading ? (
            <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <ActivityIndicator size={'large'} color='blue' />
            </View>
        ) : (
        <ScrollView>
            <View style={{alignItems: 'center', padding:10, marginTop: 20}}>
            <FastImage
                style={{width: 200,height:200, marginTop: 40}}
                source={{
<<<<<<< HEAD
                uri: selectedItem?.image,
=======
<<<<<<< HEAD
                uri: selectedItem?.image,
=======
                uri: trainingData?.image,
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}></FastImage>
            </View>
            <View style={{flexDirection: 'row',gap:60, padding: 20}}>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
                <Text style={{fontFamily: fontType['Mukta-ExtraBold'],fontSize: 18}}>{selectedItem?.title}</Text>
                <Text style={{fontFamily: fontType['Mukta-ExtraBold'],fontSize: 18}}>{selectedItem?.duration}</Text>
            </View>
            <View style={{padding: 20}}>
                <Text style={{fontFamily: fontType['Pjs-Light'],fontSize: 18}}>{selectedItem?.description}</Text>
<<<<<<< HEAD
=======
=======
                <Text style={{fontFamily: fontType['Mukta-ExtraBold'],fontSize: 18}}>{trainingData?.title}</Text>
                <Text style={{fontFamily: fontType['Mukta-ExtraBold'],fontSize: 18}}>{trainingData?.duration}</Text>
            </View>
            <View style={{padding: 20}}>
                <Text style={{fontFamily: fontType['Pjs-Light'],fontSize: 18}}>{trainingData?.description}</Text>
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
            </View>
            <View style={{padding: 20, alignItems: 'center', backgroundColor: '#7A9EFF', marginHorizontal: 16, borderRadius: 20}}>
                <Text  style={{fontFamily: fontType['Mukta-ExtraBold'],fontSize: 15,color: 'white'}}>Start Now</Text>
            </View>
        </ScrollView>
        )}
        <Animated.View
        style={[styles.bottomBar, {transform: [{translateY: bottomBarY}]}]}>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <TouchableOpacity onPress={() => toggleIcon('liked')}>
            <Like1
                color={iconStates.liked.color}
                variant={iconStates.liked.variant}
                size={24}
            />
            </TouchableOpacity>
            <Text style={styles.info}>
<<<<<<< HEAD
            {formatNumber(selectedItem?.totalLikes)}
=======
<<<<<<< HEAD
            {formatNumber(selectedItem?.totalLikes)}
=======
            {formatNumber(trainingData?.totalLikes)}
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
            </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Message color='gray' variant="Linear" size={24} />
            <Text style={styles.info}>
<<<<<<< HEAD
            {formatNumber(selectedItem?.totalComments)}
=======
<<<<<<< HEAD
            {formatNumber(selectedItem?.totalComments)}
=======
            {formatNumber(trainingData?.totalComments)}
>>>>>>> 85b3339ce3adc4be81b64709bcf050cb4b1354ab
>>>>>>> 3dc2f48a538df01da88182fbc651c4ef916f2c53
            </Text>
        </View>
        <TouchableOpacity onPress={() => toggleIcon('bookmarked')}>
            <Receipt21
            color={iconStates.bookmarked.color}
            variant={iconStates.bookmarked.variant}
            size={24}
            />
        </TouchableOpacity>
        </Animated.View>
        <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        style={{}}
        onRequestClose={() =>{
        setModalVisible(!modalVisible);
        }}>
        <View style={{backgroundColor: 'white',position:'absolute', padding: 20,top: 50, paddingHorizontal: 40,borderRadius: 10,left: 260,paddingVertical: 20}}>
        <TouchableOpacity
            style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
            }}
            onPress={navigateEdit}
            >
            <Text
            style={{
                color: 'black',
                fontSize: 18,
            }}>
            Edit
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
            }}
            onPress={handleDelete}>
            <Text
            style={{
                color: 'black',
                fontSize: 18,
            }}>
            Delete
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
            }}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text
            style={{
                color: 'red',
                fontSize: 18,
            }}>
            Cancel
            </Text>
        </TouchableOpacity>
        </View>
        </Modal>
    </View>
    )
}

export default DetailTraining

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 24,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        height: 52,
        paddingTop: 8,
        paddingBottom: 4,
        position: 'absolute',
        zIndex: 1000,
        top: 0,
        right: 0,
        left: 0,
        backgroundColor: 'white',
      },
      bottomBar: {
        position: 'absolute',
        zIndex: 1000,
        backgroundColor: 'white',
        paddingVertical: 14,
        paddingHorizontal: 60,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
})