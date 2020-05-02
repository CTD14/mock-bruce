import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import MealContext from '../context/Context';

const ViewOrdersScreen = props => {
  const { state, removeOrder } = useContext(MealContext);

  const orders = state.orders;
  
  return (
    <View style={styles.container}>
     <Text>Current Orders</Text>
  
<FlatList
  data={orders}
  renderItem={itemData => {
    console.log('the new info', itemData);
    return (
      <View style={styles.card}>
        <Text>Order: {itemData.item.meal.title}</Text>
        <Text> Price: ${itemData.item.meal.price}</Text>
        <Button style={styles.b} title='Delete' onPress={() => {
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
    margin: 20,
    borderRadius: 5,
    backgroundColor: 'rgb(255, 255, 255)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    marginVertical: 25,
    paddingLeft: 100,
    paddingRight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 240, 131)',
    borderRadius: 15, 
  },
    b: {
      
    },

});

export default ViewOrdersScreen;
