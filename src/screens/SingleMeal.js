import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import MealContext from '../context/Context';

const SingleMealScreen = props => {
  const { state, addToOrder } = useContext(MealContext);
  const meal = state.meals.find(meal => meal.id === props.route.params.mealId);
  const [order, setOrder] = useState({ meal: {}, quantity: 1 });

  const orderMeal = () => {
    order.meal = meal;
    addToOrder(order);
  };

  return (
    <View style={styles.container}>
      {/* Meal Information and Description */}
      <Image
        style={styles.pic}
        source={{
          uri:
          meal.imageUrl,
        }}
      />
      <View style={styles.infoCard}>
        <Text>{meal.title}</Text>
        <Text>{meal.price}</Text>
        <Text>{meal.affordability}</Text>
           </View>

      {/* Order Now button and input for quantity */}
      <View style={styles.actionButtons}>
        {/* I need a quantity input :/ */}
        <Button title='Order Now!' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  infoCard: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#999',
    borderRadius: 5,
  },
  pic: 
  {
    flex: 1,
    justifyContent: 'center'
    
  }

});

export default SingleMealScreen;
