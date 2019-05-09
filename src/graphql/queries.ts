// tslint:disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    conversations {
      items {
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
      nextToken
    }
    messages {
      items {
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
      nextToken
    }
    createdAt
    updatedAt
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      conversations {
        items {
          id
          convoLinkUserId
          convoLinkConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      messages {
        items {
          id
          authorId
          content
          messageConversationId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getConvo = `query GetConvo($id: ID!) {
  getConvo(id: $id) {
    id
    messages {
      items {
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
      nextToken
    }
    associated {
      items {
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
      nextToken
    }
    name
    members
    createdAt
    updatedAt
  }
}
`;
