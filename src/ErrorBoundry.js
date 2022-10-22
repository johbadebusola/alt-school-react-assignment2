import {React, Component} from "react"
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: null };
    }
  
    static getDerivedStateFromError(error) {
     
      return {error};
    }
  
    componentDidCatch(error, errorInfo) {
      
console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.error) {
       
        return <h1 style={{color:"red"}}>Something went wrong.</h1>;
      }
  
      return this.props.children; 
    }
  }

  export default ErrorBoundary