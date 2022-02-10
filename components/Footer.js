import {StyleSheet, Text, View, Image} from 'react-native'; //todo: remove text footer will be images, text is only for testing purposes

export default function Footer() {
  return(
    <view style={styles.footer}>
      <text>testtest</text>
    </view>
)}

styles = StyleSheet.create({
  footer: {
    position: 'fixed',
    bottom: 0,
    height: 300,
    color:'#666777'
  }
})
