import Card from 'react-bootstrap/Card';

const CardUser=({el})=>{
    return(
        <div>
    <Card style={{ width: '260px',height:'200px', margin:"10px" }}>
     
     <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          {el.username}
          <br/>
          
          {el.email}
          <br/>
          {el.address.geo.lat}
          <br/>
          {el.address.city}

        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
    )}

    export default CardUser