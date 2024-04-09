import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function CardExample() {
  return (
    <div className="flex justify-center">
      <div className="my-7">
        <Card style={{ width: '15rem' }}>
          <ListGroup variant="">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div className="my-7 ml-4">
        <Card style={{ width: '15rem' }}>
          <ListGroup variant="">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div className="my-7 ml-4">
        <Card style={{ width: '15rem' }}>
          <ListGroup variant="">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}

export default CardExample;

// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

// function CourseCard({ course }) {
//   return (
//     <div className="my-4">
//       <Card style={{ width: '18rem' }}>
//         <Card.Header>{course.title}</Card.Header>
//         <ListGroup variant="">
//           <ListGroup.Item>{course.description}</ListGroup.Item>
//           <ListGroup.Item>{course.instructor}</ListGroup.Item>
//           {/* Add more details as needed */}
//         </ListGroup>
//       </Card>
//     </div>
//   );
// }
// function CourseCardGrid({ courses }) {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {courses.map(course => (
//         <CourseCard key={course.id} course={course} />
//       ))}
//     </div>
//   );
// }

// export default CourseCardGrid;





