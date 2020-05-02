import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
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
      <View style={styles.infoCard}>
        <Text>{meal.title}</Text>
      </View>

      {/* Order Now button and input for quantity */}
      <View style={styles.actionButtons}>
        {/* I need a quantity input :/ */}
        <Button title='Order Now!' onPress={() => {
          setOrder(order);
          addToOrder(order);
          console.log(meal.title);
          console.log(order);
        }} />
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
});

export default SingleMealScreen;
