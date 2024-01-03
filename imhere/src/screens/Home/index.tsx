import React, { useState } from 'react';
import {
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export default function Home() {
    const [participants, setParticipants] = useState(['João']);

    function handleParticipantAdd() {
        if (participants.includes("Rodrigo")){
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
        }

        setParticipants(prevState => [...prevState, 'Gabriel']);
        console.log(participants)
    }

    function handleParticipantRemove(name: string) {
        Alert.alert("Remover", `Remover o participante ${name} ?`, [
            {
                text: 'Sim',
                onPress: () => Alert.alert("Deletado !")
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>
            <Text style={styles.eventDate}>
                Sexta, 4 de Novembro de 2022.
            </Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder='Nome do participante'
                    placeholderTextColor="#6b6b6b"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleParticipantAdd}
                >
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={participants}
                keyExtractor={item => item}
                renderItem={({item}) => (
                    <Participant
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguém chegou no evento ainda ? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />

        </View>
    );
}