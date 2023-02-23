import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState, useEffect} from "react"


function SingleArticle() {
    const [singleNews, setsingleNews] = useState([])
    const fetchSingleArticle = async () => {
        try {
            const res = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
            if (res.ok) {
                const artSing = await res.json()
                setsingleNews(newsId)
            }else{
                console.log("error fetch")
            }
        } catch (error) {
            
        }
    }

    useEffect (() => {
        fetchSingleArticle()
    }, [])
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default SingleArticle;