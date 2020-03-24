
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export class ErrorBoundary extends Component {
    
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError (error) {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
        // You can render any custom fallback UI
        return <View><Text>Something went wrong.</Text></View>;
      }
  
      return this.props.children; 
    }
}

export default ErrorBoundary;
