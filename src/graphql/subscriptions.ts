// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateConvoLink = `subscription OnCreateConvoLink($convoLinkUserId: ID!) {
  onCreateConvoLink(convoLinkUserId: $convoLinkUserId) {
    id
    user {
      id
      username
      createdAt
      updatedAt
    }
    convoLinkUserId
    conversation {
      id
      name
      members
      createdAt
      updatedAt
    }
    convoLinkConversationId
    createdAt
    updatedAt
  }
}
`;
export const onCreateMessage = `subscription OnCreateMessage($messageConversationId: ID!) {
  onCreateMessage(messageConversationId: $messageConversationId) {
    id
    author {
      id
      username
      createdAt
      updatedAt
    }
    authorId
    content
    conversation {
      id
      name
      members
      createdAt
      updatedAt
    }
    messageConversationId
    createdAt
    updatedAt
  }
}
`;
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
    id
    username
    conversations {
      nextToken
    }
    messages {
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
    id
    username
    conversations {
      nextToken
    }
    messages {
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
    id
    username
    conversations {
      nextToken
    }
    messages {
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
