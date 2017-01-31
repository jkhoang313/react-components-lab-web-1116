const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

const pOne = React.createElement('p', {}, "Two grannies having the time of their life!")
const pTwo = React.createElement('p', {}, "Passengers:")
const listItemOne = React.createElement('li', {}, "Agnes")
const listItemTwo = React.createElement('li', {}, "Muriel")
const list = React.createElement('ul', {}, [listItemOne, listItemTwo])
class OlderCoaster extends React.Component
  {
    render() {
      return React.createElement('div', {className: "oldercoaster"}, [pOne, pTwo, list])
    }
}

const paraOne = React.createElement('p', {}, "You shouldn't look too far.")
const strong = React.createElement('strong', {}, "right in front of you.")
const paraTwo = React.createElement('p', {}, ["Sometimes, the solution is ", strong])
class InFrontOfYou extends React.Component {
  render() {
    return React.createElement('div', {}, [paraOne, paraTwo])
  }
}

const paragraph = React.createElement('p', {}, "Hello! We have the following products for sale today:")
const lis = BUTCHER_PRODUCTS.map((product) => {
  return React.createElement("li", {}, product)
})
const l = React.createElement("ul", {}, lis)
class ButcherShop extends React.Component {
  render() {
    return React.createElement('div', {className: "butcher-shop"}, [paragraph, l])
  }
}

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('main')
);
