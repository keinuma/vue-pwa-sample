// tslint:disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createConvo = `mutation CreateConvo($input: CreateConversationInput!) {
  createConvo(input: $input) {
    id
    messages {
      nextToken
    }
    associated {
      nextToken
    }
    name
    members
    createdAt
    updatedAt
  }
}
`;
export const createMessage = `mutation CreateMessage($input: CreateMessageInput!) {
  createMessage(input: $input) {
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
export const updateMessage = `mutation UpdateMessage($input: UpdateMessageInput!) {
  updateMessage(input: $input) {
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
export const deleteMessage = `mutation DeleteMessage($input: DeleteMessageInput!) {
  deleteMessage(input: $input) {
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
export const createConvoLink = `mutation CreateConvoLink($input: CreateConvoLinkInput!) {
  createConvoLink(input: $input) {
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
export const updateConvoLink = `mutation UpdateConvoLink($input: UpdateConvoLinkInput!) {
  updateConvoLink(input: $input) {
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
