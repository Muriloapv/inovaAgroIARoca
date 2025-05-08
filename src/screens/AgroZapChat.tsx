import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const initialMessages = [
  { from: 'bot', text: 'Olá! O que fez hoje?' },
  { from: 'bot', text: 'Estamos chegando próximo à data de previsão de colheita. Está indo conforme o planejado?' },
  { from: 'bot', text: 'Olá, identificamos uma anomalia em seu plano de manejo. Gostaria de mais informações?' },
];

export default function AgroZapChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { from: 'user', text: input }]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome5 name="robot" size={22} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.headerTitle}>AgroZap</Text>
      </View>
      <ScrollView style={styles.chatArea} contentContainerStyle={{ padding: 16 }}>
        {messages.map((msg, idx) => (
          <View
            key={idx}
            style={msg.from === 'user' ? styles.userMsgRow : styles.botMsgRow}
          >
            <View style={msg.from === 'user' ? styles.userBubble : styles.botBubble}>
              <Text style={msg.from === 'user' ? styles.userText : styles.botText}>{msg.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Mensagem"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
          <MaterialIcons name="send" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#357a38',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  chatArea: {
    flex: 1,
  },
  botMsgRow: {
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  userMsgRow: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  botBubble: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  userBubble: {
    backgroundColor: '#388e3c',
    borderRadius: 16,
    padding: 12,
    maxWidth: '80%',
  },
  botText: {
    color: '#234d20',
    fontSize: 16,
  },
  userText: {
    color: '#fff',
    fontSize: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  input: {
    flex: 1,
    backgroundColor: '#f9f7f2',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  sendBtn: {
    backgroundColor: '#357a38',
    borderRadius: 20,
    padding: 10,
  },
}); 