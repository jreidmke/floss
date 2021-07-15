const flavorList = [
  'Acai Berry',
  'Almond',
  'Amaretto',
  'Anise',
  'Apple',
  'Apricot',
  'Banana',
  'Bacon',
  'Bavarian Cream',
  'Beer',
  'Berry Cola',
  'Birch Beer',
  'Black Licorice',
  'Black Cherry',
  'Black Currant',
  'Black Walnut',
  'Blackberry',
  'Blue Raspberry',
  'Blueberry',
  'Bourbon',
  'Bubble Gum',
  'Butter',
  'Butter Almond',
  'Butter Milk',
  'Butter Pecan',
  'Butter Rum',
  'Butter Toffee',
  'Butterscotch',
];

function Flavors() {
  return (
    <ul style={{ columnCount: 4 }}>
      {flavorList.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  );
}

export { Flavors };
