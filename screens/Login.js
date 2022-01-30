import {StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Keyboard, Button} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function Login() {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.title}>
                    <Text style={styles.title}>[Project</Text>
                    <Text style={styles.titleAlt}>Kambria]</Text>
                </View>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"/>
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}/>
                        <View style={styles.btnContainer}>
                            <Button title="Submit" onPress={() => null}/>
                        </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 55,
        color: '#000',
    },
    titleAlt: {
        fontSize: 55,
        color: '#1ac4ac',
        paddingLeft: 100,
    },
    input: {
        backgroundColor: '#dfdfdf',
        padding: 5,
        fontSize: 28,
        width: 265,
        marginTop: 5,
        marginBottom: 5,
    },
    form: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        backgroundColor: '#1ac4ac',
        marginTop: 10,
    }
})
