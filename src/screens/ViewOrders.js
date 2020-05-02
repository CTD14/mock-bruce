import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import MealContext from '../context/Context';

const ViewOrdersScreen = props => {
  const { state, removeOrder } = useContext(MealContext);
 // const meal = state.meals.find(meal => meal.id === props.route.params.mealId);

  const orders = state.orders;
  
  console.log('HERE IS THE ORDER INFO', orders);
  console.log('the digits', );
  return (
    <View style={styles.container}>
     <Text>Add an Order List to me!</Text>
  
<FlatList
  data={orders}
  renderItem={itemData => {
    console.log('the new info', itemData);
    return (
      <View style={styles.infoCard}>
        <Text>{itemData.item.meal.title}</Text>
        <Text>{itemData.item.meal.price}</Text>
        <Button title='Delete Order' onPress={() => {
     removeOrder(itemData.item.id)}
   } 
   />
      </View>
      
   )
  }}
  />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    borderRadius: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoCard: {
    flex: 1,
    height: 100,
    width: 90,
    margin: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#999',
    borderRadius: 5,
  },

});

export default ViewOrdersScreen;
