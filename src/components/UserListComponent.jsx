import { Card, CardBody, CardSubtitle, CardImg, CardTitle } from "reactstrap";

const UserListComponent = (props) => {
  const { id, email, first_name, last_name, avatar } = props;
  return (
    <div>
      <Card key={id}>
        <CardImg
          src={avatar}
        />
        <CardBody>
          <CardTitle style={{color: 'white', fontSize: '30px'}} tag="h5">{first_name + last_name}</CardTitle>
          <CardSubtitle tag="h6" className="text-muted">
            {email}
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserListComponent;