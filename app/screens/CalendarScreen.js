import React, {useEffect, useState} from 'react';
import { StyleSheet, Modal } from 'react-native';
import {Calendar} from 'react-native-calendars';

import Screen from '../components/Screen';
import DaySetter from '../components/week/DaySetter';

import { saveDayPlan } from '../components/services/dayService';

export default function CalendarScreen({route}) {
    
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedDay, setSelectedDay] = useState();

    const handleSetDay = day => {
        setSelectedDay(day);
        setModalVisible(true);
    }

    const handleSaveDayData = async data => { //TODO
        const res = await saveDayPlan(selectedDay.dateString, data);
        setModalVisible(false);
    }

    const handleAutoOpen = () => {
        if (route.params) {
            setSelectedDay(route.params);
            setModalVisible(true);
        }
    }

    useEffect(() => {
        handleAutoOpen()
    }, [])

    return (
    <Screen>
        <Calendar
             onDayPress={handleSetDay}
             // Handler which gets executed on day long press. Default = undefined
             onDayLongPress={(day) => {console.log('selected day', day)}}
             // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
             monthFormat={'yyyy MM'}
             // Handler which gets executed when visible month changes in calendar. Default = undefined
             onMonthChange={(month) => {console.log('month changed', month)}}
             // Hide month navigation arrows. Default = false
             hideArrows={true}
             // Replace default arrows with custom ones (direction can be 'left' or 'right')
             renderArrow={(direction) => (<Arrow/>)}
             // Do not show days of other months in month page. Default = false
             hideExtraDays={false}
             // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
             // day from another month that is visible in calendar page. Default = false
             disableMonthChange={true}
             // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
             firstDay={1}
             // Hide day names. Default = false
             hideDayNames={true}
             // Show week numbers to the left. Default = false
             showWeekNumbers={false}
             // Handler which gets executed when press arrow icon left. It receive a callback can go back month
             onPressArrowLeft={subtractMonth => subtractMonth()}
             // Handler which gets executed when press arrow icon right. It receive a callback can go next month
             onPressArrowRight={addMonth => addMonth()}
             // Disable left arrow. Default = false
             disableArrowLeft={true}
             // Disable right arrow. Default = false
             disableArrowRight={true}
             // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
             disableAllTouchEventsForDisabledDays={true}
             // Replace default month and year title with custom one. the function receive a date as parameter.
             renderHeader={(date) => {/*Return JSX*/}}
             // Enable the option to swipe between months. Default = false
             enableSwipeMonths={true}
        />
        <Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
            <DaySetter day={selectedDay} onSubmit={handleSaveDayData}/>
        </Modal> 
    </Screen>
);
}

const styles = StyleSheet.create({
container: {

},
});