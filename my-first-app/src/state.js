let state = {
    postsData: [
        { fullName: 'Mike Knyazev', massege: 'lylypplylyl' },
        { fullName: 'Mike Knyazev', massege: 'lylyooooolylyl' },
        { fullName: 'Mike Knyazev', massege: 'lylylylppppyl' },
        { fullName: 'Mike Knyazev', massege: 'lyl;;;ylylyl' }
    ],
    messageData =[
        { text: 'how are you', myMessage: false },
        { text: 'how are you!!', myMessage: true },
        { text: 'how are you!!', myMessage: true },
        { text: 'how are you', myMessage: false }
    ],
    dialogsData =[
        { name: 'Ratmir', id: '1', lastmessage: 'last message...' },
        { name: 'Mike', id: '2', lastmessage: 'last message...' },
        { name: 'Alena', id: '3', lastmessage: 'last message...' },
        { name: 'Tutuska', id: '4', lastmessage: 'last message...' },
        { name: 'Franklin', id: '5', lastmessage: 'last message...' },
    ]
}

let addPost = (newPost) => {
    let post = {
        fullName: 'Mike Knyazev',
        massege: newPost
    }
    state.postsData.push(Post)
}