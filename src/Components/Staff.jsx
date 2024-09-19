import Card from 'react-bootstrap/Card';
const Staff=()=>{
    return <>
        <div class="container-fluid mt-5 ps-5 pe-5">
            <div className="row">
            <div className="col-12 ">
                    <h1 class="text-center text-red-200">Our Staff Members</h1>
                </div>
            </div>
            <div class="row justify-content-around ps-1 pe-3 mt-2">
                <div class="col-12 col-md-4 col-lg-3  shadow-lg p-4 mt-3">
                <Card style={{ width:'100%' }}>
                    <Card.Img variant="top" height={'250px'} src="https://img.freepik.com/free-photo/beautiful-young-woman-home-office-working-from-home-teleworking-concept_144627-46787.jpg?ga=GA1.1.1909221304.1719828171&semt=ais_hybrid" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                </div>
                <div class="col-12 col-md-4 col-lg-3 shadow-lg p-4 mt-3">
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" height={'250px'} src="https://img.freepik.com/free-photo/beautiful-young-woman-home-office-working-from-home-teleworking-concept_144627-46787.jpg?ga=GA1.1.1909221304.1719828171&semt=ais_hybrid"/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                </div>
                <div class="col-12 col-md-4 col-lg-3 shadow-lg p-4 mt-3">
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" height={'250px'} src="https://img.freepik.com/free-photo/beautiful-young-woman-home-office-working-from-home-teleworking-concept_144627-46787.jpg?ga=GA1.1.1909221304.1719828171&semt=ais_hybrid" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
                </div>
            </div>
        </div>
    </>
}
export default Staff;