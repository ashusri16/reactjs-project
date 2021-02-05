import React from "react"
import { Card,CardText, CardBody,
    CardTitle, CardSubtitle, Button} from "reactstrap";

const CardComponent = ({list}) => {
    return list.map((element)=>{
        const {price, stocked, name, description} = element;
        return (
            <div className="mb-3"> 
                    <Card className="mb-2">
                <CardBody>
                    
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-3 text-muted">{description}</CardSubtitle>
                    <CardText>
                        <h4>{price}</h4>
                        <p>{stocked}</p>
                    </CardText>
                    <Button className='mb-2' style = {{color:"white", backgroundColor: "green"}}> Add to cart</Button>
                </CardBody>
            </Card>
            </div>
        )
    });
    
    }

export default CardComponent;