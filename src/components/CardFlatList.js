import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import SectionHeader from './SectionHeader';
import Separator from './Separator';

const CardFlatList = ({ data, title, ...rest }) => (
  <View>
    {title && <SectionHeader text={ title } />}
    <FlatList
      data={ data }
      keyExtractor={ (item, index) => `${item._id}` }
      ItemSeparatorComponent={ Separator }
      style={ styles.root }
      {...rest}
    />
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 16
  },
});

export default CardFlatList;