import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCard() {
  return (
    <Card style={{ width: '18rem', margin:'20px', padding:'10px', textAlign:'center' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-photo/cute-animals-heartwarming-creatures-from-animal-kingdom_974154-1547.jpg?w=360" />
      <Card.Body>
        <Card.Title>My Cute Family</Card.Title>
        <Card.Text>
          Hello Everyone, Is My Family Cuteee....
        </Card.Text>
        <Button variant="primary">Click me..</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;