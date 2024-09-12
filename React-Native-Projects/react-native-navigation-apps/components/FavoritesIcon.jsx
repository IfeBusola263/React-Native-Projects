import {Pressable, StyleSheet} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import { addFavorite, removeFavorite } from '../store/faveSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';

export default function FavoritesIcon({size, color}){
    const mealId = useRoute().params.id
    const ids = useSelector(state => state.fave.ids);
    const mealIsFavorite = ids.includes(mealId)
    const dispatch = useDispatch();

    function changeFavoritesStatus(){
	if (mealIsFavorite){
	    dispatch(removeFavorite(mealId))
	} else {
	    dispatch(addFavorite(mealId))
	}
    }

    return <Pressable onPress={changeFavoritesStatus}>
	       <Ionicons name={mealIsFavorite ? 'star-sharp' : 'star-outline'} size={24} color='(rgba(250, 250, 250, 0.8))' style={styles.icon}  />
	   </Pressable>
}

const styles = StyleSheet.create({
    icon: {
	paddingRight: 4
    }
});
