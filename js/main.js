var DateTime = luxon.DateTime;

const { createApp } = Vue;

createApp({
    data() {
        return {
            // array generato in mounted
            emojis: [
                
            ],
            // variabile contatore per la chat attiva
            currentChat: 0,
            // variabili di appoggio per l'input di ricerca contatti e di nuovo messaggio
            inputVisible: false,
            inputSearchChat: "",
            inputSearch: "",
            inputMsg: {
                date: "",
                message: "",
                status: "sent"
            },
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/05/2023 15:00:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/05/2023 15:04:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/05/2023 06:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2023 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2023 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2023 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/12/2022 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/12/2022 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/12/2022 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
            
        };
    },
    methods: {
        // rende visibili o nasconde i div dei contatti nel contenitore sinistro
        getDisplayValue(i) {
            return this.contacts[i].visible ? "d-flex" : "d-none"
        },
        writeNewMsg() {
            // scrive un nuovo messaggio in chat (se passa il check sul contenuto in html)
            // oggetto messaggio inviato dall'utente
            let newMsg = {
                // prende data e orario attuali e li formatta in due cifre
                date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss').toLocaleString({ month: '2-digit', hour: '2-digit', minute: '2-digit'}),
                message: this.inputMsg.message,
                status: "sent",
            };
            // oggetto messaggio di risposta automatica con emoji random
            let newAnswer = {
                date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss').toLocaleString({ month: '2-digit', hour: '2-digit', minute: '2-digit'}),
                message: this.emojis[Math.floor(Math.random() * this.emojis.length)],
                status: "received"
            }

            // aggiunge il messaggio utente all'array bindato e diventa visibile in pagina 
            this.contacts[this.currentChat].messages.push(newMsg);

            const chatWrapper = document.getElementById("chat-wrapper");
            // scrolla la scrollbar fino all'altezza del contenitore per far visualizzare il messaggio
            setTimeout(() => chatWrapper.scrollTo(0, chatWrapper.scrollHeight), 10);
            // fa apparire la scritta "sta scrivendo" 
            setTimeout(() => this.$refs.isWriting.innerText = "Sta scrivendo...", 1000);
            setTimeout(() => this.$refs.isWriting.innerText = `Ultimo accesso: ${this.getLastAccess()}`, 3000);
            // aggiunge il messaggio di risposta automatica
            setTimeout(() => this.contacts[this.currentChat].messages.push(newAnswer), 3000);
            // scrolla di nuovo
            setTimeout(() => chatWrapper.scrollTo(0, chatWrapper.scrollHeight), 1010);

            // riazzera l'input
            this.inputMsg.message = ""
        },
        chooseEmoji(i) {
            // al click l'emoji viene portata nell'input di nuovo messaggio, che viene focalizzato
            this.inputMsg.message += this.emojis[i];
            document.getElementById("input-bar").focus();
        },
        getLastMsg(i) {
            // ritorna l'ultimo messaggio della chat (controllando che ce ne sia almeno uno)
            if (this.contacts[i].messages.length > 0) {
              return this.contacts[i].messages.at(-1).message  
            } 
        },
        getLastAccess() {
            // ritorna l'orario o la data dell'ultimo messaggio inviato 
            let lastAccess = ""
            if (this.contacts[this.currentChat].messages.length > 0 ) {
                for (let i = this.contacts[this.currentChat].messages.length-1; i >= 0; i--) {
                    const msg = this.contacts[this.currentChat].messages[i];
                    if (msg.status == "sent") {
                        lastAccess = msg.date
                        return this.getTimeDiff(lastAccess)
                    }
                }     
            } 
        },
        getTimeDiff(date) {
            // ritorna il tempo passato dal messaggio tramite la libreria Luxon
            if (date) {
                // formattazione delle date originarie 
                const d = date.split(" ")
                d[0] = d[0].split("/").reverse().join("-")

                // creazione oggetto data con luxon e formattazione a due cifre
                let luxonDate = DateTime.fromISO(d[0] + "T" + d[1] + "+02:00");
                let time = luxonDate.toLocaleString({ hour: '2-digit', minute: '2-digit'}); 

                // calcolo della differenza temporale tra il messaggio e il momento presente
                const diff = DateTime.now().diff((luxonDate), 'days').days
                let howLongAgo = DateTime.now().minus({ days: diff }).toRelativeCalendar()

                // se il messaggio è di oggi lasciamo che sia visualizzato l'orario
                if (howLongAgo != "oggi") {
                    return howLongAgo
                }
                return time
            }
        },
        deleteMsg(i) {
            // cancella il messaggio con il metodo slpice e l'indice in argomento
            this.contacts[this.currentChat].messages.splice(i, 1);
            
            // se non ci sono più messaggi viene cancellata anche la chat del contenitore sinistro
            if (this.contacts[this.currentChat].messages.length == 0) {
                this.contacts[this.currentChat].visible = false;
                
            }
        },
        searchContacts() {
            // cerca corrispondenze tra l'input della searchbar e i nomi presenti in contacts
            this.contacts.forEach(e => {
                // lowercase per intercettare maiuscole e minuscole
                let toCheck = e.name.toLowerCase()
                // usa lo slice per confrontare l'input con lo stesso numero di lettere iniziali dei nomi
                toCheck = toCheck.slice(0,this.inputSearch.length)
                toCheck == this.inputSearch.toLowerCase() ? e.visible = true : e.visible = false;
            })
        },
        showSearchBar() {
            this.inputVisible = !this.inputVisible; 
            document.getElementById('input-search-bar').focus();
        },
        findInChat() {
            const chatMessages = document.querySelectorAll('.chat-msg');
            for (i = 0; i < chatMessages.length; i++) {
                    if (this.inputSearchChat.trim() != "") {
                        chatMessages[i].innerHTML = chatMessages[i].innerText.replace(this.inputSearchChat, `<mark>${this.inputSearchChat}</mark>`);
                    } else {
                        chatMessages[i].innerHTML = chatMessages[i].innerText.replace(`<mark>`, "")
                    }
                }
            }
    },
    mounted() {
        // generatore di emoji 
        const emojiRange = [128513, 128579];
        // ciclo for che scorre i numeri del range per creare le emoji
        for (let i = emojiRange[0]; i < emojiRange[1]; i++) {
            const emoticon = String.fromCodePoint(i)
            this.emojis.push(emoticon);
        }
    }
}).mount("#app");




