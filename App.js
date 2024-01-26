import React from 'react';
import ReactDOM from 'react-dom';

// const heading = React.createElement('h1', {
//     id: 'heading'
// }, 'Hello from React'); // This is React Element(Object) => HTML (which Browser understands)
// console.log(heading)
// const content = React.createElement('div', { id: 'parent' }, [
//     React.createElement('div', { id: 'child1' }, [
//         React.createElement('h1', {}, 'I am from h1 tag'),
//         React.createElement('h2', {}, 'I am from h2 tag'),
//     ]),
//     React.createElement('div', { id: 'child2' }, [
//         React.createElement('h1', {}, 'I am from h1 tag'),
//         React.createElement('h2', {}, 'I am from h2 tag'),
//     ])
// ]);

// JSX => React Element (JS Object) using babel => HTM Element (DOM)

// component => A JS function which returns React Element

const Title = () => <h1>I am Title</h1>

const HeadingComponent = () => (
    <div>
        <Title /> 
        {/* Component Composition => compose one component into another component */}
        <h1>I am heading 🚀</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(HeadingComponent());
root.render(<HeadingComponent />);
