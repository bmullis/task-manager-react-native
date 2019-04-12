import React from 'react';
import { StyleSheet, View } from 'react-native';
import moment from 'moment';
import { colors } from '../theme';

import Text from './Text';

const getStatus = (item) => {
  if (item.completed_at) {
    return [colors.success, 'COMPLETED'];
  } 
  if (!item.completed_at && moment(item.due_at).toDate() < new Date()) {
    return [colors.error, 'OVERDUE'];
  }
  if (!item.completed_at && moment(item.due_at).toDate() > new Date()) {
    return [colors.info, 'SCHEDULED'];
  } 
  if (!item.completed_at && !item.due_at) {
    return [colors.gray500, 'NOT SCHEDULED']
  }
};

const getShortened = (description) => {
  if (description.length > 22) {
    return description.substring(0, 22) + '...';
  }
  return description;
};

const TaskCard = ({ item }) => {
  return (
    <View style={[styles.root, styles.shadow]}>
      <View>
        <View style={[styles.statusBar, { backgroundColor: getStatus(item)[0]}]} />
        <View style={ styles.row }>
          <Text 
            text={ getShortened(item.description) }
            textStyles={ styles.cardHeader }
          />
          <Text
            text={ getStatus(item)[1] }
            textStyles={ [styles.cardSubHeader, { color: getStatus(item)[0]}] }
          />
        </View>
      </View>
      <View style={ styles.row }>
        <Text
          text={ 'Due Date:' } 
          textStyles={ styles.cardBody }
        />
        <Text
          text={ moment(item.due_at).format('MMM Do YYYY') }
          textStyles={ [styles.cardBody, { color: getStatus(item)[0], paddingLeft: 8 }] }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    fontFamily: 'Heebo-Bold',
    fontSize: 18,
    paddingBottom: 12,
  },
  cardSubHeader: {
    fontFamily: 'Heebo-Light',
    fontSize: 14,
    paddingLeft: 12
  },
  cardBody: {
    fontFamily: 'Heebo-Regular'
  },
  cardBodyBold: {
    fontFamily: 'Heebo-Medium'
  },  
  root: {
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    borderColor: colors.gray100,
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: 94,
    marginVertical: 6,
    paddingHorizontal: 16,
    paddingVertical: 14
  },
  shadow: {
    elevation: 6,
    shadowColor: colors.gray600,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6
  },
  statusBar: {
    backgroundColor: colors.success,
    borderRadius: 2,
    height: 36,
    left: -12,
    marginTop: -8,
    position: 'absolute',
    width: 3,
  },
  row: {
    alignItems: 'flex-start',
    flexDirection: 'row'
  }
});

export default TaskCard;
