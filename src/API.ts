/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null;
  username: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreateConversationInput = {
  id?: string | null;
  name: string;
  members: Array<string>;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type CreateMessageInput = {
  id?: string | null;
  authorId?: string | null;
  content: string;
  messageConversationId: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateMessageInput = {
  id: string;
  authorId?: string | null;
  content?: string | null;
  messageConversationId?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteMessageInput = {
  id?: string | null;
};

export type CreateConvoLinkInput = {
  id?: string | null;
  convoLinkUserId?: string | null;
  convoLinkConversationId: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type UpdateConvoLinkInput = {
  id: string;
  convoLinkUserId?: string | null;
  convoLinkConversationId?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  createdAt?: ModelStringFilterInput | null;
  updatedAt?: ModelStringFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDFilterInput | null;
  authorId?: ModelStringFilterInput | null;
  content?: ModelStringFilterInput | null;
  messageConversationId?: ModelIDFilterInput | null;
  createdAt?: ModelStringFilterInput | null;
  updatedAt?: ModelStringFilterInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type CreateUserMutationVariables = {
  input: CreateUserInput;
};

export type CreateUserMutation = {
  createUser: {
    __typename: "User";
    id: string;
    username: string;
    conversations: {
      __typename: "ModelConvoLinkConnection";
      items: Array<{
        __typename: "ConvoLink";
        id: string;
        user: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkUserId: string | null;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      items: Array<{
        __typename: "Message";
        id: string;
        author: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null;
        authorId: string | null;
        content: string;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        messageConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
};

export type UpdateUserMutation = {
  updateUser: {
    __typename: "User";
    id: string;
    username: string;
    conversations: {
      __typename: "ModelConvoLinkConnection";
      items: Array<{
        __typename: "ConvoLink";
        id: string;
        user: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkUserId: string | null;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      items: Array<{
        __typename: "Message";
        id: string;
        author: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null;
        authorId: string | null;
        content: string;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        messageConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput;
};

export type DeleteUserMutation = {
  deleteUser: {
    __typename: "User";
    id: string;
    username: string;
    conversations: {
      __typename: "ModelConvoLinkConnection";
      items: Array<{
        __typename: "ConvoLink";
        id: string;
        user: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkUserId: string | null;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      items: Array<{
        __typename: "Message";
        id: string;
        author: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null;
        authorId: string | null;
        content: string;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        messageConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type CreateConvoMutationVariables = {
  input: CreateConversationInput;
};

export type CreateConvoMutation = {
  createConvo: {
    __typename: "Conversation";
    id: string;
    messages: {
      __typename: "ModelMessageConnection";
      items: Array<{
        __typename: "Message";
        id: string;
        author: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null;
        authorId: string | null;
        content: string;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        messageConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    associated: {
      __typename: "ModelConvoLinkConnection";
      items: Array<{
        __typename: "ConvoLink";
        id: string;
        user: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkUserId: string | null;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    name: string;
    members: Array<string>;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput;
};

export type CreateMessageMutation = {
  createMessage: {
    __typename: "Message";
    id: string;
    author: {
      __typename: "User";
      id: string;
      username: string;
      conversations: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    authorId: string | null;
    content: string;
    conversation: {
      __typename: "Conversation";
      id: string;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      associated: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      name: string;
      members: Array<string>;
      createdAt: string | null;
      updatedAt: string | null;
    };
    messageConversationId: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput;
};

export type UpdateMessageMutation = {
  updateMessage: {
    __typename: "Message";
    id: string;
    author: {
      __typename: "User";
      id: string;
      username: string;
      conversations: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    authorId: string | null;
    content: string;
    conversation: {
      __typename: "Conversation";
      id: string;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      associated: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      name: string;
      members: Array<string>;
      createdAt: string | null;
      updatedAt: string | null;
    };
    messageConversationId: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput;
};

export type DeleteMessageMutation = {
  deleteMessage: {
    __typename: "Message";
    id: string;
    author: {
      __typename: "User";
      id: string;
      username: string;
      conversations: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    authorId: string | null;
    content: string;
    conversation: {
      __typename: "Conversation";
      id: string;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      associated: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      name: string;
      members: Array<string>;
      createdAt: string | null;
      updatedAt: string | null;
    };
    messageConversationId: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type CreateConvoLinkMutationVariables = {
  input: CreateConvoLinkInput;
};

export type CreateConvoLinkMutation = {
  createConvoLink: {
    __typename: "ConvoLink";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      conversations: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    };
    convoLinkUserId: string | null;
    conversation: {
      __typename: "Conversation";
      id: string;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      associated: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      name: string;
      members: Array<string>;
      createdAt: string | null;
      updatedAt: string | null;
    };
    convoLinkConversationId: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type UpdateConvoLinkMutationVariables = {
  input: UpdateConvoLinkInput;
};

export type UpdateConvoLinkMutation = {
  updateConvoLink: {
    __typename: "ConvoLink";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      conversations: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    };
    convoLinkUserId: string | null;
    conversation: {
      __typename: "Conversation";
      id: string;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      associated: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      name: string;
      members: Array<string>;
      createdAt: string | null;
      updatedAt: string | null;
    };
    convoLinkConversationId: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser: {
    __typename: "User";
    id: string;
    username: string;
    conversations: {
      __typename: "ModelConvoLinkConnection";
      items: Array<{
        __typename: "ConvoLink";
        id: string;
        user: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkUserId: string | null;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      items: Array<{
        __typename: "Message";
        id: string;
        author: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null;
        authorId: string | null;
        content: string;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        messageConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUsersQuery = {
  listUsers: {
    __typename: "ModelUserConnection";
    items: Array<{
      __typename: "User";
      id: string;
      username: string;
      conversations: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type GetConvoQueryVariables = {
  id: string;
};

export type GetConvoQuery = {
  getConvo: {
    __typename: "Conversation";
    id: string;
    messages: {
      __typename: "ModelMessageConnection";
      items: Array<{
        __typename: "Message";
        id: string;
        author: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null;
        authorId: string | null;
        content: string;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        messageConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    associated: {
      __typename: "ModelConvoLinkConnection";
      items: Array<{
        __typename: "ConvoLink";
        id: string;
        user: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkUserId: string | null;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    name: string;
    members: Array<string>;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type GetMessageQueryVariables = {
  id: string;
};

export type GetMessageQuery = {
  getMessage: {
    __typename: "Message";
    id: string;
    author: {
      __typename: "User";
      id: string;
      username: string;
      conversations: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    authorId: string | null;
    content: string;
    conversation: {
      __typename: "Conversation";
      id: string;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      associated: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      name: string;
      members: Array<string>;
      createdAt: string | null;
      updatedAt: string | null;
    };
    messageConversationId: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListMessagesQuery = {
  listMessages: {
    __typename: "ModelMessageConnection";
    items: Array<{
      __typename: "Message";
      id: string;
      author: {
        __typename: "User";
        id: string;
        username: string;
        conversations: {
          __typename: "ModelConvoLinkConnection";
          nextToken: string | null;
        } | null;
        messages: {
          __typename: "ModelMessageConnection";
          nextToken: string | null;
        } | null;
        createdAt: string | null;
        updatedAt: string | null;
      } | null;
      authorId: string | null;
      content: string;
      conversation: {
        __typename: "Conversation";
        id: string;
        messages: {
          __typename: "ModelMessageConnection";
          nextToken: string | null;
        } | null;
        associated: {
          __typename: "ModelConvoLinkConnection";
          nextToken: string | null;
        } | null;
        name: string;
        members: Array<string>;
        createdAt: string | null;
        updatedAt: string | null;
      };
      messageConversationId: string;
      createdAt: string | null;
      updatedAt: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateConvoLinkSubscriptionVariables = {
  convoLinkUserId: string;
};

export type OnCreateConvoLinkSubscription = {
  onCreateConvoLink: {
    __typename: "ConvoLink";
    id: string;
    user: {
      __typename: "User";
      id: string;
      username: string;
      conversations: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    };
    convoLinkUserId: string | null;
    conversation: {
      __typename: "Conversation";
      id: string;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      associated: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      name: string;
      members: Array<string>;
      createdAt: string | null;
      updatedAt: string | null;
    };
    convoLinkConversationId: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type OnCreateMessageSubscriptionVariables = {
  messageConversationId: string;
};

export type OnCreateMessageSubscription = {
  onCreateMessage: {
    __typename: "Message";
    id: string;
    author: {
      __typename: "User";
      id: string;
      username: string;
      conversations: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string | null;
    } | null;
    authorId: string | null;
    content: string;
    conversation: {
      __typename: "Conversation";
      id: string;
      messages: {
        __typename: "ModelMessageConnection";
        items: Array<{
          __typename: "Message";
          id: string;
          authorId: string | null;
          content: string;
          messageConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      associated: {
        __typename: "ModelConvoLinkConnection";
        items: Array<{
          __typename: "ConvoLink";
          id: string;
          convoLinkUserId: string | null;
          convoLinkConversationId: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null> | null;
        nextToken: string | null;
      } | null;
      name: string;
      members: Array<string>;
      createdAt: string | null;
      updatedAt: string | null;
    };
    messageConversationId: string;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type OnCreateUserSubscription = {
  onCreateUser: {
    __typename: "User";
    id: string;
    username: string;
    conversations: {
      __typename: "ModelConvoLinkConnection";
      items: Array<{
        __typename: "ConvoLink";
        id: string;
        user: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkUserId: string | null;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      items: Array<{
        __typename: "Message";
        id: string;
        author: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null;
        authorId: string | null;
        content: string;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        messageConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type OnUpdateUserSubscription = {
  onUpdateUser: {
    __typename: "User";
    id: string;
    username: string;
    conversations: {
      __typename: "ModelConvoLinkConnection";
      items: Array<{
        __typename: "ConvoLink";
        id: string;
        user: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkUserId: string | null;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      items: Array<{
        __typename: "Message";
        id: string;
        author: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null;
        authorId: string | null;
        content: string;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        messageConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};

export type OnDeleteUserSubscription = {
  onDeleteUser: {
    __typename: "User";
    id: string;
    username: string;
    conversations: {
      __typename: "ModelConvoLinkConnection";
      items: Array<{
        __typename: "ConvoLink";
        id: string;
        user: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkUserId: string | null;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        convoLinkConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    messages: {
      __typename: "ModelMessageConnection";
      items: Array<{
        __typename: "Message";
        id: string;
        author: {
          __typename: "User";
          id: string;
          username: string;
          createdAt: string | null;
          updatedAt: string | null;
        } | null;
        authorId: string | null;
        content: string;
        conversation: {
          __typename: "Conversation";
          id: string;
          name: string;
          members: Array<string>;
          createdAt: string | null;
          updatedAt: string | null;
        };
        messageConversationId: string;
        createdAt: string | null;
        updatedAt: string | null;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string | null;
  } | null;
};
