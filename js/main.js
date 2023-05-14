var DateTime = luxon.DateTime;

const { createApp } = Vue;

createApp({
    data() {
        return {
            emojis: [
                '😀', '😁', '😂', '😃', '😄', '😅'
            ],
            currentChat: 0,
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
                            date: '10/05/2023 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/05/2023 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/05/2023 16:15:22',
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
        getClass(i) {
            return this.contacts[i].visible ? "d-flex" : "d-none"
        },
        writeMsg() {
            let newMsg = {
                date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss').toLocaleString({ month: '2-digits', hour: '2-digits', minute: '2-digits'}),
                message: this.inputMsg.message,
                status: "sent",
            };
            let newAnswer = {
                date: DateTime.now().toFormat('dd/MM/yyyy HH:mm:ss').toLocaleString({ month: '2-digits', hour: '2-digits', minute: '2-digits'}),
                message: "Ok",
                status: "received"
            }
            this.contacts[this.currentChat].messages.push(newMsg);
            x = document.getElementById("chat-wrapper")
            setTimeout(() => x.scrollTo(0, x.scrollHeight), 10)
            setTimeout(() => this.contacts[this.currentChat].messages.push(newAnswer), 1000)
            setTimeout(() => x.scrollTo(0, x.scrollHeight), 1010)
            this.inputMsg.message = ""
        },
        chooseEmoji(i) {
            this.inputMsg.message += this.emojis[i]
        },
        getLastMsg(i) {
            if (this.contacts[i].messages.length > 0) {
              return this.contacts[i].messages.at(-1).message  
            } 
        },
        getTimeDiff(date) {
            if (date) {
                const d = date.split(" ")
                d[0] = d[0].split("/").reverse().join("-")
                console.log(d);
                const luxonDate = DateTime.fromISO(d[0] + "T" + d[1] + "+02:00");
                const diff = DateTime.now().diff((luxonDate), 'days').days
                console.log("Diff:" + diff, "LuxonDate:" + luxonDate);
                let howLongAgo = DateTime.now().minus({ days: diff }).toRelativeCalendar()
                if (howLongAgo != "oggi") {
                    return howLongAgo
                }
                return `${luxonDate.hour}:${luxonDate.minute}`
            }
        },
        deleteMsg(i) {
            this.contacts[this.currentChat].messages.splice(i, 1);
            console.log(this.contacts[this.currentChat].messages)
            if (this.contacts[this.currentChat].messages.length == 0) {
                this.contacts[this.currentChat].visible = false;
            }
        },
        searchContacts() {
            this.contacts.forEach(e => {
                let toCheck = e.name.toLowerCase()
                toCheck = toCheck.slice(0,this.inputSearch.length)
                toCheck == this.inputSearch.toLowerCase() ? e.visible = true : e.visible = false;
            })
        }
    }
}).mount("#app");

