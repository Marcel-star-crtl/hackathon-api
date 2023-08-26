const { gql } = require('apollo-server');

module.exports = gql`
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    avatar: String
    status: String!
    description: String
    courses: [Course!]!
    institution: Institution!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type Institution {
    id: ID!
    name: String!
    description: String
    courses: [Course!]
    users: String!
  }

  input InstitutionInput {
    name: String!
    description: String
  }

  type Course {
    id: ID!
    name: String!
    instructor: User
    numberOfStudents: Int!
    description: String 
    takenBy: [User!]!
    modules: [Module]
    institution: Institution!
  }

  input CourseInput {
    name: String!
    description: String
    institutionId: ID!
  }

  input UpdateDateCourseInput {
    name: String
    description: String 
    institutionId: ID!
  }

  type Module {
    id: ID!
    name: String!
    linkPdf: String!
    linkVideo: String!
    moduleOf: Course!
  }

  type Query {
    user(username: String!): User
    users: [User!]!
    me: User!
    courses: [Course!]!
    course(id: ID): Course!
    modules: [Module!]!
    institution(id: ID!): Institution!
    institutions: [Institution!]!
  }
  type Mutation {
    newCourse(name: String!): Course!
    deleteCourse(id: ID!): Boolean!
    enrolCourse(id: ID!): Course!
    newModule(name: String!, linkPdf: String!, linkVideo:String!, courseId:String!): Module!
    deleteModule(id: String!): Boolean!
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createInstitution(input: InstitutionInput!): Institution!
    updateInstitution(id: ID!, input: InstitutionInput!): Institution!
    deleteInstitution(id: ID!): Institution!
  }
  
  type Subscription {
    name: String
  }
`;
