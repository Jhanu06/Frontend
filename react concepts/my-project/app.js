// Create React elements
let heading = React.createElement(
    'h2',
    { id: 'heading' },
    'This is a React JS demo - heading'
  );
  
  let para = React.createElement(
    'p',
    {},
    'This is a React JS demo - paragraph'
  );
  
  // Wrap both in a parent div
  let comb = React.createElement('div', {}, [heading, para]);
  
  // Mount to DOM using React 17 method
  let element = document.getElementById('root');
  ReactDOM.render(comb, element);

  
  // instead of using this abovae syntax -we use jsx-js+xml syntax
   