// const heading = React.createElement('h1', {
//     id: 'heading'
// }, 'Hello from React'); // This is React Element(Object) => HTML (which Browser understands)
// console.log(heading)
var content = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', {}, 'I am from h1 tag'),
        React.createElement('h2', {}, 'I am from h2 tag'),
    ]),
    React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, 'I am from h1 tag'),
        React.createElement('h2', {}, 'I am from h2 tag'),
    ])
]);
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(content);
