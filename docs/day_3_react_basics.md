# Day 3: React Frontend Basics

## 🎯 Learning Objectives

By the end of this lesson, you will be able to:
- Understand React's component-based architecture
- Set up a React project with TypeScript
- Create and compose React components
- Manage component state and props
- Handle user events and form submissions
- Make API calls to your Flask backend
- Style components using modern CSS approaches

## 📝 Prerequisites

- Completed Day 2 Flask API development
- Node.js 16+ installed
- Basic understanding of HTML, CSS, and JavaScript
- VS Code with React/TypeScript extensions installed

## 🚀 Lesson Content

### 1. Introduction to React

#### What is React?
- JavaScript library for building user interfaces
- Component-based architecture
- Virtual DOM for efficient rendering
- One-way data flow

#### Why TypeScript?
- Static typing
- Better IDE support
- Catch errors early
- Improved maintainability

### 2. Project Setup

1. Create a new React project:
```bash
npx create-react-app client --template typescript
cd client
```

2. Install additional dependencies:
```bash
npm install axios @mui/material @emotion/react @emotion/styled
```

3. Project structure:
```
client/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   └── index.tsx
├── public/
├── package.json
└── tsconfig.json
```

### 3. Component Development

#### Basic Components
1. Functional components
2. Props and prop types
3. Component composition
4. Event handling

#### Example Todo Component:
```typescript
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}
```

### 4. State Management

1. useState hook
2. useEffect hook
3. Custom hooks
4. Context API basics

### 5. API Integration

1. Axios setup
2. API service layer
3. Error handling
4. Loading states

### 6. Styling Approaches

1. CSS Modules
2. Styled Components
3. Material-UI
4. Responsive design

### 7. Form Handling

1. Controlled components
2. Form validation
3. Error messages
4. Submission handling

## 💻 Practice Exercises

1. Create a new React project with TypeScript
2. Implement a TodoList component that:
   - Displays a list of todos
   - Allows adding new todos
   - Supports marking todos as complete
   - Enables deleting todos
3. Create a form component for adding new todos
4. Implement API integration with your Flask backend
5. Add loading states and error handling
6. Style your components using Material-UI

## 📚 Additional Resources

- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Material-UI Documentation](https://mui.com/)
- [React Query Documentation](https://tanstack.com/query/latest)

## 🎯 Next Steps

- Learn about React Router
- Implement authentication
- Add form validation
- Set up testing

## 📝 Homework

1. Complete all practice exercises
2. Add form validation to the todo form
3. Implement error boundaries
4. Add loading skeletons
5. Write unit tests for your components

## 🔍 Quiz

1. What is the difference between props and state?
2. When should you use useEffect?
3. What are React hooks?
4. How do you handle API calls in React?
5. What is the purpose of TypeScript in React?

## 🎉 Conclusion

You've now learned the basics of React and TypeScript! In the next lesson, we'll learn how to containerize our application using Docker. 
